const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
const history = [];
const form = document.querySelector("form");
form.addEventListener("change", (e) => {
  history.push(e.target);
  console.log(e.target);
  if (fast.checked && cheap.checked && good.checked) {
    const checkboxToUnchecked = history[history.length - 2];
    checkboxToUnchecked.checked = false;
  }
});
