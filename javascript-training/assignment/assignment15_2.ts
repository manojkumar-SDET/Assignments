//****************************************************/

function longestValidParentheses(s: string): number {
    let maxLen = 0;
    let stack: number[] = [];
    stack.push(-1); // base index

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i); // reset base
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
}

// Example runs
console.log(longestValidParentheses("(()"));      // Output: 2
console.log(longestValidParentheses(")()())"));   // Output: 4
console.log(longestValidParentheses("()(()"));    // Output: 2

export{};