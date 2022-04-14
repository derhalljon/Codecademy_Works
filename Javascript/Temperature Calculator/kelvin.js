// Halldór Jónsson - Temperature Calculator

const kelvin = 293;
// celcius is the number of kelvin minus 273
var celsius = kelvin - 273;
var fahrenheit = celsius * (9 / 5) + 32;
var newton = celsius * (33 / 100);
newton = Math.round(newton);
console.log(`The temperature is ${newton} Newtons.`);

fahrenheit = Math.round(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);