const prompt = require('prompt-sync')();

console.log('Welcome!');
console.log('Register to continue!');
var usernameRegister = prompt('Username: ');
console.log('-');
var passwordRegister = prompt('Password: ');
console.log('-');
let confirmPasswordRegister = 0;
while(passwordRegister != confirmPasswordRegister){
    confirmPasswordRegister = prompt('Confirm password: ')
    if(confirmPasswordRegister != passwordRegister){
        console.log('the password aren´t equal!');
        console.log('>>');
    }
}

console.log('Do login to use the app!');
let login = 0
while(login != 1){
    var usernameLogin = prompt('Username: ');
    var passwordLogin = prompt('Password: ');

    if(usernameLogin != usernameRegister || passwordLogin != passwordRegister){
        console.log('Username or password not registered, try again or register!');
    }else{
        login = 1
    }    
}

console.log('Welcome '+usernameLogin+'!');

