document.addEventListener('DOMContentLoaded', function() {
  const footer = document.querySelector('footer');

  if (footer) {

    let firstParagraph = footer.querySelector('p:first-child');
    if (!firstParagraph) {
      firstParagraph = document.createElement('p');
      footer.appendChild(firstParagraph);
    }
    const currentYear = new Date().getFullYear();
    firstParagraph.textContent = `© ${currentYear} Your Company Name. All rights reserved.`;

    let secondParagraph = footer.querySelector('p:nth-child(2)');
    if (!secondParagraph) {
      secondParagraph = document.createElement('p');
      footer.appendChild(secondParagraph);
    }
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    secondParagraph.textContent = `Last modified: ${lastModified.toLocaleDateString(undefined, options)}`;
  }
});