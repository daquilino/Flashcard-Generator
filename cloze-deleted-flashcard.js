//Douglas Aquilino   April 4, 2017
//cloze-deleted-flashcard.js module
//
// This module contains a constructor function used to create a 'Cloze Deleted Flashcard' object.
// A 'Cloze Deletion' is...
// 


function ClozeCard(text, cloze)
{
	//Checks if 'this' is bound to ClozeCard object (i.e. 'new' was used.) 
	if(this instanceof ClozeCard)
	{		
		this.text = text;
		this.cloze = cloze;	
	}
	//If 'this' is bound to window object (i.e 'new' was not used).  
	else
	{
		return new ClozeCard(text, cloze)
	}	 
}	


ClozeCard.prototype.makePartialText = function()
{
	let clozeWords = this.cloze.toUpperCase().split(",");
	
	this.partialText = this.text.toUpperCase();
	
	for(let key in clozeWords)	
	{
		//check if word in each cloze words are in full text.
		if(this.partialText.indexOf(clozeWords[key].trim()) < 0)
		{

			console.log("Error!" ,"'"+ this.text + "'" ,"does not contain","'" +  clozeWords[key] + "'." );
			this.partialText = null;
			return;
		}
		else
		{	
			this.partialText = this.partialText.replace(clozeWords[key].trim(), "...");	
		}
	}
};


exports.ClozeCard = ClozeCard;