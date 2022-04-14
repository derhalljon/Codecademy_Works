//Halldór Jónsson - Magic Eight Ball
let userName = 'Bob';
var userQuestion = 'Should I order a pizza?';
var eightBall = '';
var randomNumber = (Math.floor(Math.random() * 8));
//console.log(randomNumber);

if (userName === '') {
    console.log('Hello friend! Do you have a question?');
} else {
    console.log(`Hello ${userName}, do you have a question?`);
}
console.log(`${userName}, you have asked: ${userQuestion}`);

switch (randomNumber) {
    case 1:
        console.log('It is certain');
        break;
    case 2:
        console.log('It is decidedly so');
        break;
    case 3:
        console.log('Reply hazy, try again');
        break;
    case 4:
        console.log('Cannot predict now');
        break;
    case 5:
        console.log('Do not count on it');
        break;
    case 6:
        console.log('My sources say no');
        break;
    case 7:
        console.log('Outlook not so good');
        break;
    case 8:
        console.log('Signs point to yes');
        break;
    case 0:
        console.log('I didn\'t understand, ask again');
}

/*
Using if/else statements

if (randomNumber === 1) {
  console.log('It is certain');
} else if (randomNumber === 2) {
  console.log('It is decidedly so');
} else if (randomNumber === 3) {
  console.log('Reply hazy, try again');
} else if (randomNumber === 4) {
  console.log('Cannot predict now');
} else if (randomNumber === 5) {
  console.log('Do not count on it');
} else if (randomNumber === 6) {
  console.log('My sources say no');
} else if (randomNumber === 7) {
  console.log('Outlook not so good');
} else if(randomNumber === 8) {
  console.log('Signs point to yes');
} else if (randomNumber === 0) 
  console.log('I didn\'t understand, ask again');
*/