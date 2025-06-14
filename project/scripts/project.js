document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector("#year");
    const fullDateSpan = document.querySelector("#full .highlight");
    const today = new Date();
    const year = today.getFullYear();

    if (yearSpan) {
        yearSpan.textContent = year;
    }

    if (fullDateSpan) {
        fullDateSpan.textContent = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "long" }).format(today);
    }
});


const hamburgerBtn = document.querySelector('.hamburger-button');
const closeBtn = document.querySelector('.close-button');
const nav = document.querySelector('nav');
const navUl = document.querySelector('nav ul');

function toggleMenu() {

    nav.classList.toggle('open');
    navUl.classList.toggle('open');

    if (nav.classList.contains('open')) {
        hamburgerBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    } else {
        hamburgerBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    }
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMenu);
}

if (closeBtn) {
    closeBtn.addEventListener('click', toggleMenu);
}

function handleResize() {
    if (window.innerWidth >= 768) {
        nav.classList.remove('open');
        navUl.classList.remove('open');
        hamburgerBtn.style.display = 'none';
        closeBtn.style.display = 'none';
    } else {
        if (!nav.classList.contains('open')) {
            hamburgerBtn.style.display = 'block';
            closeBtn.style.display = 'none';
        }
    }
}
window.addEventListener('resize', handleResize);

document.addEventListener('DOMContentLoaded', handleResize);