const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

function updateSlider() {
    //  (display != none)
    const allSlides = Array.from(document.querySelectorAll('.slide'));
    const visibleSlides = allSlides.filter(slide => 
        window.getComputedStyle(slide).display !== 'none'
    );

    // Перевірка меж
    if (currentIndex >= visibleSlides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = visibleSlides.length - 1;

    const amountToMove = currentIndex * 100;
    track.style.transform = `translateX(-${amountToMove}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
});

window.addEventListener('resize', () => {
    currentIndex = 0;
    updateSlider();
});
