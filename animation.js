   // JavaScript code to handle slider functionality
const images = document.querySelectorAll('.slider img');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].classList.add('hidden');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.remove('hidden');
}

// Automatically move to the next image every 3 seconds
setInterval(showNextImage, 8000);