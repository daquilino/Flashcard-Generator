
function BasicCard(front, back)
{
	this.front = front;
	this.back = back;
}

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
	
	let clozeWords = this.cloze.split(" ");
	
	this.partialText = this.text;
	
	
	for(let key in clozeWords)	
	{
		//check if word in each cloze words are in full text.
		if(this.text.indexOf(clozeWords[key]) < 0)
		{
			console.log("Error!" ,"'"+ this.text + "'" ,"does not contain","'" +  clozeWords[key] + "'." );
			this.partialText = null;
		}
		else
		{	
			this.partialText = this.partialText.replace(clozeWords[key], "...");	
		}
	}

	//if this.partiaText != null
	//displays partial text.
	if(this.partialText)
	{		
		console.log(this.partialText);
	}
};


//================================== Test Code Below ==================================================
//var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

//firstPresidentCloze.makePartialText();

// "George Washington"
//console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
//console.log(firstPresidentCloze.partialText); 

// "George Washington was the first president of the United States.
//console.log(firstPresidentCloze.partialText);

//---------------------------------------------------

let favColors = new ClozeCard("Red, green, and blue are my favorite colors.", "Red green blue");

favColors.makePartialText();