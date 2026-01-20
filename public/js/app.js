const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
    const toggle = drop.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', () => {
        drop.classList.toggle('active');
        const menu = drop.querySelector('.dropdown-menu');
        menu.style.display = drop.classList.contains('active') ? 'block' : 'none';
    });
});

// *ABOUT US
const openBtn = document.getElementById("openCarousel");
const closeBtn = document.getElementById("closeCarousel");
const carouselContainer = document.getElementById("carousel1");

const slides = carouselContainer.querySelectorAll('.slide');
const nextBtn = carouselContainer.querySelector('.next');
const prevBtn = carouselContainer.querySelector('.previous');

let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[i].style.display = 'flex';
}

openBtn.addEventListener("click", () => {
    carouselContainer.style.display = "block";
    document.body.style.overflow = "hidden";
    index = 0;
    showSlide(index);
});

closeBtn.addEventListener("click", () => {
    carouselContainer.style.display = "none";
    document.body.style.overflow = "auto";
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});
