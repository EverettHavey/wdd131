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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  
  // 3 Temples Added

  {
  templeName: "Las Vegas Nevada Temple",
  location: "Las Vegas, Nevada",
  dedicated: "1989, December, 16",
  area: 10.3,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/las-vegas-nevada/400x250/las-vegas-temple-exterior-001-wallpaper.jpg"
  },
 {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 47224, // Or whatever the correct area is if you have it
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-hawaii-temple-1033214-wallpaper.jpg"
    },
 {
    templeName: "Idaho Falls Idaho Temple",
    location: "Idaho Falls, Idaho, United States",
    dedicated: "1945, September, 23",
    area: 92177,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/400x250/idaho-falls-temple-lds-200720-wallpaper.jpg"
    },
  // Add more temple objects here...
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    document.querySelector("res-grid").innerHTML = "";
    filteredTemples.array.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        
    });
}