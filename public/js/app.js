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


    //* WHAT SAYING ABOUT US

    const containers = document.querySelectorAll(".carousel-testimonials");

    containers.forEach(container => {

        const carousel = container.querySelector(".carousel-testimonials-track");
        const slides = container.querySelectorAll(".slidee");
        let index = 0;

        const indicatorsGrp = document.createElement("div");
        indicatorsGrp.className = "indicators-grp";
        container.appendChild(indicatorsGrp);

        slides.forEach((slide, i) => {
            const indicator = document.createElement("div");
            indicator.className = "indicator";
            if (i === 0) indicator.classList.add("activeIndicator");
            indicatorsGrp.appendChild(indicator);

            indicator.addEventListener("click", () => {
                goToSlide(i);
            });
        });

        const indicators = indicatorsGrp.querySelectorAll(".indicator");

        function goToSlide(i) {
            carousel.style.transform = `translateX(-${i * 100}%)`;

            indicators.forEach(ind => ind.classList.remove("activeIndicator"));
            indicators[i].classList.add("activeIndicator");

            index = i;
        }
        setInterval(() => {
            index++;
            if (index >= slides.length) index = 0;
            goToSlide(index);
        }, 3000);
    });


    //* carousel_image 

    const carousel = document.querySelector(".carouselEv");
const slides = document.querySelectorAll(".carouselEv .sld");
const dots = document.querySelectorAll(".carousel-indicators .dot");
const visibleSlides = 3;
const totalSlides = slides.length;

let index = 0;

for(let i = 0; i < visibleSlides; i++){
    const clone = slides[i].cloneNode(true);
    carousel.appendChild(clone);
}

function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
    

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index % totalSlides].classList.add('active');
}

setInterval(() => {
    index++;
    updateCarousel();
    
    
    if(index >= totalSlides) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            index = 0;
            updateCarousel();
            carousel.offsetHeight; 
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 500);
    }
}, 3000)



//* BOOK A TABLE

// document.addEventListener("DOMContentLoaded", () => {
    // const button = document.querySelector(".book-btn");
    // const grid = document.querySelector(".GRID");
    // if (!button || !grid) return;

    // const reservations = [];

    // function isValidEmail(email) {
    //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // }

    // function isValidPhone(phone) {
    //     return /^\d+$/.test(phone);
    // }

    // function showError(input, message) {
    //     clearError(input);
    //     const error = document.createElement("div");
    //     error.className = "input-error";
    //     error.style.color = "red";
    //     error.style.fontSize = "12px";
    //     error.style.marginTop = "4px";
    //     error.textContent = message;
    //     input.parentNode.appendChild(error);
    // }

    // function clearError(input) {
    //     const parent = input.parentNode;
    //     const error = parent.querySelector(".input-error");
    //     if (error) parent.removeChild(error);
    // }

    // function saveReservation() {
    //     const inputs = grid.querySelectorAll("input");
    //     const textarea = grid.querySelector("textarea");

    //     let valid = true;

    //     const name = inputs[0];
    //     const email = inputs[1];
    //     const phone = inputs[2];
    //     const date = inputs[3];
    //     const time = inputs[4];
    //     const people = inputs[5];
    //     const message = textarea;

    //     [...inputs, textarea].forEach(clearError);

    //     if (!name.value.trim()) {
    //     showError(name, "Name is required");
    //     valid = false;
    //     }

    //     if (!email.value.trim()) {
    //     showError(email, "Email is required");
    //     valid = false;
    //     } else if (!isValidEmail(email.value.trim())) {
    //     showError(email, "Invalid email address");
    //     valid = false;
    //     }

    //     if (!phone.value.trim()) {
    //     showError(phone, "Phone number is required");
    //     valid = false;
    //     } else if (!isValidPhone(phone.value.trim())) {
    //     showError(phone, "Phone number must contain digits only");
    //     valid = false;
    //     }

    //     if (!date.value.trim()) {
    //     showError(date, "Date is required");
    //     valid = false;
    //     }

    //     if (!time.value.trim()) {
    //     showError(time, "Time is required");
    //     valid = false;
    //     }

    //     if (!people.value.trim()) {
    //     showError(people, "Number of people is required");
    //     valid = false;
    //     } else if (isNaN(people.value.trim()) || Number(people.value.trim()) <= 0) {
    //     showError(people, "Please enter a valid number of people");
    //     valid = false;
    //     }

    //     if (!valid) return;

    //     const data = {
    //     name: name.value.trim(),
    //     email: email.value.trim(),
    //     phone: phone.value.trim(),
    //     date: date.value.trim(),
    //     time: time.value.trim(),
    //     people: people.value.trim(),
    //     message: message.value.trim()
    //     };

    //     reservations.push(data);
    //     console.log("Reservations:", reservations);

    //     [...inputs, textarea].forEach(input => input.value = "");
    // }

    // button.addEventListener("click", saveReservation);
    // });
