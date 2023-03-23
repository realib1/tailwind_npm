window.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');
    // const heroHeader = document.querySelector('.heroHeader');

    const listenScroll = () => {
        if (window.scrollY > 0) {
            navbar.classList.add('navbar--dark');
        } else {
            navbar.classList.remove('navbar--dark');
        }

    };

    window.addEventListener('scroll', listenScroll);

    listenScroll();

    // Dark mode in tailwind

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const isDarkMode = e.matches;
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });


    const toggleButton = document.querySelector('.theme-switch');
    // theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        toggleButton.checked = true;
      } else {
        document.documentElement.classList.remove('dark')
        toggleButton.checked = false;
      }
      

      const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
            toggleButton.checked = false;
        } else {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
            toggleButton.checked = true;
        }
        }

        toggleButton.addEventListener('click', toggleTheme);

      // Whenever the user explicitly chooses light mode
      localStorage.theme = 'light'
      
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = 'dark'
      
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem('theme')


    // Scroll to top

    const scrollToTop = document.querySelector('.scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTop.classList.add('scrollToTop--active');
        } else {
            scrollToTop.classList.remove('scrollToTop--active');
        }
    });

    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    
    const scrollToBottom = () => {
        if(window.screenY < 0) {
                scrollToTop.classList.add('scrollToTop--active');
        }
    }

    scrollToBottom();



});
