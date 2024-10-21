document.addEventListener('DOMContentLoaded', () => {
    const acceptButton = document.getElementById('acceptButton');
    const nopeButton = document.getElementById('nopeButton');

    acceptButton.addEventListener('click', () => {
        alert('¡Entra Gordo!');
    });

    nopeButton.addEventListener('mouseover', (e) => {
        const maxX = window.innerWidth - nopeButton.offsetWidth;
        const maxY = window.innerHeight - nopeButton.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        nopeButton.style.position = 'fixed';
        nopeButton.style.left = randomX + 'px';
        nopeButton.style.top = randomY + 'px';
    });
});