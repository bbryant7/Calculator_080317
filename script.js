// loop to add event listener to each button and have them print out corresponding symbol
// NUMBERS AND OPPERATORS buttons
let input = document.getElementById("input");
let clickButton = document.getElementsByClassName("button");
let numbers = [];

if (input.textContent.length > 10) {
  console.log("yayyy!!! Length is too long");
}
console.log("the length is " + input.textContent.length);
console.log(input.textContent);

for (let i = 0; i < clickButton.length; i++) {
  clickButton[i].addEventListener("click", myfunction);

  function myfunction() {
    numbers += clickButton[i].value;
    let output = `<p>${numbers}</p>`;
    document.getElementById("input").innerHTML = output;
  }

  // SUBMIT BUTTON
  let clickSubmit = document.getElementById("submit");
  clickSubmit.addEventListener("click", calculate);

  function calculate() {
    let output = `<p>${eval(numbers)}</p>`;

    document.getElementById("input").innerHTML = output;
    let ouput = '';


  }
}

// CLEAR BUTTON
let clickClear = document.getElementById("clear");

clickClear.addEventListener("click", clear);

function clear() {
  numbers = "";
  let output = `<p>${numbers}</p>`;
  document.getElementById("input").innerHTML = output;
}


// SPACE FACTS STARTS HERE

let clickFacts = document.getElementById("space");
let space = ["Neutron stars can spin at a rate of 600 rotations per second.", "If two pieces of the same type of metal touch in space, they will bond and be permanently stuck together.", "99% of our solar system's mass is the sun.", "Pluto is smaller than the Earth's moon.", "The Whirlpool Galaxy (M51) was the first celestial object identified as being spiral."];

clickFacts.addEventListener("click", spaceFacts);

function spaceFacts() {
  let fact = space[Math.floor(Math.random() * space.length)];
  let output = `<p>${fact}</p>`;
  document.getElementById("input").innerHTML = output;

}


// space facts:
// 1. "Neutron stars can spin at a rate of 600 rotations per second."
// 2. "If two pieces of the same type of metal touch in space, they will bond and be permanently stuck together."
// 3. "99% of our solar system's mass is the sun."
// 4. "pluto is smaller than the Earth's moon."
// 5. "The Whirlpool Galaxy (M51) was the first celestial object identified as being spiral."









// -----------------------------
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


// Trying to create an if statement to create error if a none-number is put on numbers array first
// if (numbers[0] === ('+' || '*'|| '/')) {
//   let output = `<p>ERROR</p>`;
//   document.getElementById("input").innerHTML = output;
//   console.log('numbers',numbers);
//     console.log('output',output);
// }
//  else {
//
//
//
// }



// option 2 with no eval:

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[0] === ('+' || '*'|| '/')){
//     return "error"
//     // send to out put
//   }
//   if numbers[i] === '*'{
//     return prod;
//   }
//
//   if numbers[i] === '-'{
//     return sub;
//   }
//   if numbers[i] === '+'{
//     return add;
//   }
//   if numbers[i] === '/'{
//     return div;
//   }
//
// }
