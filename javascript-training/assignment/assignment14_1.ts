//Find the largest top two of the given array and the perfroming addition.

let givenArry: number[] = [12, 34, 11, 36, 87, 98, 93];

let first = givenArry[1];
let second = givenArry[1];
let third = givenArry[1];

for (let i = 1; i < givenArry.length; i++) {
    let current = givenArry[i];

    if (current > first) {
        third = second;
        second = first;
        first = current;
    } else if (current > second && current < first) {
        third = second;
        second = current;
    } else if (current > third && current < second) {
        third = current;
    }
}

console.log("Second largest number:", second);
console.log("Third largest number:", third);
console.log("Addition of Second and Third largest number" +(second+third));
export{};