// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { concat } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray



// // a describe method that lists the name of the function OR naming of the particular test.
// describe("newArr", () => {

//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("that takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
  
//       const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.

//       expect(newArr(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
//       expect(newArr(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
//     })
//   })


// b) Create the function that makes the test pass.

// create a function shuff that takes in an array as a peram
// use shift to remove index
// create var that is og length
// new arreay
// use to push values to 
// make a loop to run length  is greater than 0
// splce single random index vals and push to new array
// use math.random * n--
// return new array


// const fleDraw = (array) => {
//   let n = array.length
//   let newArray = []
// array.shift()
// while (array.length > 0) {
//  let randomNum = Math.floor(math.random() * n--)
//  let array = array.splice(randomNum)
// }
// return newArray.flat
// }

// FAIL  ./code-challenges.test.js
// fleDraw

// let array equal (colors1.shift())
// shuffle function array
// sort array
// random number 
// return shuffle(array)




//   const newArr = (array) => {
//     array.shift()
//  return array.sort((a,b) => Math.random() - 0.5);
// }; 

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


  // FAIL  ./code-challenges.test.js
  // array


  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total


  // FAIL  ./code-challenges.test.js
  // fleDraw

  // FAIL  ./code-challenges.test.js
  // fleDraw

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.



// // a describe method that lists the name of the function OR naming of the particular test.
// describe("lessThan", () => {

//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
  
//       const nums1 = [3, 56, 90, -8, 0, 23, 6]
//       // Expected output: [-8, 90]
//       const nums2 = [109, 5, 9, 67, 8, 24]
//       // Expected output: [5, 109]
      

//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(lessThan(nums1)).toEqual([-8, 90])
//       expect(lessThan(nums2)).toEqual([5, 109])
//     })
//   })



// b) Create the function that makes the test pass.

//create function that compares each number
//to the number before it logs the lowest and highest numbers
//into a new array from least to greatest

//take index  see if less than index infront
//if less stay in 0 if greater move to index of value checked
//continue for length of array or use min max



//   const lessThan = (array) => {
//  return minlessThan = [Math.min(...array), Math.max(...array)]
//   }
  

  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total


// newRay = maxMin.concat(minMax){
//   if [0] < [1]
// }


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// a describe method that lists the name of the function OR naming of the particular test.
describe("bothArr", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("that takes in two arrays as arguments and returns one array with no duplicate values", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(bothArr()).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
  })


// b) Create the function that makes the test pass.

// let bothArr = [].concat(testArray2,testArray1
// bothArr.filter ((item,index,self) 
// self.indexOf(item)== index);



const bothArr = (testArray1,testArray2) => {
return bothArr = [...new Set]([...testArray1, ...testArray2])
}



// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total


  
// Test Suites: 1 failed, 1 total
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total




// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total


// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total