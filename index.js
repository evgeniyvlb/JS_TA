// #1
// let x = 1;
// let y = 2;

// let res1 = x.toString() + y.toString();  
// console.log(res1);
// console.log(typeof res1)

// let res2 = (typeof x === 'number') + y.toString();
// console.log(res2);

// let res3 = Boolean(x+y)
// console.log(` ${typeof  res3} `);

// let res4 = x + y
// console.log(`${typeof  res4}`);

// #2
// function checkNum() {
//    num = prompt("enter a number");
//    if(num > 0){ 
//     console.log("NUmber is positive");
//     } else { 
//     console.log("NUmber is negative");
//     }
// }
// checkNum();

// #3
//  myArr = [];
//  myArr.push('1');
//  myArr.push('line');
//  myArr.push(true);
//  myArr.push(null);
//  console.log(myArr.length);

//  myArr[5] = prompt("enter a number");
//  console.log(myArr[5]);

//  console.log(myArr);
//  myArr.shift();
//  console.log(myArr);


// #4
// let cities = [" Rome ", " Lviv ", " Warsaw "]
// console.log(cities.join('*'));

// #5
// isAdult = prompt("enter a number");
// if(isAdult >= 18){ 
//     console.log("You have reached the age of majority");
//     } else { 
//     console.log("You are still to young");
//     };

// #6
// a = parseInt(prompt("enter a"));
// b = parseInt(prompt("enter b"));
// c = parseInt(prompt("enter c"));
// if (a < 0 || b < 0 || c < 0){
//     console.log('Incorrect data')
// };

// p = (a + b + c)/2
// let areaTriangle = Math.sqrt(p * (p -a) * (p -b) * (p -c));
// console.log(areaTriangle.toFixed(3))

// let rectTriangle = Math.pow(c, 2) ==  Math.pow(a, 2) + Math.pow(b, 2) ;
// console.log(`is tiangle: ${rectTriangle}`);

// #7
// let currentdate = new Date().getHours();
// switch (currentdate) {
    // case (currentdate >= 23 && currentdate < 5):
    //     console.log('Good night');
    // break;
    // case (currentdate >= 5 && currentdate < 11):
    //     console.log('Good morning');
    // break;
    // case (currentdate >= 11 && currentdate < 17):
    //     console.log('Good day');
    // break;
    // case (currentdate >= 17 && currentdate < 23):
    //     console.log('Good day');
    //break;
// };