const openButton = document.querySelector('#openMenu');
const menu = document.querySelector('#fullscreenMenu');
const closeButton = document.querySelector('#closeMenu');


openButton.addEventListener('click', e => {
    e.preventDefault();
    menu.style.display = 'block';
});

closeButton.addEventListener('click', e => {
    e.preventDefault();
    menu.style.display = 'none';
});
