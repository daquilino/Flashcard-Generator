# Flashcard-Generator
	
Flashcard-Generator contains two modules, basicCard.js and clozeCard.js, that allows users to create two types of flashcards, Basic and Cloze-Deleted.  

- Basic flashcards have a 'front' (queston), and a 'back' (answer).

   **Front** - "Who was the first president of the United States?"

   **Back** - "George Washington"

	
- Cloze-Deleted flashcards have three parts, full text (answer), partial text (question), and 'cloze-deletion' term(s) which when removed from the full text create the partial text. 
      
   **Full Text** - "George Washington was the first president of the United States."

   **Cloze Deletion** - Word(s) to remove "George Washington":

   **Partial Text** - "... was the first president of the United States."

	
## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org) 


### Installing

1. Download and install Node.js (if not installed already). 
[Node.js Download Page](https://nodejs.org/en/download/)

2. Clone Flashcard-Generator repository. 

```
$ git clone https://github.com/daquilino/Flashcard-Generator
```

3. Within cloned repository run the following to install npm packages.

```
$ npm install
```


## Usage
#### basicCard.js

`Creating a BasicCard object (flashcard)`

*  The 'BasicCard' constructor simply has two parameters, 'front' and 'back', which each get assigned to respective properties 'front' and 'back'.
 
```javascript
const BASIC = require('./basic-flashcard.js')
	
***
	
let card1 = new BASIC.BasicCard("Who was the first president of the United States?", "George Washington");

console.log(card1);

// BasicCard {
//	front: 'Who was the first president of the United States?',
//	back: 'George Washington' }

```
 #### clozeCard.js

`Creating a ClozeCard object (flashcard)`

*  The 'ClozeCard' constructor has two parameters, 'fullText' and 'clozeDeletion', which each get assigned to respective properties 'fullText' and 'clozeDeletion'. Both parameters are strings with 'clozeDeletion' accepting multiple terms in ONE string seperated by commas (example "red, blue").  'ClozeCard' also has one method 'makePartialText' which checks if the full text contains the cloze deletion term(s).  If it does the method creates the objecs 'partialText' property, appends the object to 'Cloze-Flashcards.txt' file and returns 'true'. If the full text does not contain the cloze deletion term(s), an error messege is logged to the user, the method returns 'false', and the object is NOT appended to the file.
 
```javascript
const CLOZE  = require('./clozeCard.js');
	
***

//general synatax new CLOZE.ClozeCard('full text', 'cloze deletion 1, cloze deletion 2, ...');
	
let card1 = new CLOZE.ClozeCard("The colors red and blue make purple.", "red, blue");
console.log(card1.makePartialText); //true

console.log(card1);

// ClozeCard {
//	fulltext: 'The colors red and blue make purple.',
//	clozeDeletion: 'red, blue'
//  partialText: 'THE COLORS ... AND ... MAKE PURPLE.' }

```
     
	 



## Built With

* [Sublime Text](https://www.sublimetext.com/) - Text Editor.

###### NPM Packages

* [file-system](https://www.npmjs.com/package/file-system)	- Library to read/write data in a file.
* [inquirer](https://www.npmjs.com/package/inquirer) - Library of common interactive command line user interfaces.



## Author

* **Douglas Aquilino** - [https://github.com/daquilino](https://github.com/daquilino)