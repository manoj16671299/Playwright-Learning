function addnum (a, b) {

    return a+b
}

console.log(addnum(5,6))

//Arrow Function
const sub = (a, b) => a - b;

console.log(sub(56, 23))

//print 1 to 100 even num using functions
function printevennum() {

    sum = 0
    for (i = 1; i <= 100; i++)
        if (i % 2 == 0) {
            sum += i
            console.log(sum)

        }

}

console.log(printevennum())


