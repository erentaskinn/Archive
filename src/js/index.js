import "@scss/pages/home.scss";
console.log("Hello World! from home page");

const themeToggle = document.querySelector("#themeToggle");
const buttons = themeToggle.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.dataset.theme);
    document.documentElement.setAttribute(
      "data-bs-theme",
      e.target.dataset.theme
    );
  });
});
