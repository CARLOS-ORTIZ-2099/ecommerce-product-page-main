const imgMain = document.querySelector('.img-alone');
const galleryContainer = document.querySelector('.gallery-container');
const gallery = document.querySelectorAll('.gallery .imgs');
let currentIndex = null;

gallery.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});

function openLightbox(index) {
    currentIndex = index;
    const lightboxContainer = createLightboxContainer();
    updateLightboxContent(lightboxContainer);
    document.body.appendChild(lightboxContainer);
}

function createLightboxContainer() {
    const lightboxContainer = document.createElement('div');
    lightboxContainer.classList.add('custom');
    const closeButton = createButton('X', () => closeLightbox(lightboxContainer));
    const prevButton = createButton('Prev', showPrevImage);
    const nextButton = createButton('Next', showNextImage);

    lightboxContainer.appendChild(closeButton);
    lightboxContainer.appendChild(prevButton);
    lightboxContainer.appendChild(nextButton);

    return lightboxContainer;
}

function createButton(text, onClick) {
    const button = document.createElement('button');
    button.innerHTML = text;
    button.addEventListener('click', onClick);
    return button;
}

function closeLightbox(lightboxContainer) {
    lightboxContainer.remove();
    currentIndex = null;
}

function updateLightboxContent(lightboxContainer) {
    const imgMainClone = imgMain.cloneNode(true);
    lightboxContainer.innerHTML = '';
    lightboxContainer.appendChild(imgMainClone);
}

function showPrevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
}

function showNextImage() {
    if (currentIndex < gallery.length - 1) {
        currentIndex++;
        updateImage();
    }
}

function updateImage() {
    const src = gallery[currentIndex].getAttribute('src');
    imgMain.setAttribute('src', src);
}
