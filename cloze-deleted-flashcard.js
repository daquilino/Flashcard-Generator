//Douglas Aquilino   April 4, 2017      'cloze-deleted-flashcard.js' module
//
// This module contains a constructor function used to create a 'Cloze Deleted Flashcard' object.
// A 'Cloze Deletion' is...
// .makePartialText returns true if full text contains cloze deletion
// .makePartialText returns false if full text does not contain cloze deletion

//file-system npm package
const FS = require('fs');


//'ClozeCard' object constructor.  This constructor is 'scope-safe'.
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
}//END ClozeCard constructor	


// Method 
ClozeCard.prototype.makePartialText = function()
{
	let clozeWords = this.clozeDeletion.toUpperCase().split(",");
	
	this.partialText = this.fullText.toUpperCase();
	
	for(let key in clozeWords)	
	{
		//check if word in each cloze words are in full text.
		if(this.partialText.indexOf(clozeWords[key].trim()) < 0)
		{
			console.log("Error!" ,"'"+ this.fullText.toUpperCase() + "'" ,"does not contain","'" +  clozeWords[key] + "'." );
			return false;
		}
		else
		{	
			this.partialText = this.partialText.replace(clozeWords[key].trim(), "...");	
		}		
	}

	//Appends ClozeCard object as string in 'clozeCard.txt'
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



