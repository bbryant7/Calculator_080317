// loop to add event listener to each button and have them print out corresponding symbol

let input = document.getElementById("input");
let clickButton = document.getElementsByClassName("button");
let clickSubmit = document.getElementById("submit");
let clickClear = document.getElementById("clear");
let numbers = [];
// if (input.textContent.length < 10)

// NUMBERS AND OPPERATORS buttons

for (let i = 0; i < clickButton.length; i++) {
  clickButton[i].addEventListener("click", function() {
    numbers += clickButton[i].value;

    if (numbers.length < 20) {
      let output = `<p>${numbers}</p>`;
      document.getElementById("input").innerHTML = output;
    } else {
      let output = `<p>The universe can not contain this equation!</p>`;
      document.getElementById("input").innerHTML = output;
    }

    if (numbers[0] === '/') {
      let output = `<p>Error</p>`;
      document.getElementById("input").innerHTML = output;
    }

    if (numbers[0] === '*') {
      let output = `<p>Error</p>`;
      document.getElementById("input").innerHTML = output;
    }
    if (numbers[0] === '-') {
      let output = `<p>Error</p>`;
      document.getElementById("input").innerHTML = output;
    }
    if (numbers[0] === '+') {
      let output = `<p>Error</p>`;
      document.getElementById("input").innerHTML = output;
    }

  })
}

// SUBMIT BUTTON

clickSubmit.addEventListener("click", function() {
    let output = `<p>${eval(numbers)}</p>`;
    document.getElementById("input").innerHTML = output;

})


// CLEAR BUTTON

clickClear.addEventListener("click", function() {
  numbers = [];
  let output = `<p>${numbers}</p>`;
  document.getElementById("input").innerHTML = output;
})


// SPACE FACTS STARTS HERE

let clickFacts = document.getElementById("space");
let space = ["Neutron stars can spin at a rate of 600 rotations per second.", "If two pieces of metal of the same type touch in space, they will permanently bond.", "99% of our solar system's mass is the sun.", "Pluto is smaller than the Earth's moon.", "The Whirlpool Galaxy (M51) was the first celestial object identified as being spiral."];

clickFacts.addEventListener("click", function() {
  let fact = space[Math.floor(Math.random() * space.length)];
  let output = `<p>${fact}</p>`;
  document.getElementById("input").innerHTML = output;

})


// space facts:
// 1. "Neutron stars can spin at a rate of 600 rotations per second."
// 2. "If two pieces of the same type of metal touch in space, they will bond and be permanently stuck together."
// 3. "99% of our solar system's mass is the sun."
// 4. "pluto is smaller than the Earth's moon."
// 5. "The Whirlpool Galaxy (M51) was the first celestial object identified as being spiral."
