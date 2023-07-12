//The comments above the functions are the problem description
//The comments below the function are the test code


// Write a function that prints even numbers up to a given parameter ie: printEven(50)
function printEven(num) {
  for (let i = 1; i <= num; ++i) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
// printEven(50);

//Write a function that prints the fibonacci sequence to a given length
function printFibonacci(length) {
  let prev = 0;
  let curr = 1;
  let res = [];

  for (let i = 0; i < length; i++) {
    res.push(prev);
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  console.log(res.join(", "));
}
// console.log(printFibonacci(10));

//Write a function that prints the average of an array
function printAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
  }

  avg = sum / arr.length;
  console.log(avg);
}
//printAverage([1,2,3,4,5]);

//Write a function that prints the maximum number of an array
function printMax(arr) {
  let max = Math.max(...arr);
  console.log(max);
}
// printMax([1,2,3,4,5,1000]);

//Write a function that prints the minimum number of an array
function printMin(arr) {
  let min = Math.min(...arr);
  console.log(min);
}
// printMin([1,2,3,4,5,1000, -999]);

//Write a function that returns the number of vowels in a string
function numVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  res = 0;
  for (let i = 0; i < str.length; ++i) {
    if (vowels.includes(str[i].toLowerCase())) {
      res += 1;
    }
  }

  return res;
}
// console.log(numVowels("Kobe"));

//Write a function to add 2 numbers
function addTwoNums(num1, num2) {
  return num1 + num2;
}
// console.log(addTwoNums(1,2));

//Write a function to multiply 2 numbers
function multiplyTwoNums(num1, num2) {
  return num1 * num2;
}
// console.log(multiplyTwoNums(1,2));

//Write a function that takes in a city name and returns the city postal code
function nameToPostalCode(city) {
  // does not seem possible with raw javascript
  // seems to need an api
  return;
}

//Given an array of strings, write a function to sort them alphabetically
function sortStrArr(arr) {
  return arr.sort();
}
// console.log(sortStrArr(["Banana", "Orange", "Apple", "Mango"]));

// Given an array of numbers, write a function to sort them in either ASC or DESC order
function sortNumArr(arr, reversed) {
  if (reversed) {
    return arr.sort((a, b) => b - a);
  } else {
    return arr.sort((a, b) => a - b);
  }
}
// console.log(sortNumArr([5,1,2,8,3,10], true));
// console.log(sortNumArr([5,1,2,8,3,10], false));

//Write a function that reverses a number, ie: takes in 1234, returns 4321
function reverseNumber(num) {
  let temp = num.toString();
  temp = temp.split("");
  temp = temp.reverse();
  temp = temp.join("");
  return temp;
}
// console.log(reverseNumber(1234));

//Write a function that returns the number of occurrences of a letter in a string, ie: returnOccurances(‘because’ , ‘e’) returns 2
function returnOccurences(str, letter) {
  res = 0;

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === letter) {
      res += 1;
    }
  }

  return res;
}
// console.log(returnOccurences("because", "e"));

//Given an array of strings, filter that array for a given string
function filterStr(arr, str) {
  return arr.filter((item) => item === str);
}
console.log(filterStr(["Banana", "Orange", "Apple", "Mango"]), "Apple");

//Given an array of numbers, filter that array for a given number
function filterNum(arr, num) {
  return arr.filter((item) => item === num);
}
console.log(filterNum([1, 2, 3, 4, 5]), 5);

//Given an array of objects, filter that array by an objects id value
function filterObj(arr, objID) {
  return arr.filter((obj) => obj.id === objID);
}
let arr = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
console.log(filterObj(arr, 2));

//Given an array of objects, write a function that returns an object by id
// This is the same function as the one above (filterObj)
console.log(filterObj(arr, 1));

//Write a function that prints todays date
function printTodaysDate() {
  const date = new Date();
  console.log(date);
}
// printTodaysDate();

//Given an array of objects, Write a function that checks if an object contains a value that is higher then 10, return a new array with all the objects that pass the test
function checkObjValueGreaterThan10(arr) {
  return arr.filter((obj) => obj.value > 10);
}

// let array = [
//   { id: 1, name: "Alice", value: 15 },
//   { id: 2, name: "Bob", value: 8 },
//   { id: 3, name: "Charlie", value: 11 },
//   { id: 5, name: "Kobe", value: 10 },
// ];

// console.log(checkObjValueGreaterThan10(array));
