const navBar = document.querySelector('.disappear');

document.addEventListener('scroll', function () {
    console.log(window.scrollY)
    if (window.scrollY > 80) {
        navBar.classList.add('navBg')
    }

    else {
        navBar.classList.remove('navBg')
    }
});