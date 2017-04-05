
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
		if(text.indexOf(cloze) < 0)
		{
			console.log("Error!" ,"'"+ text + "'" ,"does not contain","'" +  cloze + "'." );
		}
		else
		{
			this.text = text;
			this.cloze = cloze;
			this.partialText = text.replace(cloze, "...");
		}
	}
	//If 'this' is bound to window object (i.e 'new' was not used).  
	else
	{
		return new ClozeCard(text, cloze)
	}	 
}	

ClozeCard.prototype.print = function()
{
	console.log(this.text);
};


//================================== Test Code Below ==================================================
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze);

// "George Washington"
//console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
//console.log(firstPresidentCloze.partialText); 

// "George Washington was the first president of the United States.
//console.log(firstPresidentCloze.partialText);