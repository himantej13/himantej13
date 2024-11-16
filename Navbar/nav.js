const toggleBtn = document.querySelector(".btn");
const toggleBtnIcon = document.querySelector(".btn i");
const menu = document.querySelector(".nav-links");

toggleBtn.onclick = function () {
  menu.classList.toggle("open");
  const isOpen = menu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};