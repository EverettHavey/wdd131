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