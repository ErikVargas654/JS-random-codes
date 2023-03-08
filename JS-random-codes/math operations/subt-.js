const prompt = require('prompt-sync')();

console.log('what number do you want to subtract');
let numberSub1 = parseFloat(prompt('number 1: '));
let numberSub2 = parseFloat(prompt('number 2: '));

var finalSubNumber = (numberSub1 - numberSub2);

console.log('>> '+numberSub1+' - '+numberSub2+' = '+finalSubNumber);