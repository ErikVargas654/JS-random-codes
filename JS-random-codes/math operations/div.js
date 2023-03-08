const prompt = require('prompt-sync')();

console.log('what number do you want to divide');
let numberDiv1 = parseFloat(prompt('number 1: '));
let numberDiv2 = parseFloat(prompt('number 2: '));

var finalDivNumber = (numberDiv1 / numberDiv2);

console.log('>> '+numberDiv1+' / '+numberDiv2+' = '+finalDivNumber);