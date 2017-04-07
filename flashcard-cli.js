const BASIC  = require('./basic-flashcard.js');
const CLOZE  = require('./cloze-deleted-flashcard.js');
const INQUIRER = require('inquirer');



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

//makeBasicCard();
playBasicCard();


