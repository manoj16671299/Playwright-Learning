//methods in arrays
arr0 = [2, 3, 7, 9]
arr1 = [5, 8, 1, 6]

arr2 = arr0.concat(arr1)

console.log(arr2)

//sort

arr3 = arr2.sort().reverse()
console.log(arr3)

//push -- "Add element to arr at end"
let arr4 = ['eat', 'sleep']

 arr4.push('work')

console.log(arr4)

//split used to convert string to array
str = "my name is manoj"

str1 = str.split(" ").reverse().join(" ")

console.log(str1)

//join used to convert array to string

arr6 = ["s", "u", "n", "k", "a", "r", "a"]

str2 = arr6.reverse().join("")
console.log(str2)

//Array Length --"calculates total length of arr"
console.log(arr6.length)

//pop -- "Removes last element of arr"
arr7 = ["M","A","N","O","J"]

arr7.pop()
console.log(arr7)

//shift -- "Removes first element of arr"
arr7.shift()
console.log(arr7)

//Unshift -- "Add element to array at the end"
arr4.unshift("U")
console.log(arr4)



