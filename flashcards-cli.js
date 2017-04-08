//Douglas Aquilino 		April 8,2017		flashcards-cli.js
//
//	

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
							playBasicCards();
						else
							playClozeCards();
						break;

				}
				
			});

	});
}


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
			FS.appendFile("basic-cards.txt", JSON.stringify(card));

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
					makeBasicCard();
				else
					playBasicCard();
			});
				
	});
}//END makeBasicCard()


function playBasicCards()
{
	let cards = [];
	FS.readFile("basic-cards", "utf8", function(err, data){

		cards = data.split("\n")

});
	
console.log(cards);
	// console.log(card.question);
	// INQUIRER.prompt([
	// {
	// 	message: "Answer:",
	// 	name: "answer"
	// }

	// ]).then(function(user){

	// 	if(user.answer === card.answer)
	// 		console.log("Correct");
	// 	else if(user.answer === "quit")
	// 	{	
	// 		console.log("GOODBYE");
	// 		return;
	// 	}	
	// 	else
	// 		console.log("Incorrect");

	// 	playBasicCard();
	// });

}//END playBasic()

function makeClozeCards()
{
	console.log("make cloze");

}

function playClozeCards()
{
	console.log("play cloze");

}



start();
