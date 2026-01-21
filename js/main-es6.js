(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

// Burger handler

const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuCloseItem = document.querySelector('.header__nav-close');
burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
});
menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
});

// Scroll to anchors

const links = document.querySelectorAll('.js-scroll');
links.forEach(each => {
    each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        const target = document.querySelector(currentTarget);
        menu.classList.remove('header__nav_active');
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});