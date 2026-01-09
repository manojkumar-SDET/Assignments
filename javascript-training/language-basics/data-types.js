/*
*Data types are of two different categories
*Primitive data types and Non-Primitive Data types
*/


/***Primitive Data types********/

//1.number==> number represents number with decimals and without decimals(without quotes)
let num = 123; //number without decimals
let floatNum=56.75 //number with decimals 
console.log(typeof num);
console.log(typeof floatNum);

//2.string ==> string represents text / sequence of characters wrapped inside a single or double quotes
let str1 = 'Hello World' //string with single quote
let str2 =  "Lets learn TypeScript" //string with double quote
let name = "Manoj"; //string with double quote
let message = `Hello, ${name}!`; //string with single quote inside a block
console.log(message);
console.log(typeof str1);
console.log(typeof str2);

//3.boolean ==> boolean represents result of condition : true or false
let javaScriptIsFun=true //boolean true
let isSkyGreen=false //boolean false
console.log(typeof javaScriptIsFun);

//4.undefined ==> undefined represents a variable that has been decalred but not assigned a value
let undefVar; //variable decalred but not defined
console.log(typeof undefVar);

//5.null ==> null represents a intentional absence of any object value
let nullVar = null;
console.log(typeof nullVar); //output : object

//6.symbol ==> symbol represnts a unique identifier
let sym = Symbol('unique');
console.log(typeof sym);
console.log(sym);

/* symbol--
let id = Symbol('id');
let user = { name: "Manoj" };
user[id] = 123;   // hidden property
console.log(user); 
*/


/***Non-Primitive Data types********/

//1.object ==> object represents a collection of key-value pairs
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
    skills: ["JavaScript", "Nodejs", "TypeScript"]
};
//console.log(typeof stuDetails);
//console.log(stuDetails);

//print student name
console.log(stuDetails.stuName);

//print student country
console.log(stuDetails.address.country);

//2.array ==> array represents an ordered collection of items
let fruits = ["Apple", "Banana", "Mango", "Grapes"];
let fruitsAndPrices= ["Apple", 150, "Banana", 80, "Mango", 300, "Grapes" , 120];
let fruitsAndPricesAndAvailability= ["Apple", 150, true, "Banana", 80, true, "Mango", 300, false, "Grapes", 120, true];


//print banana from fruits array
console.log(fruits[1]); //output : apple

//print mango and its price
console.log(fruits[2], fruitsAndPrices[5]); //banana, 80

//print Grape price and its availablity 
console.log(fruits[3], fruitsAndPrices[7], fruitsAndPricesAndAvailability[11]); //grape,120,true



