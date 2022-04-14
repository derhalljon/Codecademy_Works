// Halldór Jónsson - Sleep Debt Calculator
const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 6;
    } else if (day === 'wednesday') {
        return 4;
    } else if (day === 'thursday') {
        return 5;
    } else if (day === 'friday') {
        return 6;
    } else if (day === 'saturday') {
        return 7;
    } else if (day === 'sunday') {
        return 6;
    } else {
        return 'Not a valid input';
    }
};

const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')


const getIdealSleepHours = () => {
    const idealHours = 6;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log(`You got the perfect amount of sleep. A total of ${idealSleepHours} hours.`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got more sleep than needed. You are ${actualSleepHours - idealSleepHours} hours over your ideal sleep time.`)
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You haven't slept enough, you are in sleep debt of ${idealSleepHours - actualSleepHours} hours. Take a nap.`)
    }
};
calculateSleepDebt();







