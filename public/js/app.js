const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
    const toggle = drop.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', () => {
        drop.classList.toggle('active');
        const menu = drop.querySelector('.dropdown-menu');
        menu.style.display = drop.classList.contains('active') ? 'block' : 'none';
    });
});

/* ABOUT US*/
const playBtn = document.querySelector(".play-btn");
const videoImages = document.querySelectorAll(".video-box .video-img");

let videoIndex = 0;

playBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    videoImages[videoIndex].classList.remove("active");

    videoIndex++;
    if (videoIndex >= videoImages.length) {
        videoIndex = 0;
    }

    videoImages[videoIndex].classList.add("active");
});
