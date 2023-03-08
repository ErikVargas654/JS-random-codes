const prompt = require('prompt-sync')();

console.log('Wich number you want to add?');
let numberAdd1 = parseFloat(prompt('number 1: '));
let numberAdd2 = parseFloat(prompt('number 2: '));

var finalAddNumber = (numberAdd1 + numberAdd2);

console.log('>> '+numberAdd1+' + '+numberAdd2+' = '+finalAddNumber);
