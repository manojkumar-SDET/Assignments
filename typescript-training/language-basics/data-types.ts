/*
*Data types are of two different categories
*Primitive data types and Non-Primitive Data types
*/


/***PRIMITIVE Data types********/

//1.number==> number represents number with decimals and without decimals(without quotes)
let marks:number = 98;
let percentage:number = 98.2;
console.log("Marks:"+marks);
console.log("Percentage:"+percentage);

//2.String ==> string represents text data. (with quotes)
let name1:string = "Manoj";        //double quotes
let name2:string = 'Manoj Kumar'   //single quotes
let name3:string = `Manoj Kumar K` //backticks
console.log("Name1: "+ name1);
console.log("Name2: "+ name2);
console.log("Name3: "+ name3);

//3.boolean ==> boolean represents only two values true or false.(It specifies result of condition)
let visaStatus:boolean = true;
let isGraduated:boolean = false;
console.log("Visa Status "+ visaStatus);
console.log("Is Graduated: "+ isGraduated);

//union of types( | )==> variable can hold more than one type of data.
let empAddress : string | number | boolean;
empAddress = "Vizag";
empAddress = 530045;
empAddress = true;
console.log("Employee Address:"+empAddress);

//4.undefined ==> undefined represents a variable that is declared but not assigned with any value.
let empSalary:undefined | number | string;
empSalary = 60000;
empSalary = "Sixty Thousand";
console.log("Employee Salary:"+empSalary);

//5.null ==> null represents a variable that is assigned with a null value 
let empRole : null | string
empRole = null;
empRole = "Developer";
console.log("Employee Role:"+ empRole);

//*******************************/
// **NON - PRIMITIVE DATA TYPES**/

//1.array ==> array represents an ordered collection of items
let fruits:string[] = ["Apple", "Banana", "Mango", "Grapes"];
fruits.push("Guvava");
console.log("Fruits are:"+fruits);

let scores:number[] = [98,99,78.9,66.66];
console.log("Scores:"+scores);

//fruits names along with their prices in array
let fruitDetails: (string | number)[] =[100, "Grapes","Mango",250];
console.log(fruitDetails[2]);

//2. object ==> object represents a collection of key-value pairs

interface stuDetails{
    stuId:number,
    stuName:string,
    stuClass:string,
    stuPassed:boolean,
    address:{
        city:string,
        pincode:number,
        state:string,
        country:string
    }
    skills:(string | number)[]
}

let stuDetails={
    stuId:143,
    stuName:"Kumar",
    stuClass:"M.Tech",
    stuPassed:true,
    address:{
        city:"Vizag",
        pincode:1001,
        state:"Andhra",
        country:"India"
    },
    skills: ["JavaScript", "Nodejs", "TypeScript", 1007]
};
//console.log(typeof stuDetails);
console.log(stuDetails);
console.log(stuDetails.stuName);

//3.tuple ==> tuple represents a collection of different data type in a specific order.
let address : [string, string, number] = ["Flat 402 Main Street", "Vizag", 73066];
console.log("Address:"+address);

//4.function ==> function represents a block of code designed to perfrom a particular task.
//void represents a function that does not return any value.
//if function returns any value, then same data type should be mentioned in the function definition.
function launchTheApplication(browserName:string, url:string):void {
    console.log("Launch the browser:"+ browserName);
    console.log("Launch the URL:"+ url);
    console.log("Application Launched Successfully");
}

function sumOfNumbers(num1:number, num2:number): number{
    let num3:number = num1+num2;
    return num3;
}

function getFullName(firstName:string, lastName:string): string{
    let fullName:string = firstName+" "+lastName;
    return fullName;
}

launchTheApplication("Chrome:", "www.example.com");
console.log("Sum of number:", sumOfNumbers(10,20));
console.log("Full Name:", getFullName("Manoj","Kumar"));

// 5. Map ==> Map represents a collection of key-value pairs where keys can be of any data type.
let employeeMap: Map<string, string> = new Map();
employeeMap.set("empId", "101");
employeeMap.set("empName", "John Doe");
employeeMap.set("havingVisa", "true");
employeeMap.set("empName", "Bharath"); // Overwrites previous empName
employeeMap.delete("havingVisa"); // Deleting key 'havingVisa'
console.log("Employee Map: ", employeeMap);

// 6. Set ==> Set represents a collection of unique values of any data type.
let uniqueNumbers: Set<number> = new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(20); // Duplicate value, will not be added
uniqueNumbers.delete(10); // Deleting value 10
console.log(uniqueNumbers.size); // Getting size of the set
console.log(uniqueNumbers);

// 7. any ==> 'any' represents a variable that can hold any type of data. (Not recommended to use)
// It removes all the type-checking benefits provided by TypeScript.

let randomValue: any;
randomValue = 100;
console.log("Random Value (number): ", randomValue);
randomValue = "Hello World";
console.log("Random Value (string): ", randomValue);
randomValue = true;
console.log("Random Value (boolean): ", randomValue);








