// #1

// function getPromise(message, time) {
//     const promise = new Promise(function (resolve){
//         setTimeout(function() {
//             resolve(message)
//         }, time);
//     })
//     .then((res)=> console.log(res))
// };

// getPromise("test promise", 2000)

// #2

// function calcArrProduct(array) {
//     const promise = new Promise(function (resolve, reject){
//         if (!array.some(isNaN)){
//             const sum = array.reduce((a, b) => a * b, 1)
//             resolve(sum)
//         } else {
//             reject("Error! Incorrect array!")
//         }
//     })
//     .then((res)=> console.log(res))
//     .catch((error) => console.log(error))
// };

// calcArrProduct([3,4,5])
// calcArrProduct ( [5,"user2", 7, 12])

// #3

// function delay(i, time) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(i), time)
//     });
// }

// function showNumbers(){
//     for (let i = 0; i < 10; i++) {
//         let promise = Promise.resolve()
//         let timeout = Math.random() * 1000;
//         promise.then(() => delay(i, timeout)).then(console.log);
//     };
// }

// showNumbers();