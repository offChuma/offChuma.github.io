const toggle = document.getElementById("burgermenu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("display");
});
