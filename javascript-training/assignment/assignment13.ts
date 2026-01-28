// A program to print * in triangle pattern

let n:number =5;

for(let i:number=1;i<=n;i++){
    let line : string = ""; 

    // Inner loop to print spaces before stars
    for (let j: number = i; j < i; j++) {
        line += " ";
    }
    // Inner loop to print stars in each row
    for (let j: number = 1; j <= i; j++) {
        line += "*";
    }

console.log(line);
}

export {};