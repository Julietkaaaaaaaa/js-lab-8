
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");


burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

const slides = document.getElementById("slides");
const slide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

//Управління таймером
let timer = setInterval(nextSlide, 3000); // Створюємо таймер ОДИН раз

function resetTimer() {
    clearInterval(timer); 
    timer = setInterval(nextSlide, 3000); 
}

//Функції каруселі
function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
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

nextBtn.addEventListener("click", () => {
    nextSlide();
    resetTimer();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetTimer(); 
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
        resetTimer(); 
    });
});
