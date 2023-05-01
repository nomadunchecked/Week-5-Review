let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Below is an example of a .forEach method:

arr.forEach((x, y, z) => console.log("I iterated"));

// Answer these questions in a separate line that's be commented out:
// 1. What do x, y and z represent?
// x represents the current value, y represents the current index, z represents the original array that was iterated over

// 2. What is the key difference between the .forEach method and the .map method?
// // .map method returns a value, .forEach method does not have an explicit return

// Examine this method:
let newArr = arr.map((x) => x + 1);

// 3. What would we expect to print out if we did console.log(newArr);
// [2,3,4,5,6,7,8,9,10,11]

// 4. Create a filter method that creates an arr of only the even values from arr

let filterArr = arr.filter((x) => x % 2 === 0);
console.log(filterArr);

let oddFilter = arr.filter((x) => x % 2 !== 0);
console.log(` The odd numbers are ${oddFilter}`);

let evenFilter = arr.filter((x) => x % 2 === 0);
console.log(` The even numbers are ${evenFilter}`);
