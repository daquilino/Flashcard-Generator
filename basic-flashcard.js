//Douglas Aquilino   April 4, 2017
//basic-flashcard.js module
//
// This module contains a constructor function used to create a 'Basic Flashcard' object.
// A 'Basic Flashcard' is simple a flashcard that has a question on one side,
// and an answer on the otherside.

let BasicCard = function (front, back)
{
	this.front = front;
	this.back = back;
}

exports.BasicCard = BasicCard;