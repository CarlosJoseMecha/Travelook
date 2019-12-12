btnCerrarSesion = document.getElementById('btnCerrarSesion');
btnCerrarSesionFooter = document.getElementById('btnCerrarSesionFooter')
//?CERRAR SESION
//al pulsar cerrar sesion, el status de logueo pasa a ser falso
btnCerrarSesion.addEventListener('click', function () {
  setTimeout(function () {
    window.location.href = "index.html";
  }, 500);
  setStatusFalse();
});
btnCerrarSesionFooter.addEventListener('click', function () {
  setTimeout(function () {
    window.location.href = "index.html";
  }, 500);
  setStatusFalse();
});



//*funciones status logueo
function setStatusTrue() {
  localStorage.setItem('logued', JSON.stringify(logued = true));
  localStorage.setItem('loguedUser', JSON.stringify([{}]));

};

function setStatusFalse() {
  localStorage.setItem('logued', JSON.stringify(logued = false));
  localStorage.setItem('loguedUser', JSON.stringify([]));

};