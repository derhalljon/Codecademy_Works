// Halldór Jónsson - Assigning for race and registration number
const early = true;
var runnersAge = 18;
var racers = [];
var min = 1000;
var max = 9999;

for (let i = 0; i < max; i++) {
    var raceNumber = Math.floor(Math.random() * max) + min;
    var check = racers.includes(raceNumber)
}
if (check === false) {
    racers.push(raceNumber);
} else {
    while (check === true) {
        var raceNumber = Math.floor(Math.random() * max) + min;
        check = numbers.includes(raceNumber);
        if (check === false) {
            numbers.push(raceNumber);
        }
    }
}
assignedNumber = raceNumber + 1000;
if (early && runnersAge > 18) {
    console.log(`Your race number is: ${assignedNumber} and your race will start at 9:30am.`);
} else if (!early && runnersAge > 18) {
    console.log(`Your race number is: ${assignedNumber} and your race will start at 11:00am.`);
} else if (runnersAge < 18) {
    console.log(`Your race number is: ${assignedNumber} and your race will start at 12:30pm.`)
} else if (runnersAge === 18) {
    console.log('Error: Please go to the registration desk.')
}
