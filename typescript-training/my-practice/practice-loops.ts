//Finding whether a number is even or odd

/*
let a:number = 18458429;
if (a%2===0){   
    console.log('Even number');
}else {
        console.log('Odd number');
    }
*/

//Finding largest of three numbers
/*
let num1 : number=13;
let num2 : number=4;
let num3 : number=25;

if (num1 >= num2 && num1 >= num3) {
    console.log("Number 1 is greatest:", num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Number 2 is greatest:", num2);
} else {
    console.log("Number 3 is greatest:", num3);
}
*/

//Check whether a string is palindrome or not

function checkPalindrome(word: string): boolean {
    // 1. Normalize: Make it lowercase so 'Racecar' becomes 'racecar'
    let original = word.toLowerCase();

    // 2. Flip it: Split into letters, reverse them, and join them back
    let reversed = original.split('').reverse().join('');

    // 3. Compare it: Return true if they match, false if they don't
    return original === reversed;
}

// Testing the logic
console.log(checkPalindrome("Madam")); // Result: true
console.log(checkPalindrome("Coding")); // Result: false