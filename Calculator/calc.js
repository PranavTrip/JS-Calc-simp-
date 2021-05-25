let screen = document.getElementById("screen");
let button = document.querySelectorAll("button");
// console.log(screen, button);

let screenvalue = "";
for (item of button) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    // console.log("button is" , buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenvalue += buttonText;
      screen.value = screenvalue;
    } else if (buttonText == "C") {
      screenvalue = "";
      screen.value = screenvalue;
    } else if (buttonText == "=") {
      screen.value = eval(screenvalue);
    } else {
      screenvalue += buttonText;
      screen.value = screenvalue;
    }
  });
}
