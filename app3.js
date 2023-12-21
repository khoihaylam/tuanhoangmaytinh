let button = document.querySelectorAll("button");
let input = document.querySelector("input");
console.log(input);
console.log(button);
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    let value = button[i].innerHTML;
    // console.log(value);
    if (value == "AC") {
      input.value = "";
    } else if (value == "=") {
      input.value = eval(input.value);
    } else {
      input.value += value;
    }
    localStorage.setItem("maytinh", JSON.stringify(input.value));
  });
}
