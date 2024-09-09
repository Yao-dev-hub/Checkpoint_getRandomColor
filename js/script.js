// Fonction pour générer une couleur aléatoire en hexadécimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Fonction pour changer la couleur de la boîte
function changeColor() {
    const colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = getRandomColor();
}

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    const changeColorBtn = document.getElementById('change-color-btn');
    changeColorBtn.addEventListener('click', changeColor);
});
