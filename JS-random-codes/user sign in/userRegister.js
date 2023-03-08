const prompt = require('prompt-sync')();

console.log('Welcome to Kaue gayzinho!');
console.log('Register to continue: ');
var username = prompt('Username: ');
console.log('-');
var password = prompt('Password: ');
console.log('-');
let confirmPassword = 0;
while(password != confirmPassword){
    confirmPassword = prompt('Confirm password: ')
    if(confirmPassword != password){
        console.log('the password aren´t equal!');
        console.log('>>');
    }
}
console.log('Welcome '+username+'!');
console.log(password);
console.log(confirmPassword);