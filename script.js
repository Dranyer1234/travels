const toggleMenu = document.querySelector(".toggle");
const wrapper = document.querySelector(".wrapper");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  wrapper.classList.toggle("active");
});
