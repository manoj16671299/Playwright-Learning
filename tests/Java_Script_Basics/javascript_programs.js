//Even or odd

let n = 207

if (n%2 == 0) {
    console.log("Number is even");
}

else {
    console.log("Number is odd");
}

//Check if a Number is Positive, Negative, or Zero

let num = 0

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



