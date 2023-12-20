// #1

// function upperCase(str){
//     if (str.charAt(0).toUpperCase() == str.charAt(0)){
//         console.log("String's not starts with uppercase character")
//     } else {
//         console.log("String ' s starts with uppercase character")
//     };
// }
// upperCase('regexp');
// upperCase('RegExp');

// #2

// function checkEmail(str){
//     let regExp = /\S+@\S+\.\S+\s?/;
//     console.log(regExp.test(str))
// }
// checkEmail ("Qmail2@gmail.com "); true

// #3

// let regExp = /d(b+)(d?)/ig;
// console.log(regExp.exec("cdbBdbsbz"))

// #4

// string = " Java Script "
// let res = string.replace(/(\w+) (\w+)/g, "$2 , $1");
// console.log(res)

// #5

// function checkCard(card){
//     let regExp = /\d{4}-\d{4}-\d{4}-\d{4}/;
//     if (regExp.test(card)){
//         console.log("correct")     
//     } else {
//         console.log("incorrect")   
//     }
// }
// checkCard( '9999-9999-9999-9999' )

// #6

// function checkEmail (str){
//     let regExp = /^[a-zA-Z0-9][a-zA-Z0-9_]+\-?[a-zA-Z0-9]+@\S+\.\S+/;
//     regExp.test(str)
//     if (regExp.test(str)){
//         console.log('Email is correct!')
//     } else {
//         console.log('Email is not correct!')
//     }
// }

// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_ma--il@gmail.com');
