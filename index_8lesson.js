// #1

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [ x, y, w, ...z ] = arr ;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // [Bob]

// #2

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//     };
//     let {names: [, name2, ,name4 ], ages: [, age2, , age4]}= data;
//     console.log(name2); // "Tom"
//     console.log(age2); // 24
//     console.log(name4); // "Bob"
//     console.log(age4); // 26
    
// #3

// function mul(...arg) {
//     let numNumbers = 0
//     for (let i of arg){
//         if (Number.isInteger(i)) {
//             numNumbers += i 
//         }
//     }
//     return numNumbers
//  }
//  console.log( mul (1, "str", 2, 3, true )); // 6
//  console.log( mul ( null , "str", false , true )); // 0
 
// #4

// let server = {
//     data: 0,
//        convertToString : function (callback) {
//     callback( () => this .data + "")
//     }
//     };

//     let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//           this .server.data = data;
//           this .server.convertToString ( this .notification ());
//     },
    
//     notification: function () {
//           return ( (callback) => this .result = callback())
//     }
// };

//     client.calc (123);
//     console.log( client.result ); // "123"
//     console.log( typeof client.result ); // "string"

// #5

// function mapBuilder (keysArray, valuesArrays){
//     const map1 = new Map();
//     for (let count = 0; count < keysArray.length; count++){
//         map1.set(keysArray[count], valuesArrays[count] )
//     }
//     return map1
// }

// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", " i "];
// let map = mapBuilder (keys, values);
// console.log( map.size); // 4
// console.log( map.get (2)); // "span"


