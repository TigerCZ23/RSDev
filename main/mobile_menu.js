document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('menu-open');
        if (mobileMenu.classList.contains('menu-open')) {
            menuToggle.innerHTML = '× MENU';
        } else {
            menuToggle.innerHTML = '☰ MENU';
        }
    });
});
