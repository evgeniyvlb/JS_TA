// #1

// let myArray = [2,3,4,5]

// for (let count = 0; count < myArray.length; count++){
//     console.log(myArray[count]);
// };

// let count =0;
// while (count < myArray.length){
//     console.log(myArray[count]);
//     count++
// };

// #2

// for (let count = 0; count <= 15; count++){
//     if (count % 2) {
//         console.log(`${count} is odd`);
//     } else {
//      console.log(`${count} is even`)
//     };
// };

// #3

// function randArray (k) {
//     let arr = [];

//     for (let count = 0; count < k; count++){
//         arr.push(Math.floor(Math.random() * (500 - 1) + 1))
//      };
//      return (console.log(arr));
// };

// randArray (7);

// #4

// let a = parseInt(prompt("Type a number a!"), 10);
// let b = parseInt(prompt("Type a number b!"), 10);

// function raiseToDegree (a, b) { 
//     console.log(a ** b);
// };

// if (Number.isInteger(a) && Number.isInteger(b)){
//     raiseToDegree (a, b);
//   } else {
//     console.log('incorrect type');
//   };

//// #5

// function findMin(...arg) {
//     arr = []
//     arr.push(arg);
//     console.log(arr[0].sort()[0]);
// };

// findMin(12, 14, 4, -4, 0.2);

// #6

// function findUnique(arr) {
//     uniq = [...new Set(arr)]
//     if (arr.length == uniq.length) {
//         console.log( true ) 
//     } else {
//         console.log( false ) 
//     };
// };

// findUnique([1,2,3,5,3]);
//findUnique([1,2,3,5,11]);

// #7

// function lastElement (arr, element) {
//     element == undefined ? console.log(arr.slice(-1)) : console.log(arr.slice(-element));
// };

// lastElement([3,4,10,-5]);
// lastElement([3,4,10,-5], 2);
// lastElement([3,4,10,-5], 8);

// #8

// function stringToUpper(...arg){
//     let str = arg[0]
//     let words = str.split(' ');
//     words = words.map(function(elem) {
//         return elem.charAt(0).toUpperCase() + elem.slice(1);
//     });
//     console.log(words.join(' '))
// };

// stringToUpper('i love java script');