
z
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


var destinoId = getParameterByName('destino');
var fechaId = getParameterByName('fecha');

//let ciudadDestino = document.querySelector('#destinoViaje');
// ${ciudadDestino}

function traer() {
  // Estoy comprobando que haya un destino introducido, y si lo hay ...fetch
  if (destinoId == "" || destinoId == null) {
    alert('introduce un destino avlido');
  } else {

    fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=${destinoId},ES&units=metric&lang=es&APPID=dcad6bd0f350bf23372a42cce21f47da`)

      /*   fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Mostoles,ES&APPID=dcad6bd0f350bf23372a42cce21f47da') */ //Traemos el archivo con fetch
      .then(data => data.text()) //Hacemos una promesa de que lo haga y con data text, lo convertimos a txt
      .then(data => {


        contenido.innerHTML = `${data}` // Así nos traemos de manera literal una variable HTML
        var viaje = JSON.parse(`${data}`);
        console.log(viaje);
        //var daily = viaje.data[0]//me creo esta variable para reutilizarla de manera + eficiente al acceder a datos
        let destino = (viaje.city.name);
        let temDias = (viaje.list[0].main.temp);
        let descripcion = (viaje.weather[0].description);

        /*   let temMax = (viaje.main.temp);
          let temGEN = (viaje.sys.country);
          let SEM = (viaje.weather[0].main); */



        ///PARAMETROS QUE USA LA API Y QUE QUEREMOS
        //temp
        //description
        //forecast
        //descripcion: viene en español


        //icon: para mostrar icono?=
        //url para mostrar iconos http://openweathermap.org/img/wn/10d@2x.png



        contenido.innerHTML = destino + " " + temDias;/* " " + temGEN + " " + SEM; */

      })



  }

}
traer();

var json = { "nombre": "jose", "apellido": "sanchez", "edad": 25 };
for (var key in json) {
  document.write("<br>" + key + " - " + json[key]);
}











  //Array ciudades cuado pincho que me busque esa ciudad.
/*
traer los dos valores .latirtud.Array

var latitud
var longitud
var ciudad (latitud, longirud) */
