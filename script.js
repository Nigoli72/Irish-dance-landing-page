function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}
let theme = document.querySelector("button");
theme.addEventListener("click", changeTheme);
