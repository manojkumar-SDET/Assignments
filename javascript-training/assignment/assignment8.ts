//Program to print numbers in a pyramid shape.
let pattern: number = 5;

// Top Pyramid

for (let i: number = 1; i <= pattern; i++) {
    let row: string = "";
    for (let j: number = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}

//bottom pyramid
for (let i: number = pattern - 1; i >= 1; i--) {
    let row: string = "";
    for (let j: number = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}