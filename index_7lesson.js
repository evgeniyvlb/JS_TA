// #1

// const newWindow = window.open('', '', "width= 300, height=300")

// setTimeout(function(){
//     newWindow.resizeTo(500, 500)
// }, 2000);

// setTimeout(function(){
//     newWindow.moveTo(200, 200)
// }, 4000);

// setTimeout(function(){
//     newWindow.close()
// }, 6000);

// #2

// let btn = document.querySelector('div button');
// btn.addEventListener("click", changeCSS);

// function setAttributes(element, attributes) {
//     Object.keys(attributes).forEach(attr => {
//       element.setAttribute(attr, attributes[attr]);
//     });
//   }

// function changeCSS() {

//     let paragraph = document.getElementById('text')
//     const attributes = {
//         style: 'color: orange; font-size: 20px; font-family: Comic Sans MS'
//       };
//     setAttributes(paragraph, attributes);
// }

// #3

// let blueBtn = document.getElementById('blue_btn')
// let pinkBtn = document.getElementById('pink_btn')
// let brownBtn = document.getElementById('brown_btn')
// let linkEl = document.querySelector('a');

// blueBtn.addEventListener("click", changeBlueBtn);
// pinkBtn.addEventListener("click", changePinkBtn);
// brownBtn.addEventListener("click", changeBrownBtn);
// linkEl.addEventListener("mouseover", changeLink);

// let bodyEl = document.querySelector('body');

// function changeBlueBtn () {
//     bodyEl.setAttribute("style", "background: blue;");
// }

// function changePinkBtn () {
//     bodyEl.setAttribute("style", "background: pink;");
// }

// function changeBrownBtn () {
//     bodyEl.setAttribute("style", "background: brown;");
// }

// function changeLink () {
//     bodyEl.setAttribute("style", "background: white;");
// };

// #4

// function remove() {
//     var x = document.getElementById("selectNow");
//     x.remove(x.selectedIndex);
//  }

// #5

// let button = document.getElementById('live_button')

// button.addEventListener("click", clickBtn);
// button.addEventListener("mouseover", clickBtn);
// button.addEventListener("mouseout", clickBtn);

// function clickBtn(){
//     let brEl = document.createElement('br')
//     if (event.type == 'click'){
//         let textEl = document.createTextNode("I was pressed!")
//         document.body.append(textEl);
//         document.body.append(brEl);
//     } else if (event.type == 'mouseover'){
//         let textEl = document.createTextNode("Mouse on me!")
//         document.body.append(textEl);
//         document.body.append(brEl);
//     } else if (event.type == 'mouseout'){
//         let textEl = document.createTextNode("Mouse is not on me!")
//         document.body.append(textEl);
//         document.body.append(brEl);
//     }
// }

// #6
// let height = window.innerHeight
// let width = window.innerWidth

// setInterval(function(){
//     if (height != window.innerHeight){
//         height = window.innerHeight
//         console.log(`Height: ${height}`)
//     } 
//     if (width != window.innerWidth){
//         width = window.innerWidth
//         console.log(`Width: ${width}`)
//     } 
// }, 1000)