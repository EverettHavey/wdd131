document.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  const modifiedSpan = document.querySelector('#full .highlight');
  if (modifiedSpan) {
    const lastModified = new Date(document.lastModified);
    modifiedSpan.textContent = lastModified.toLocaleDateString() + ' ' + lastModified.toLocaleTimeString();
  }

  const hamburgerButton = document.createElement('button');
  hamburgerButton.classList.add('hamburger-button');
  hamburgerButton.innerHTML = '&#9776;';

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&#10006;';
  closeButton.style.display = 'none';

  const nav = document.querySelector('nav');
  const navUl = document.querySelector('nav ul');

  if (nav) {
    nav.insertBefore(hamburgerButton, navUl);
    nav.insertBefore(closeButton, navUl);

    hamburgerButton.addEventListener('click', () => {
      navUl.classList.toggle('open');
      hamburgerButton.style.display = 'none';
      closeButton.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
      navUl.classList.remove('open');
      closeButton.style.display = 'none';
      hamburgerButton.style.display = 'block';
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        navUl.classList.remove('open');
        closeButton.style.display = 'none';
        hamburgerButton.style.display = 'none'; 
      } else if (!navUl.classList.contains('open')) {
        hamburgerButton.style.display = 'block'; 
      }
    });

    if (window.innerWidth >= 768) {
      hamburgerButton.style.display = 'none';
    }
  }
});