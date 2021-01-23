const toggleBtn = document.querySelector('.headvar .toggleBtn');
const menu = document.querySelector('.headvar .menu');
const icon = document.querySelector('.headvar .icon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});