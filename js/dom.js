console.dir(document);
console.dir(document);
const partnersContainer = document.querySelector('.partners-container');
const partnerImages = partnersContainer.querySelectorAll('.partner-img');
for (let index = 0; index < partnerImages.length; index++) {
    const image = partnerImages[index];
    image.setAttribute('alt', 'Partner ${index + 1}');
}
console.dir(partnersContainer);
console.dir(partnerImages);


const title = document.querySelector('h1');
console.dir(title);
title.textContent = ' Soziiii';