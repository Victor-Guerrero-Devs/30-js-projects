const submitBtn = document.querySelector("button[type=submit]");
const checkbox = document.querySelector("#checkbox");
const elements = document.querySelectorAll(".element");
const selectColor = document.querySelector("#SelectColor");

// disable both the checkbox and submit btn until the correct color has been selected
checkbox.disabled = true;
submitBtn.disabled = true;

// Assign a color to each grid element
elements.forEach(function (element) {
  const color = getRandomColor();

  element.style.backgroundColor = color;
  element.innerHTML = color;
  selectColor.innerHTML = color; // first color generated goes to span
});

// will return a random hexadecimal color
function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }

  return color;
}

// check if right color is selected
elements.forEach(function (element) {
  element.addEventListener("click", () => {
    if (element.innerHTML === selectColor.innerHTML) {
      alert("You are human!");
      checkbox.checked = true;
      submitBtn.disabled = false;
      submitBtn.classList.remove("btn-light");
      submitBtn.classList.add("btn-success");
    } else {
      // page will refresh (line 42) if wrong color selected
      alert("Please try again");
      location.reload(true);
    }
  });
});

// the hexdecimal that gets inserted in the span is always the last box
// b/c it is reassigned a new one each time the forEach runs
// therefore, it stays with the last one generated
