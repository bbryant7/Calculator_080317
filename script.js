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
let numbers = "";
for (let i = 0; i < clickButton.length; i++) {
  clickButton[i].addEventListener("click", myfunction);
  function myfunction() {
    numbers += clickButton[i].value;
    let output = `<p>${numbers}</p>`;
    document.getElementById("input").innerHTML = output;
    // equation.push(numbers);
    // console.log(numbers);

    }


}




// Event Listener for  submit button
// let clickSubmit = document.getElementById("submit");
// let operatorA = document.getElementById("add");
//
// let operatorS = document.getElementById("sub");
//
// let operatorP = document.getElementById("prod");
//
// let operatorD = document.getElementById("div");

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



//
let clickClear = document.getElementById("clear");

  clickClear.addEventListener("click", clear);
  function clear() {
    numbers = "";
    let output = `<p>${numbers}</p>`;
    document.getElementById("input").innerHTML = output;
  }








let clickSubmit = document.getElementById("submit");
clickSubmit.addEventListener("click",calculate);
function calculate(){
 eval(numbers);
 let output = `<p>${numbers}</p>`;
document.getElementById("input").innerHTML = output;
}
