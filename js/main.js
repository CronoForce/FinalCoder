document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show')
});


var btnAbrirpopup = document.getElementById('open-popup'),
    overlay = document.getElementById('overlay'),
    popup= document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('close-popup'),
    btnAbrirpopupAsassin = document.getElementById('open-popup-asassin'),
    overlayasassin = document.getElementById('overlay-asassin'),
    popupasassin = document.getElementById('popup-asassin'),
    btnCerrarPopupasassin = document.getElementById('close-popup-asassin'),
    btnAbrirpopupFifa = document.getElementById('open-popup-fifa'),
    overlayfifa = document.getElementById('overlay-fifa'),
    popupfifa = document.getElementById('popup-fifa'),
    btnCerrarPopupfifa = document.getElementById('close-popup-fifa'),
    btnAbrirpopupplay = document.getElementById('open-popup-play'),
    overlayplay = document.getElementById('overlay-play'),
    popupplay = document.getElementById('popup-play'),
    btnCerrarPopupplay = document.getElementById('close-popup-play');

btnAbrirpopup.addEventListener('click', function (){
    overlay.classList.add('active');
    popup.classList.add('active');
});
btnAbrirpopupAsassin.addEventListener('click', function(){
    overlayasassin.classList.add('active');
    popupasassin.classList.add('active');
});
btnAbrirpopupFifa.addEventListener('click', function(){
    overlayfifa.classList.add('active');
    popupfifa.classList.add('active');
});


btnCerrarPopup.addEventListener('click', function (){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});
btnCerrarPopupasassin.addEventListener('click', function (){
    overlayasassin.classList.remove('active');
    popupasassin.classList.remove('active');
});
btnCerrarPopupfifa.addEventListener('click', function (){
    overlayfifa.classList.remove('active');
    popupfifa.classList.remove('active');
});
