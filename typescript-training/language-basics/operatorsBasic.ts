/*
function addNumbers(a: number, b: number): number {
    return a + b;
}
function multiplyNumbers(a: number, b: number): number {
    return a*b;

}

function subtractNumbers(a: number, b: number): number {
    return a-b;
}

function divideNumbers(a: number, b: number): number {
    
    return a/b;
}
// Example usage:
const result = addNumbers(5, 7);
const result1 = multiplyNumbers(6,7)
const result2 = subtractNumbers(7, 9)
const result3 = divideNumbers(10,0)
console.log("The sum is:", result);
console.log("this is multiplication", result1);
console.log("this is subtract:", result2);
console.log("this is Division:", result3); 


   
// updated login for divide when value is infinity

//let a:number=10;
//let b:number=a;
//let b:number=a;
//let sum:number =a+b; //
//console.log(sum);


function addNumbers(a: number, b: number): number {
    return a + b;
}

function multiplyNumbers(a: number, b: number): number {
    return a * b;
}

function subtractNumbers(a: number, b: number): number {
    return a - b;
}

function divideNumbers(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Example usage:
const result = addNumbers(5, 7);
const result1= multiplyNumbers(6, 7);
const result2 = subtractNumbers(7, 9);

try {
    const result3 = divideNumbers(10, 10);
    console.log("This is Division:", result3);
} catch (error) {
    console.error("Error during division:", (error as Error).message);
}

console.log("The sum is:", result);
console.log("This is multiplication:", result1);
console.log("This is subtract:", result2);

*/
/*
// Program to check Gender and check whether person is ready for marriage or not
// Male 22 and Female 19 is the legal age.
let maleAge:number=24;
let femaleAge:number=23;

if (maleAge>22){
    console.log("Eligible for Marriage for male",maleAge);
}else{
    console.log("Not Eligible");
}

if (femaleAge>18){
    console.log("Eligible for Marriage for female",femaleAge);
}else{
    console.log("Not Eligible");
}

*/

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkEligibility(gender: string, age: number): void {
  const MALE_ELIGIBLE_AGE = 22;
  const FEMALE_ELIGIBLE_AGE = 18;

  if (gender.toLowerCase() === "male") {
    if (age > MALE_ELIGIBLE_AGE) {
      console.log(`✅ Eligible for Marriage (Male, Age: ${age})`);
    } else {
      console.log(`❌ Not Eligible (Male, Age: ${age})`);
    }
  } else if (gender.toLowerCase() === "female") {
    if (age > FEMALE_ELIGIBLE_AGE) {
      console.log(`✅ Eligible for Marriage (Female, Age: ${age})`);
    } else {
      console.log(`❌ Not Eligible (Female, Age: ${age})`);
    }
  } else {
    console.log("⚠️ Invalid gender entered. Please type 'male' or 'female'.");
  }
}

function askDetails(): void {
  rl.question("Enter your age: ", (ageInput) => {
    const age = parseInt(ageInput);

    rl.question("Enter your gender (male/female): ", (genderInput) => {
      checkEligibility(genderInput, age);

      rl.question("Do you want to check again? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
          askDetails(); // loop again
        } else {
          console.log("👋 Program ended.");
          rl.close();
        }
      });
    });
  });
}

// Start program
askDetails();


