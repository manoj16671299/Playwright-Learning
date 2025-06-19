//Even or odd

let n = 207

if (n%2 == 0) {
    console.log("Number is even");
}

else {
    console.log("Number is odd");
}

//Check if a Number is Positive, Negative, or Zero

let num = 56

switch (Math.sign(num)) {
    case 1:
        console.log("The number is Positive");
        break;
    case -1:
        console.log("The number is Negative");
        break;
    default:
        console.log("The number is Zero");
}
//Swap Two Variables 

let a = 34
let b = 45
let temp

temp = 34
a = 45
b = temp

console.log(a,b);

//sum of naturally numbers
let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);

//print sum of even num
let dum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) { // Check if the number is even
    dum += i; // Add even numbers to the sum
  }
}
console.log(dum); // Output: 2550

//print sum of odd num
let gum = 0;

for (i=1;i<=100;i++) {
    if(i % 2 == 0){

    }
    else {
        gum += i;
    }
}
console.log(gum);

//Generate Random Number in Given Range

const Randomnum = (min, max) => {
   
    return Math.floor(Math.random()*(max - min + 1) + min)
}

console.log(Randomnum(1000, 9999))
console.log(Randomnum(100, 999))

//Muiltplication of two num

const multi = (m, n) => {
    return m*n
}
console.log(multi(8, 9))

