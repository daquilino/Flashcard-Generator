/*  NOTES 

	1. basic or cloze
	2. use or create 

	3. basic
			create - create
			use - display/answer

	4. cloze
		create - create
		use - display/answer				
*/


const BASIC  = require('./basicCard.js');
const CLOZE  = require('./clozeCard.js');
const INQUIRER = require('inquirer');

function start()
{
	INQUIRER.prompt([

		{
			type:"list",
			message: "What would you like to do?",
			choices: ["Create Flachcards", "View Flashcards"],
			name: "choice"		
		}
	
	]).then(function(user){

			INQUIRER.prompt([

			{
				type:"list",
				message: "What would you like to do?",
				choices: ["1", "2"],
				name: "choice"		
			}
		
			]).then(function(user2){
				console.log(user.choice)
				console.log(user2.choice)
				

			});

	});
}

//for quick test - REDO WITH FS
let basicCards = [{question: "what color", answer: "blue"},{question: "what day", answer: "thursday"},{question: "what time", answer:"now"}];

function askQuestion()
{
	return basicCards[Math.floor(Math.random()*basicCards.length)];
}

function makeBasicCard()
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

			
			basicCards.push(new BASIC.BasicCard(user.question, user.answer));

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


function playBasicCard()
{
	let card = askQuestion();
	console.log(card.question);
	INQUIRER.prompt([
	{
		message: "Answer:",
		name: "answer"
	}

	]).then(function(user){

		if(user.answer === card.answer)
			console.log("Correct");
		else if(user.answer === "quit")
		{	
			console.log("GOODBYE");
			return;
		}	
		else
			console.log("Incorrect");

		playBasicCard();
	});

}//END playBasic()


// let x = new CLOZE.ClozeCard("test card", "card");
// console.log(x.makePartialText());

// let z = new CLOZE.ClozeCard("this should be false", "this, card");
// console.log(z.makePartialText());

// let y = new CLOZE.ClozeCard("Red and blue make purple?", "red, bluex");
// if(y.makePartialText())
// 	console.log(y.partialText);
// else
// 	console.log("Try Again!");

// let b = new CLOZE.ClozeCard("The colors red and blue make purple.", "red, blue");
// if(b.makePartialText())
// 	console.log(b.partialText);
// else
// 	console.log("Try Again!");

// console.log(b);



//makeBasicCard();
//playBasicCard();

// let card1 = new BASIC.BasicCard("Who was the first president of the United States?", "George Washington");

// console.log(card1);

start();
