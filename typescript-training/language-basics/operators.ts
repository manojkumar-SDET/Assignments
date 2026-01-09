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
console.log("this is Division:", result3); */


//*   updated login for divide when value is infinity


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
