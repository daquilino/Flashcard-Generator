//Douglas Aquilino 		April 8,2017		flashcards-cli.js
//
//	Node.js Test Program For basicCard.js and clozeCard.js.	

const BASIC  = require('./basicCard.js');
const CLOZE  = require('./clozeCard.js');
const INQUIRER = require('inquirer');
const FS = require('fs');

function start()
{
	INQUIRER.prompt([

		{
			type:"list",
			message: "What would you like to do?",
			choices: ["Create Flachcards", "Play Flashcards"],
			name: "choice"		
		}
	
	]).then(function(prompt1){

			INQUIRER.prompt([

			{
				type:"list",
				message: "What type of flashcard?",
				choices: ["Basic", "Cloze Deleted"],
				name: "choice"		
			}
		
			]).then(function(prompt2){
				switch(prompt1.choice)
				{
					case "Create Flachcards":
						if(prompt2.choice === "Basic")
							makeBasicCards();
						else
							makeClozeCards();
						break;
					case "Play Flashcards":
						if(prompt2.choice === "Basic")
							playBasicCards(0);
						else
							playClozeCards(0);
						break;
				}
				
			});

	});
}//END start()



//======================================================
function makeBasicCards()
{
	INQUIRER.prompt([

		{
			type:"input",
			message: "Question:",
			name: "question"
			
		},
		{
			type:"input",
			message: "Answer:",
			name: "answer"
		}

		]).then(function(user){

			
			let card = new BASIC.BasicCard(user.question, user.answer);
			FS.appendFile("basic-cards.txt", JSON.stringify(card) + '\n');

			INQUIRER.prompt([

			{
				type:"confirm",
				message: "Do You Want Make Another FlashCard?",
				name: "confirm",
				default: false
			
			}
			]).then(function(user)
			{
				if(user.confirm)
					makeBasicCards();
				
			});
				
	});
}//END makeBasicCard()


function playBasicCards(i)
{
	
	FS.readFile("basic-cards.txt", "utf8", function(err, data){

		if(err)
		{
			console.log("Error loading basic-cards.txt");
			return;
		}
		
		let cards = data.split("\n");
		
		if(cards[i].length > 0 && i < cards.length)
		{

			let cardobj = JSON.parse(cards[i]);
			console.log("\nQuestion:", cardobj.front);

			INQUIRER.prompt([
			{
				message: "Answer:",
				name: "answer"
			}

			]).then(function(user){

				if(user.answer === cardobj.back)
					console.log("Correct");
				else
					console.log("Incorrect. The correct answer is '" + cardobj.back +"'.");
				
				i++;
				playBasicCards(i);
			});	
		}	
	});
	
}//END playBasic()


//=========================================================
function makeClozeCards()
{
	INQUIRER.prompt([

		{
			type:"input",
			message: "Full Text:",
			name: "fulltext"
			
		},
		{
			type:"input",
			message: "Cloze Deletion(s) (seperated terms commas):",
			name: "cloze"
		}

		]).then(function(user){

			let card = new CLOZE.ClozeCard(user.fulltext, user.cloze);

			card.makePartialText();
			
			INQUIRER.prompt([

			{
				type:"confirm",
				message: "Do You Want Make Another FlashCard?",
				name: "confirm",
				default: false
			
			}
			]).then(function(user)
			{
				if(user.confirm)
					makeClozeCards();
				else
					return;
			});				
	});

}//END makeClozeCards()

//========================================


function playClozeCards(i)
{
	FS.readFile("Cloze-Flashcards.txt", "utf8", function(err, data){

		if(err)
		{
			console.log("Error loading Cloze-Flashcards.txt");
			return;
		}
		
		let cards = data.split("\n");
		
		if(cards[i].length > 0 && i < cards.length)
		{

			let cardobj = JSON.parse(cards[i]);
			console.log("\nQuestion:", cardobj.partialText);

			INQUIRER.prompt([
			{
				message: "Answer (seperate terms with commas):",
				name: "answer"
			}

			]).then(function(user){

				

				if(user.answer.replace(/\s/g, "").toUpperCase() === cardobj.clozeDeletion.replace(/\s/g, "").toUpperCase())
					console.log("Correct");
		
				else
				{	
					console.log("Incorrect!");
					console.log("Correct Answer:", cardobj.fullText);
				}	
				i++;
				playClozeCards(i);
			});	
		}	
	});

}



start();
