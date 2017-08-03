// Variables for operators
//
// let add = function add(a,b){
//   return a + b;
// }
//
// let sub = function sub(a,b){
//   return a - b;
// }
//
// let prod = function prod(a,b){
//   return a * b;
// }
//
// let div = function divide(a,b){
//   return a / b;
// }

let clickButton = document.getElementsByClassName("button");

for (let i = 0; i < clickButton.length; i++) {
  clickButton[i].addEventListener("click", myfunction);
  function myfunction() {
    console.log("number"); }
}



// document.getElmentsByClass("button[0]").addEventListener("click", function myfunction() { console.log("number"); });
// document.getElmentsById("input").addEventListener("click", function myfunction() { console.log("number"); });
