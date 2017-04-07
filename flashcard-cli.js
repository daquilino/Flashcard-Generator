const BASIC  = require('./basic-flashcard.js');
const CLOZE  = require('./cloze-deleted-flashcard.js');
const INQUIRER = require('inquirer');



//for quick test - REDO WITH FS
let clozeCards = [];

function askQuestion()
{
	let card = clozeCards[Math.floor(Math.random()*clozeCards.length)];
}



function makeBasicCard()
{
	INQUIRER.prompt([

		{
			type:"confirm",
			message: "Do You Want Make Another FlashCard?",
			name: "confirm",
			default: false

		}

		]).then(function(user){

			console.log(user.confirm);



		});
}//END makeBasicCard()


let x = new CLOZE.ClozeCard("test card", "card");
console.log(x.makePartialText());

let z = new CLOZE.ClozeCard("this should be false", "this, card");
console.log(z.makePartialText());