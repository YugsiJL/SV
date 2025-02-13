function revealMessage() {
    // Ocultar el corazón
    const heart = document.querySelector('.heart');
    heart.classList.add('hidden');

    // Mostrar el mensaje
    const message = document.getElementById('message');
    message.classList.remove('hidden');

    // Lanzar confeti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });

    // Mostrar la galería
    setTimeout(() => {
        
        const gallery = document.getElementById('gallery');
        gallery.classList.remove('hidden');
    }, 10000);

    // Mostrar el contador
    setTimeout(() => {
        const counter = document.getElementById('counter');
        counter.classList.remove('hidden');
        calculateDaysSinceWeMet();
    }, 15000);

     // Mostrar el video
     setTimeout(() => {
        const video = document.getElementById('video');
        video.classList.remove('hidden');
    }, 50000);

     // Mostrar la carta
     setTimeout(() => {
        const letter = document.getElementById('letter');
        letter.classList.remove('hidden');
    }, 70000);
}

function calculateDaysSinceWeMet() {
    const dateWeMet = new Date('2021-10-13');
    const today = new Date();
    const timeDiff = today - dateWeMet;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    document.getElementById('daysCount').textContent = daysDiff + " días";
}

function calculateTimeTogether() {
    const dateWeMet = new Date('2022-08-12');
    const today = new Date();
    const timeDiff = today - dateWeMet;
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    document.getElementById('timeTogether').textContent = `${years} años, ${months} meses y ${days} días`;
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', calculateTimeTogether);

let currentPhotoIndex = 0;

function showPhoto(index) {
    const photos = document.querySelectorAll('.carousel-images img');
    photos.forEach((photo, i) => {
        photo.classList.toggle('active', i === index);
    });
}

function nextPhoto() {
    const photos = document.querySelectorAll('.carousel-images img');
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto(currentPhotoIndex);
}

function prevPhoto() {
    const photos = document.querySelectorAll('.carousel-images img');
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    showPhoto(currentPhotoIndex);
}

// Mostrar la primera foto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showPhoto(currentPhotoIndex);
});