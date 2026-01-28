//Finding the word Java in a given sentence.

let newSentence : string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let words:string[] = newSentence.split(" ");

let total : number = 0;

for (let i: number = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "java") {
        console.log("Java word is present in Array with Index : " + i);
        total++;
    }
}

console.log("Total words with Java are : " + total);

export {};