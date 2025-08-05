let hamburger = document.querySelector('.hamburger');
let ul = document.querySelector('ul');

hamburger.addEventListener("click", () => {
    ul.classList.toggle("add");
})