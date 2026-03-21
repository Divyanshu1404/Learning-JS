const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.main-nav a');

menuToggle?.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 100;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
            activeLink?.classList.add('active');
        }
    });
});

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            event.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                mainNav.classList.remove('open');
            }
        }
    });
});

console.log('Portfolio interactions ready!');