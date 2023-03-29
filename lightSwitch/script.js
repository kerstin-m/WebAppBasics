let night = false;
const btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
  night = !night;
  if (night) {
    document.body.classList.add("body-night");
    btn.classList.add("button-night");
    document.title = "Gute Nacht";
  } else {
    document.body.classList.remove("body-night");
    btn.classList.remove("button-night");
    document.title = "Guten Morgen";
  }
});
