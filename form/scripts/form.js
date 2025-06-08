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

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productNameSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

if (window.location.pathname.endsWith('review.html')) {
    let reviewCount = localStorage.getItem('numReviews');
    if (reviewCount) {
        reviewCount = parseInt(reviewCount) + 1;
    } else {
        reviewCount = 1;
    }
    localStorage.setItem('numReviews', reviewCount);

    const reviewCounterElement = document.getElementById('reviewCounter');
    if (reviewCounterElement) {
        reviewCounterElement.textContent = `Reviews Completed: ${reviewCount}`;
    }
}