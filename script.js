const siButton = document.getElementById('si');
const noButton = document.getElementById('no');
const respuestaSi = document.getElementById('respuesta-si');

siButton.addEventListener('click', () => {
    respuestaSi.style.display = "block";
    setTimeout(() => {
        respuestaSi.style.display = "none";
    }, 7000);
});

noButton.addEventListener('click', () => {
    // Función para mover el botón "No" solo en el eje horizontal
    const randomX = Math.floor(Math.random() * (window.innerWidth - 200)) + 100;
    noButton.style.left = `${randomX}px`;
});
