    document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    if (dropdowns.length > 0) {
        dropdowns.forEach(drop => {
        const toggle = drop.querySelector('.dropdown-toggle');
        const menu = drop.querySelector('.dropdown-menu');

        if (!toggle || !menu) return;

        toggle.addEventListener('click', () => {
            drop.classList.toggle('active');
            menu.style.display = drop.classList.contains('active') ? 'block' : 'none';
        });
        });
    }

    //* ABOUT
    const openBtn = document.getElementById("openCarousel");
    const closeBtn = document.getElementById("closeCarousel");
    const carouselContainer = document.getElementById("carousel1");

    if (openBtn && closeBtn && carouselContainer) {

        const slides = carouselContainer.querySelectorAll('.slide');
        const nextBtn = carouselContainer.querySelector('.next');
        const prevBtn = carouselContainer.querySelector('.previous');

        let index = 0;

        function showSlide(i) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[i].style.display = 'flex';
        }

        openBtn.addEventListener("click", () => {
        carouselContainer.style.display = "flex";
        document.body.style.overflow = "hidden";
        index = 0;
        showSlide(index);
        });

        closeBtn.addEventListener("click", () => {
        carouselContainer.style.display = "none";
        document.body.style.overflow = "auto";
        });

        if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        });

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        });
        }
    }

    //* MENU
    const menu = document.querySelector(".menu");
    if (menu) {

        const tabs = menu.querySelectorAll(".tab");
        const items = menu.querySelectorAll(".menu-item");

        tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const filter = tab.dataset.filter;

            items.forEach(item => {
            item.style.display = item.classList.contains(filter) ? "" : "none";
            });

        });
        });
    }

    });
