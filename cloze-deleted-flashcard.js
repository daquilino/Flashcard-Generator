// Douglas Aquilino   April 4, 2017      'cloze-deleted-flashcard.js' module
//
// This module contains a constructor function and protorype method used to create
// and store (in a text file) a 'Cloze Deleted Flashcard' object.
// 
// A 'Cloze Deletion' is simply a sentence that has had some of its text removed.
//
// 'makePartialText' method returns true if full text contains cloze deletion
// otherwise, returns false.

// file-system npm package
const FS = require('fs');

// 'ClozeCard' object constructor.  This constructor is 'scope-safe'.
function ClozeCard(fullText, clozeDeletion)
{
	//Checks if 'this' is bound to ClozeCard object (i.e. 'new' was used.) 
	if(this instanceof ClozeCard)
	{		
		this.fullText = fullText;
		this.clozeDeletion = clozeDeletion;	
	}
	//If 'this' is bound to window object (i.e 'new' was not used).  
	else
	{
		return new ClozeCard(fullText, clozeDeletion)
	}	 
}// END ClozeCard constructor	


// ClozeCard prototype method for creating 'partialText' property of object and
// storing JSON.stringify(ed) object to 'clozeCards.txt' file.
// If the 'clozeDeleteion' term(s) are not conatined in the 'fullText', an error
// message is logged to the user,the method returns 'false', the object is not appended.
// Otherwise a 'partialText' property of the object is created and the object
// is appended as a string to the 'clozeCards.txt' and the method returns 'true';  
ClozeCard.prototype.makePartialText = function()
{
	//array containing each 'clozeDeletion' word.
	let clozeWords = this.clozeDeletion.toUpperCase().split(",");
	
	let fullTextUpper = this.fullText.toUpperCase();
	
	this.partialText = fullTextUpper;
	
	// check if word in each cloze words are in full text.
	for(let key in clozeWords)	
	{
		// check if each word in 'clozeWords' are in full text.
		if(this.partialText.indexOf(clozeWords[key].trim()) < 0)
		{
			console.log("Error!" ,"'"+ fullTextUpper + "'" ,"does not contain","'" +  clozeWords[key] + "'." );
			return false;
		}
		else
		{	
			this.partialText = this.partialText.replace(clozeWords[key].trim(), "...");	
		}		
	}

	// Appends ClozeCard object as string to 'clozeCard.txt'
	FS.appendFile('clozeCards.txt', JSON.stringify({
		fullText: this.fullText,
		clozeDeletion: this.clozeDeletion,
		partialText: this.partialText

	}) + "\n", function(error){
		if(error){ console.log("Error Saving Card!")}
	});
	return true;
};


exports.ClozeCard = ClozeCard;



