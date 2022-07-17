const validator  = require('validator');
const chalk = require('chalk');
const getNotes = require ('./notes.js');


var msg =getNotes();

console.log(msg);

console.log(validator.isEmail('asd@gmail.com'));


console.log(chalk.green('Success !!!!!'));

// Nest styles
console.log(chalk.inverse.bold('Hello', chalk.blue.bgBlue('world') + '!'));

console.log("deneme");