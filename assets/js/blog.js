//Script for blog page functionality


//Light and Dark theme 
const themeSwitch = document.querySelector('#theme-switcher');
const container = document.querySelector('.blog-container');

let mode ='light';

themeSwitch.addEventListener('click', function(){
    //If mode is light, apply dark background
    if (mode === 'light'){
        container.setAttribute('class', 'dark');
        themeSwitch.textContent= '🌑';
        mode= 'dark';
    } else {
        mode = 'light';
        container.setAttribute('class', 'light');
        themeSwitch.textContent = '☀️'
    }
});

//Back button to take user to landing page
const backButton = document.querySelector('button');

backButton.addEventListener('click', function() {
    window.location.href = 'index.html';
});