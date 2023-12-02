// #1

//let elem = document.getElementById("test")
// let elem = document.querySelector('div')
// elem.innerText = "Last";

// #2
// let elem = document.getElementsByClassName("image")[0]
// elem.setAttribute("src", "cat.jpg")
// alert(elem.outerHTML)

// #3

// let paragraphs = document.querySelectorAll('div p')

// var i = 0;
// for(var elem of paragraphs){
//     console.log(`Selector text ${i}: ${elem.innerText}`)
//     i++
// }

// #4
// let items = document.querySelectorAll('ul li')
// let firstItem = items[0].innerHTML
// let secondItem = items[1].innerHTML
// let thirdItem = items[2].innerHTML
// let fourthItem = items[3].innerHTML
// let fifthItem = items[4].innerHTML

//let firstItem = document.getElementsByTagName('li')[0].innerHTML
// let secondItem = document.getElementsByTagName('li')[0].nextSibling.innerHTML
// let thirdItem = document.querySelector('ul li:nth-child(3)').innerHTML
// let fourthItem = document.getElementsByTagName('li')[4].previousSibling.innerHTML
// let fifthItem = document.getElementsByTagName('li')[4].innerHTML

// alert(`${firstItem},${fifthItem},${secondItem},${fourthItem},${thirdItem}`)

// #5
// let header = document.querySelector('h1')
// header.setAttribute("style", "background: green;");

// let firstP = document.querySelector('div p:nth-child(1)')
// firstP.setAttribute("style", "fontWeight: bold;");

// let secondP = document.querySelector('div p:nth-child(2)')
// secondP.setAttribute("style", "color: red;");

// let thirdP = document.querySelector('div p:nth-child(3)')
// thirdP.setAttribute("style", "text-decoration: underline;");

// let fourthP = document.querySelector('div p:nth-child(4)')
// fourthP.setAttribute("style", "font-style: italic;");

// let spanEl = document.querySelector('span').innerHTML
// console.log(spanEl.replace(",", "").replace(/\s/g, ''));

// #6

// let newMessages1 = prompt("Enter new text 1")
// let firstInput = document.getElementById('input1')
// firstInput.setAttribute("value", newMessages1);

// let newMessages2 = prompt("Enter new text 2")
// let secondInput = document.getElementById('input2')
// secondInput.setAttribute("value", newMessages2);

// #7

// let mainEl = document.createElement("main")
// mainEl.className = " mainClass check item "

// let divEl = document.createElement("div")
// divEl.id = "myDiv"

// let parEl = document.createElement("p")
// parEl.innerHTML = "First paragraph"

// document.body.prepend(mainEl);

// let newMain = document.getElementsByTagName('main')[0]
// newMain.prepend(divEl);

// let newDiv = document.getElementsByTagName('div')[0]
// newDiv.prepend(parEl);
