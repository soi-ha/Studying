const toggleBtn = document.querySelector('.y_toggleBtn');
const menu = document.querySelector('.y_menu');
const icon = document.querySelector('.y_icon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});
