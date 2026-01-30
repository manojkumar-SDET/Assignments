//Exception Handling in TypeScript

//Exception + Handling ==>  Handling the exceptions in different ways. 

//1. Try...Catch...Finally Block  ==> When there is an exception, we can handle that particular exception and continue the execution process. 
//2. Throwing our own exceptions  ==> We can throw our own exceptions using the throw keyword.


//1. Try...Catch...Finally Block


//Before Exception Handling
//let empName: any; //declearing a variable

//create error in execution
// console.log(empName.toLowerCase())

// console.log("Execution is Completed");

//After Exception Handling
let newEmpName: any; //declearing a variable
try {
    console.log(newEmpName.toLowerCase())
} catch (error) {
    console.log("An exception occurred. Please check the variable.");
   // console.log(newEmpName.toUpperCase()) //if this line is enabled second and third wont run because catch has another error and it is running finally block.
} finally{
    console.log("Execution is Completed"); //This block will always execute
}

//In Type Script we cant have a single try and multiple catch..
// so we need to create seperate try and catch.. so each try will have single catch and Finally.
// Second risky operation
try {
    let empName: any;
    console.log(empName.toLowerCase()); // throws TypeError
} catch (error) {
    console.log("Error in first block:", error);
} finally {
    console.log("First block completed");
}

// Third risky operation
try {
    let num: any = "abc";
    console.log(num * 10); // NaN, but not an exception
    console.log(JSON.parse(num)); // throws SyntaxError
} catch (error) {
    console.log("Error in second block:", error);
} finally {
    console.log("Second block completed");
}
