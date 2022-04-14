// Halldór Jónsson - Dog Age Calculator

const myAge = 36;

var earlyYears = 2;

earlyYears = earlyYears * 10.5;

var laterYears = myAge - 2;

laterYears *= 4;

console.log(laterYears);
console.log(earlyYears);

var myAgeInDogYears = earlyYears + laterYears;

var myName = 'Halldor'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);