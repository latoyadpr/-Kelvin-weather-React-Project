var kelvin = 293;
console.log(kelvin);
//Output ; 293
const celsius = kelvin - 273;
// Output:20
let fahrenheit = celsius * (9 / 5) + 32;
// Output:
fahrenheit = Math.floor(fahrenheit);
// Output :
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
const kelvin = 0;

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
