const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
    const toggle = drop.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', () => {
        drop.classList.toggle('active');
        const menu = drop.querySelector('.dropdown-menu');
        menu.style.display = drop.classList.contains('active') ? 'block' : 'none';
    });
});
