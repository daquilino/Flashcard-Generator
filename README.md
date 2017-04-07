# Flashcard-Generator
	
Flashcard-Generator contains two modules, basicCard.js and clozeCard.js, that allows users to create two types of flashcards, Basic and Cloze-Deleted.  

- Basic flashcards have a 'front' (queston), and a 'back' (answer).

	
- Cloze-Deleted flashcards have full text (answer), and partial text (question), which is created from the full text with the 'cloze-deletion' term(s) removed. 

		"George Washington was the first president of the United States."

		We can create a "cloze deletion" by removing the words "George Washington":

		"... was the first president of the United States."

	
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

*  The 'ClozeCard' constructor simply has two parameters, 'front' and 'back', which each get assigned to respective properties 'front' and 'back'.
 
```javascript
const CLOZE  = require('./clozeCard.js');
	
***
	
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


1. And another item.

...You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

...To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
...Note that this line is separate, but within the same paragraph.⋅⋅
...(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)