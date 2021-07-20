const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

console.log('hello, world');
const firstName = "Rah";
let age = 25;
console.log(firstName, age);

const isCool = true;
let powerLevel;
console.log(powerLevel);

reader.question("Enter a number to see if it's Rah's favorite", function(num){
    if ( num === 12){
        console.log("That's Rah's favorite!")
    } else {
        console.log("Womp womp thanks for playing")
    }
})