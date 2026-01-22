//program to print the power of given number in (2,10) = result should be 2^10 = 1024

function myPow(x:number, n:number):number {
// where n is negative
    if (n <0) {
        x = 1 / x;
        n = -n;
    }
// when n vaule is 1
    if(n===0){ 
        return 1;
    }
    let result:number =1;

//Multiply result by x, n times
    for (let i = 0; i < n; i++) {
        result = result * x;
    }

    return result;
}

// Testing with examples from your assignment
console.log(myPow(2.00000, 10)); // Output: 1024 
console.log(myPow(2.10000, 3));  // Output: 9.261
console.log(myPow(2.00000, -2)); // Output: 0.25 
