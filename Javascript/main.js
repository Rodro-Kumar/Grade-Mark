const output = document.querySelector("#output");
const btn = document.querySelector("#btn");
const display = document.querySelector("#display");

// btn.onclick = function () {
//   if (output.value >= 101) {
//     display.innerHTML = "Your result is wrong!";
//   } else if (output.value >= 90 && output.value <= 100) {
//     display.innerHTML = "You got Golden A+";
//   } else if (output.value >= 80 && output.valur <= 89) {
//     display.innerHTML = "You got A+";
//   } else if (output.value >= 70 && output.value <= 79) {
//     display.innerHTML = "You got A";
//   } else if (output.value >= 60 && output.value <= 69) {
//     display.innerHTML = "You got A-";
//   } else if (output.value >= 50 && output.value <= 59) {
//     display.innerHTML = "You got B";
//   } else if (output.value >= 40 && output.value <= 49) {
//     display.innerHTML = "You got C";
//   } else if (output.value >= 33 && output.value <= 39) {
//     display.innerHTML = "You got D";
//   } else if (output.value >= 0 && output.value <= 32) {
//     display.innerHTML = "You fail";
//   } else {
//     display.innerHTML = "Something wrong";
//   }
// };

// btn.addEventListener("click", function () {

//   if (output.value >= 101) {
//     display.innerHTML = "Your result is wrong!";
//   } else if (output.value >= 90 && output.value <= 100) {
//     display.innerHTML = "You got Golden A+";
//   } else if (output.value >= 80 && output.valur <= 89) {
//     display.innerHTML = "You got A+";
//   } else if (output.value >= 70 && output.value <= 79) {
//     display.innerHTML = "You got A";
//   } else if (output.value >= 60 && output.value <= 69) {
//     display.innerHTML = "You got A-";
//   } else if (output.value >= 50 && output.value <= 59) {
//     display.innerHTML = "You got B";
//   } else if (output.value >= 40 && output.value <= 49) {
//     display.innerHTML = "You got C";
//   } else if (output.value >= 33 && output.value <= 39) {
//     display.innerHTML = "You got D";
//   } else if (output.value >= 0 && output.value <= 32) {
//     display.innerHTML = "You fail";
//   } else {
//     display.innerHTML = "Something wrong";
//   }

// }

//  );

btn.addEventListener("click", generateMark);

function generateMark() {
  if (output.value >= 101) {
    display.innerHTML = "Your result is wrong!";
  } else if (output.value >= 90 && output.value <= 100) {
    display.innerHTML = "You got Golden A+";
  } else if (output.value >= 80 && output.valur <= 89) {
    display.innerHTML = "You got A+";
  } else if (output.value >= 70 && output.value <= 79) {
    display.innerHTML = "You got A";
  } else if (output.value >= 60 && output.value <= 69) {
    display.innerHTML = "You got A-";
  } else if (output.value >= 50 && output.value <= 59) {
    display.innerHTML = "You got B";
  } else if (output.value >= 40 && output.value <= 49) {
    display.innerHTML = "You got C";
  } else if (output.value >= 33 && output.value <= 39) {
    display.innerHTML = "You got D";
  } else if (output.value >= 0 && output.value <= 32) {
    display.innerHTML = "You fail";
  } else {
    display.innerHTML = "Something wrong";
  }
}
