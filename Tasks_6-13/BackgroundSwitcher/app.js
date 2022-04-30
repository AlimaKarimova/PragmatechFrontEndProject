let switchButton = document.querySelector('input[type="checkbox"]');
let light = document.querySelector('.light');
let dark = document.querySelector('.dark');


switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    light.classList.toggle('light-text-night');
    dark.classList.toggle('dark-text-night');

});