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
  
  // More Temples...//

  {
  templeName: "Las Vegas Nevada Temple",
  location: "Las Vegas, Nevada",
  dedicated: "16–18 December 1989",
  area: 10.3,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/las-vegas-nevada/400x250/las-vegas-temple-exterior-001-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];

createTempleCard();

function createTempleCard(filteredTemples) {
    // Use forEach for iterating over an array
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let nameElement = document.createElement("h3"); // Renamed to avoid conflict with 'name' property
        let locationElement = document.createElement("p"); // Renamed for clarity
        let dedicationElement = document.createElement("p"); // Renamed for clarity
        let areaElement = document.createElement("p"); // Renamed for clarity
        let img = document.createElement("img");

        nameElement.textContent = temple.templeName;

        // Use template literals (backticks ``) for string interpolation
        locationElement.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicationElement.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        areaElement.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        // Use template literals for the alt text as well
        img.setAttribute("alt", `${temple.templeName} temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(nameElement);
        card.appendChild(locationElement);
        card.appendChild(dedicationElement);
        card.appendChild(areaElement);
        card.appendChild(img);

        // Ensure an element with the class "res-grid" exists in your HTML
        const gridContainer = document.querySelector(".res-grid");
        if (gridContainer) {
            gridContainer.appendChild(card);
        } else {
            console.error("Error: Element with class 'res-grid' not found.");
        }
    });
}