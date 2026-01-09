

//Variable declaration will vary based on four different parameters

//1.initialization 
//2.re-assignment
//3.re-declaration
//4.scope

//1.initilization
const a=10; //initilized
let b; // can be initilized later
var c; //can be initilized later

//2.re-assignment
//a=2; //Error : Constant cannot be re-assigned.
b=20; //valid
b=90;

//3.re-declaration
//const a=150; //Error : Identifier a already been assigned.
//let b=40; //Error : Identifier b already been assigned.
var c=40; // valid


//4.scope
{
 const x = 30;
 let   y = 50;
 var   z = 70;
 console.log(x);
 console.log(y);
 console.log(z);
}

//console.log(x); // Not valid outside the scope 
//console.log(y); //Not valid outside the scope
 console.log(z);


console.log(a);
console.log(c);
console.log(b);


//Variable declaration will vary based on four different parameters

//1.initialization 
//2.re-assignment
//3.re-declaration
//4.scope

//let a : number = 10;
//let b : string = "Man";
//console.log(a)
//console.log(b)
//a="Manoj" //Error type string is not allowed for numbers