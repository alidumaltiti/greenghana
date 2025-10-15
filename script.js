document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle logic from existing script.js
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
 
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.add(savedTheme);
            if (themeToggle && savedTheme === 'dark-mode') {
                themeToggle.checked = true;
            }
        } else {
            body.classList.add('light-mode');
            if (themeToggle) {
                themeToggle.checked = false;
            }
        }
    };
 
    const toggleTheme = () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    };
 
    if (themeToggle) {
        themeToggle.addEventListener('change', toggleTheme);
    }
 
    applyTheme();

    // Logic from inline script in index.html
    // Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = hamburgerBtn.querySelector('i');

    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('fa-bars');
        hamburgerIcon.classList.toggle('fa-times');
    });

    // Staggered fade-in animation for elements with the 'stagger-fade' class
    const fadeElements = document.querySelectorAll('.stagger-fade');
    anime({
        targets: fadeElements,
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 200 }),
        easing: 'easeOutExpo',
        duration: 1200,
    });

    // Counting animation for statistics
    const countElements = document.querySelectorAll('[data-count]');
    countElements.forEach(el => {
        const target = parseFloat(el.getAttribute('data-count'));
        anime({
            targets: el,
            innerHTML: [0, target],
            round: target % 1 !== 0 ? 100 : 1, // Round to 2 decimal places if it's a float
            easing: 'easeOutCirc',
            duration: 2500,
            delay: 500,
        });
    });

    // Initialize Splide carousel for success stories
    if (document.getElementById('success-stories')) {
        new Splide('#success-stories', {
            type: 'loop',
            perPage: 2,
            perMove: 1,
            gap: '2rem',
            pagination: false,
            arrows: true,
            breakpoints: {
                768: {
                    perPage: 1,
                },
            },
        }).mount();
    }
});