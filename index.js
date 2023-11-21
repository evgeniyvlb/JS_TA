// #1

// function calcRectangleArea(width, height) { 
//     if (Number.isInteger(width) && Number.isInteger(height)){
//             return console.log(1/2 * width * height);
//           } else {
//             throw new TypeError ("Parameter is non-numeric")
//           };
// };

// try {
//     calcRectangleArea(10, 22)
// } catch (exception) {
//     console.log(exception.name);
//     console.log(exception.message);
//     console.log(exception.stack);
// }

// #2

// function checkAge(){
//     let age = parseInt(prompt('Enter your age'));
//     try {
//         if (age === "") {
//             throw new TypeError ("The field is empty")  
//         } else if (isNaN(age)){
//             throw new TypeError ("Age is not a number")  
//         } else if (age < 14){
//             throw new RangeError ("Age is less then 14")  
//         } else {
//             alert("You'he got access")
//         };
//     } catch (error) {
//         console.log(error.name + error.message);
//     }
// };
// checkAge();

// #3

// class MonthException extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MonthException";
//     }
// };

// function showMonthName(month) {
//     try {
//         if (month >12 || month <= 0) {
//             throw new MonthException ("Incorrect month number");
//         } else {
//             const date = new Date();
//             date.setMonth(month - 1);
//             console.log(date.toLocaleString('en-US', { month: 'long' }));
//         };
//     } catch (error) {
//         console.log(`${error.name} ${error.message}`);
//     }
// };
// showMonthName(3);

// #4

// function showUser(id) {
//     try {
//         if (id < 0) {
//             throw new RangeError ("Id is negative")  
//         } else {
//         let obj = {
//         id : id
//         }
//         return console.log(obj)
//         }
//     } catch (error) {
//         console.log(`${error.name} ${error.message}`);
//     };
// };

// function showUses(ids) {
//     let newArray = []

//     try {
//         for (const element of ids) {
//         if(element < 0) {
//             throw new RangeError (`Id must not be negative: ${element}`) 
//         }}
//         } catch (error) {
//             console.log(error.message);
//         } finally {
//             for (const element of ids) {
//                 if(element > 0) {
//                  newArray.push({id : element})
//                 } }
//         }
//         return console.log(newArray)
// };

//showUser(-2); 
//showUses([7, -12, 44, 22]); 