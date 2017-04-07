//Douglas Aquilino   April 4, 2017	'basic-flashcard.js' module
//
// This module contains a constructor function used to create a 'Basic Flashcard' object.
//
// A 'Basic Flashcard' is simple a flashcard that has a question on one side,
// and an answer on the otherside.
//
// The 'BasicCard' constructor simply has two parameters, 'front' and 'back', which each 
//get assigned to respective properties 'front' and 'back'.   


let BasicCard = function (front, back)
{
	this.front = front;
	this.back = back;
}

exports.BasicCard = BasicCard;