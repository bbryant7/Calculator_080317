// Variables for operators
//
let add = function add(a,b){
  return a + b;
}

let sub = function sub(a,b){
  return a - b;
}

let prod = function prod(a,b){
  return a * b;
}

let div = function divide(a,b){
  return a / b;
}

// loop to add event listener to each button and have them print out corresponding symbol
let clickButton = document.getElementsByClassName("button");

for (let i = 0; i < clickButton.length; i++) {
  clickButton[i].addEventListener("click", myfunction);
  function myfunction() {
    let numbers = clickButton[i].value;
    let test = `<p>${numbers}</p>`;

    document.getElementById("input").innerHTML = test;


    }


}




// Event Listener for  submit button
let clickSubmit = document.getElementById("submit");
let operatorA = document.getElementById("add");

let operatorS = document.getElementById("sub");

let operatorP = document.getElementById("prod");

let operatorD = document.getElementById("div");



clickSubmit.addEventListener("click",calculate);
function calculate(){
  let answer = "ggg";
 console.log(answer);
}
document.getElementById("input").innerHTML = answer;


//   if (operator.value === "/"){
//   return div;
// }
//   else if (operator.value === "*"){
//   return prod;
// }
//   else if (operator[i].value === "+"){
//   return add;
// }
//   else{
//     return sub;
//   }
