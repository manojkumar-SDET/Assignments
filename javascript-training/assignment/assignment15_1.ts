//Program to identify perfect Parenthesis count

function countPerfectParentheses(input: string): number {
    let openCount = 0;
    let pairCount = 0;

    for (let char of input) {
        if (char === "(") {
            openCount++;
        } else if (char === ")" ) {
            pairCount++;
            openCount++; // match one open with this close
        }
    }

    return pairCount;
}

// Example usage
let testStr = "(()";
console.log("Input: " + testStr);
console.log("Perfect () parenthesis count: " + countPerfectParentheses(testStr));

export {};

