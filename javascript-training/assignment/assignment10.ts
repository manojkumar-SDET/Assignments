//Program to find a giving string is palindrome or not

let givenSentence: string = "A man, a plan, a canal: Panama";
let stringWithoutSpecialChars: string = givenSentence.replace(/[^a-zA-Z0-9 ]/g, '');
console.log("Original String: '" + givenSentence + "'");
console.log("String without special chars: '" + stringWithoutSpecialChars + "'");
let stringWithoutSpaces: string = stringWithoutSpecialChars.replace(/ /g, '');
console.log("String without spaces: '" + stringWithoutSpaces + "'");
let stringLowerCase: string = stringWithoutSpaces.toLowerCase();

let reversedString: string = "";
for (let i = stringLowerCase.length - 1; i >= 0; i--) {
    reversedString += stringLowerCase.charAt(i);
}
console.log("Reversed String: '" + reversedString + "'");

//Checking if the reversed string is same as original String

if(reversedString===stringLowerCase){
    console.log("Given String is a palindrome");
}
else
{
    console.log("Given string is not palindrome");
}

//using functions
 console.log("Checking palindrome using functions");
 function palindromeCheck(word :string): boolean {
    let givenWord = word.toLowerCase();
    let cleaned = givenWord.replace(/[^a-zA-Z0-9]/g, '');
    let reversed = cleaned.split('').reverse().join('');
    console.log("Given String is '" +cleaned + "'");
    console.log("Reversed String is'"  +cleaned + "'" );
    return reversed===cleaned;
 }
 
 console.log(palindromeCheck("A man, a plan, a canal: Panama"));
 console.log(palindromeCheck("Race a car"));



 

