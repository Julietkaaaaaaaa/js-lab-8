const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

let timer = setInterval(nextSlide, 3000);

function resetTimer() {
    clearInterval(timer); 
    timer = setInterval(nextSlide, 3000); 
}


burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    resetTimer();
});

const slides = document.getElementById("slides");
const slide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}

function nextSlide() {
    currentIndex++;

    if (currentIndex >= slide.length) {
        currentIndex = 0;
    }

    updateCarousel();
}

function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slide.length - 1;
    }

    updateCarousel();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 3000);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
    });
});
