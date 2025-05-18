document.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Get the last modified date
  const modifiedSpan = document.querySelector('#full .highlight');
  if (modifiedSpan) {
    const lastModified = new Date(document.lastModified);
    modifiedSpan.textContent = lastModified.toLocaleDateString() + ' ' + lastModified.toLocaleTimeString();
  }

  // Hamburger menu functionality
  const hamburgerButton = document.createElement('button');
  hamburgerButton.classList.add('hamburger-button');
  hamburgerButton.innerHTML = '&#9776;'; // Hamburger icon

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&#10006;'; // Close 'X' icon
  closeButton.style.display = 'none'; // Initially hidden

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

    // Close menu if window is resized to a larger view
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) { // Adjust breakpoint if needed
        navUl.classList.remove('open');
        closeButton.style.display = 'none';
        hamburgerButton.style.display = 'none'; // Hide hamburger on larger screens
      } else if (!navUl.classList.contains('open')) {
        hamburgerButton.style.display = 'block'; // Show hamburger on smaller screens if closed
      }
    });

    // Initial state check on load
    if (window.innerWidth >= 768) {
      hamburgerButton.style.display = 'none';
    }
  }
});