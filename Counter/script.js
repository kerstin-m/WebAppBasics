let count = 0;
const label = document.querySelector("label");
const main = document.querySelector("main");
label.addEventListener("click", () => {
  count++;
  updateDisplay();
});
function updateDisplay() {
  label.innerText = count;
}
