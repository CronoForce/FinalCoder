var btnAbrirpopupplay = document.getElementById('open-popup-play'),
    overlayplay = document.getElementById('overlay-play'),
    popupplay = document.getElementById('popup-play'),
    btnCerrarPopupplay = document.getElementById('close-popup-play');

btnAbrirpopupplay.addEventListener('click', function () {
    overlayplay.classList.add('active');
    popupplay.classList.add('active');
});
btnCerrarPopupplay.addEventListener('click', function () {
    overlayplay.classList.remove('active');
    popupplay.classList.remove('active');
});