window.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');
    const heroHeader = document.querySelector('.heroHeader');

    const listenScroll = () => {
        if (window.scrollY > 0) {
            navbar.classList.add('navbar--dark');
        } else {
            navbar.classList.remove('navbar--dark');
        }

    };

    window.addEventListener('scroll', listenScroll);
     
    listenScroll();

    });
