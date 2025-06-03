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

function displayTemples(filteredTemples) {
    const gridContainer = document.querySelector(".res-grid");
    // Clear existing content to prevent duplicates when refiltering
    gridContainer.innerHTML = ''; 

    if (!gridContainer) {
        console.error("Error: Element with class 'res-grid' not found.");
        return; // Exit if container not found
    }

    // Check if filteredTemples is an array before trying to iterate
    if (!Array.isArray(filteredTemples)) {
        console.error("Error: displayTemples expects an array, but received:", filteredTemples);
        return; // Exit if not an array
    }

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let nameElement = document.createElement("h3");
        let locationElement = document.createElement("p");
        let dedicationElement = document.createElement("p");
        let areaElement = document.createElement("p");
        let img = document.createElement("img");

        nameElement.textContent = temple.templeName;

        locationElement.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicationElement.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        areaElement.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`; // Use toLocaleString for better number formatting

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(nameElement);
        card.appendChild(locationElement);
        card.appendChild(dedicationElement);
        card.appendChild(areaElement);
        card.appendChild(img);

        gridContainer.appendChild(card);
    });
}

// Call the function initially to display all temples when the page loads
// Encapsulate this in a DOMContentLoaded listener for best practice, though defer helps too
document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples);
});

// Now, you'll need to add the filtering logic. Here's a basic structure:
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior (page reload)
        const filter = event.target.textContent; // Get the text of the clicked link (Home, Old, New, Large, Small)

        let filteredList = [];

        if (filter === "Home") {
            filteredList = temples; // Show all temples
        } else if (filter === "Old") {
            // Example: Temples dedicated before 1900
            filteredList = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
        } else if (filter === "New") {
            // Example: Temples dedicated in 2000 or later
            filteredList = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year >= 2000;
            });
        } else if (filter === "Large") {
            // Example: Temples with area > 90000 sq ft
            filteredList = temples.filter(temple => temple.area > 90000);
        } else if (filter === "Small") {
            // Example: Temples with area <= 15000 sq ft
            filteredList = temples.filter(temple => temple.area <= 15000);
        }
        
        displayTemples(filteredList); // Call the display function with the filtered list
    });
});