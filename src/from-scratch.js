const addToFrontOrBack = (arr, value, isFront) => {
  
       if(isFront === true){
        arr.unshift(value)
       } else if (isFront  !== true ){
        arr.push(value)
       

  }
  return arr;
};
let randomArray = [ 1, 2, 3, 4]
// console.log(addToFrontOrBack(randomArray, 8, true))
// Write a function addToFrontOrBack() that takes 3 args: an array arr, a value of any type value, and a boolean isFront.
//  Insert the value as either the first or last value in the arr, depending on the boolean isFront.

const reverseString = (stringArg) => {
  let reversed = stringArg.split("").reverse().join('')
  return reversed
};
// console.log(reverseString('hello'))

// Write a function reverseString() that takes a string argument. The function should return a reversed version of the string.
//  Will this function modify the original string in any way? Food for thought.

const newArrayFullOf = (value, numOfValue) => {
  const newArray = new Array(numOfValue).fill(value)
  return newArray
};
// console.log(newArrayFullOf(true, 4))
// Write a function newArrayFullOf() that takes 2 args: a value of any type value and a number numOfValue. 
// Your function should return a new array full of the value. Like this:

const insertIntoMiddle = (arr, value) => {
const middleArray = Math.floor(arr.length / 2) 
arr.splice(middleArray, 0, value)
};
const random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
insertIntoMiddle(random, 'hi')
console.log(random)
// Write a function insertIntoMiddle() that takes 2 args: an array arr and a value of any type value. The function should find the middle index of the array and then insert the value there.
//  The function should mutate the array and return nothing.

const deleteFromMiddle = (arr) => {
  const middleOfArray = Math.floor(arr.length / 2)
  arr.splice(middleOfArray,1)
};

// Write a function deleteFromMiddle() that takes an array arr.
//  The function should delete whatever value is in the middle index of the array. The function should mutate the array and return nothing.

const isRightIndex = (arr, value, index) => {

  if(value === arr[index]){
    return true
  } else if(value !== arr[index]){
    return false
  }

};
// Write a function isRightIndex that takes 3 args: an array arr, a primitive type value, and a number index.
//  The function returns a boolean, true if the given value is at the index in the arr, and false otherwise.
//   That includes false for values that aren't even in the array.

const roundAllNumsDown = (arr) => {
   const newArray = [] 
    for (let num of arr) { 
       newArray.push(Math.floor(num))
       }
       return newArray
};
const array = [ 1.2, 1.5, 1.5, 1.9]
console.log(roundAllNumsDown(array))

// Write a function roundAllNumsDown() that takes an array of numbers arr. 
// This function should return a new array full of arrs numbers rounded down. 
// The original arr numbers should not be modified in any way.

const getAllYCoordinates = (arr) => {
  let newArray = []
  for (let coord of arr) {  
     newArray.push(coord[1])   
  }
  return newArray; 
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
