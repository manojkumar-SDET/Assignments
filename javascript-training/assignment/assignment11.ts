// Program to count the no of letters in the given sentence

export {};

let givenSentence: string = "Java programming is fun and challenging";

// Reverse the entire sentence
let reversedSentence: string = "";
for (let i = givenSentence.length - 1; i >= 0; --i) {
    reversedSentence += givenSentence.charAt(i);
}
console.log("Reversed String: '" + reversedSentence + "'");

// Counting words
let words: string[] = givenSentence.split(' ');
console.log("Number of words in the Given String is '" + words.length + "'");

//Reverse word order in the string
let reversedWords: string = [...words].reverse().join(" ");
console.log("Sentence with words in reverse order: '" + reversedWords + "'");

//Convert first character of each word to uppercase
let uppercaseSentence: string = "";
for (const word of words) {
    uppercaseSentence += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}
console.log("Uppercase Sentence is : " + uppercaseSentence.trim());