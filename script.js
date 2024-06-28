const first = document.querySelector(".first-btn");
const second = document.querySelector(".second-btn");

const box = document.querySelector(".box");

first.addEventListener("click", function () {
  box.classList.remove("display-none");
});

second.addEventListener("click", function () {
  box.classList.add("display-none");
});
