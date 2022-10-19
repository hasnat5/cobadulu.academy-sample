// navbar dashboard
const burgerBar = document.querySelector('.burgerBar');
const listBarAndro = document.querySelector(".listBar");

burgerBar.addEventListener('click', function () {
    burgerBar.classList.add('active:select-none');
    listBarAndro.classList.toggle('-translate-x-full')
});