//creating a program to validate a number is prime number or not with return type as boolean

function isPrime(n: number): boolean {
  if (n <= 1) {
    console.log("Given number is not a Prime Number: " + n);
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log("Given number is not a Prime Number: " + n);
      return false;
    }
  }

  console.log("Given number is a Prime Number: " + n);
  return true;
}

// Numbers
console.log(isPrime(2));   // true
//console.log(isPrime(25));  // false
//console.log(isPrime(29));  // true


//creating a program to validate a number is prime number or not with return type as number
function isPrime1(a: number): number {
  if (a <= 1) {
    console.log("Given number is not a Prime Number: ");
    return a;
  }

  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      console.log("Given number is not a Prime Number: ");
      return a;
    }
  }

  console.log("Given number is a Prime Number: ");
  return a;
}

// Numbers
console.log(isPrime1(1));   // true
//console.log(isPrime(25));  // false
//console.log(isPrime(29));  // true
