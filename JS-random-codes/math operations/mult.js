const prompt = require('prompt-sync')();

console.log('what number do you want to multiply');
let numberMult1 = parseFloat(prompt('number 1: '));
let numberMult2 = parseFloat(prompt('number 2: '));

var finalMultNumber = (numberMult1 * numberMult2);

console.log('>> '+numberMult1+' x '+numberMult2+' = '+finalMultNumber);