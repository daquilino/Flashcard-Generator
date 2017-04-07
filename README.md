# Flashcard-Generator
	
Flashcard-Generator essentially constitute an API that allows users to create two types of flashcards, Basic and Cloze-Deleted, whick is simply a sentence that has had some of its text removed. 

Basic flashcards have a 'front' (queston), and a 'back' (answer).
	
Cloze-Deleted flashcards have full text (answer), and partial text (question), which is created from the full text with the 'cloze-deletion' term(s) removed. 

	
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
#### basic-flashcard.js

1. `Creating a BasicCard object (flashcard)`

*  The 'BasicCard' constructor simply has two parameters, 'front' and 'back', which each get assigned respectivly to its two properties 'front' and 'back'.
 
```javascript
	const BASIC = require('./basic-flashcard.js')
	
	~~~
	
	let card1 = new BASIC.BasicCard(Who was the first president of the United States?", "George Washington");

```

   * description

2. `two` 

```
$ node command
```

   * descrition
     
	 



## Built With

* [Sublime Text](https://www.sublimetext.com/) - Text Editor.

###### NPM Packages

* [file-system](https://www.npmjs.com/package/file-system)	- Library to read/write data in a file.
* [inquirer](https://www.npmjs.com/package/inquirer) - Library of common interactive command line user interfaces.



## Author

* **Douglas Aquilino** - [https://github.com/daquilino](https://github.com/daquilino)


