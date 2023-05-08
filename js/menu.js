const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.getElementById('nav-menu');

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})