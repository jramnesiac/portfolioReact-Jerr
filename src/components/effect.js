const header = document.querySelector(".header"); // header class
window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});