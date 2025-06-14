document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector("#year");
    const fullDateSpan = document.querySelector("#full .highlight");
    const today = new Date();
    const year = today.getFullYear();

    if (yearSpan) {
        yearSpan.textContent = year;
    }

    if (fullDateSpan) {
        fullDateSpan.textContent = `${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today)} | ${new Intl.DateTimeFormat("en-US", { timeStyle: "long" }).format(today)}`;
    }

    const locationInput = document.getElementById('locationInput');
    const findLocationButton = document.getElementById('findLocationButton');
    const findLocationButtonBottom = document.getElementById('findLocationButtonBottom');

    const lastLocation = localStorage.getItem('lastSearchedLocation');
    if (locationInput && lastLocation) {
        locationInput.value = lastLocation;
        console.log(`Retrieved last searched location from localStorage: ${lastLocation}`);
    }

    if (findLocationButton) {
        findLocationButton.addEventListener('click', function() {
            const location = locationInput.value.trim();
            if (location) {
                localStorage.setItem('lastSearchedLocation', location);
                displayLocationResult(location);
            } else {
                alert('Please enter a location to search.');
            }
        });
    }

    if (findLocationButtonBottom) {
        findLocationButtonBottom.addEventListener('click', function() {
            const simulatedLocation = "Your Current Location";
            localStorage.setItem('lastSearchedLocation', simulatedLocation);
            alert(`Searching for washes near "${simulatedLocation}"! We've saved this for next time.`);
        });
    }

    const popularWashes = [
        { name: "Express Wash", price: "$12.00" },
        { name: "Premium Shine Wash", price: "$28.00" },
        { name: "Ultimate Protection Wash", price: "$45.00" }
    ];

    console.log("Our Popular Washes:");
    popularWashes.forEach((wash, index) => {
        console.log(`${index + 1}. ${wash.name} - ${wash.price}`);
    });

    function checkWashEligibility(age) {
        const minDrivingAge = 16;
        if (age >= minDrivingAge) {
            console.log(`At ${age} years old, you are old enough to drive and get your car washed!`);
            return true;
        } else {
            console.log(`At ${age} years old, you are too young to drive. Maybe ask an adult for a ride to the car wash!`);
            return false;
        }
    }
    checkWashEligibility(20);
    checkWashEligibility(14);

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

function displayLocationResult(location) {
    let resultElement = document.getElementById('locationResult');
    if (!resultElement) {
        resultElement = document.createElement('p');
        resultElement.id = 'locationResult';
        document.querySelector('.location-input-container')?.appendChild(resultElement);
    }
    resultElement.textContent = `Searching for car washes near: ${location}. Results will appear shortly!`;
}