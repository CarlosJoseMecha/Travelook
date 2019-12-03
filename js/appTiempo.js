
//var contenido = document.querySelector('#contenido');

/* function traer() {
  fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/71446b88e6eef2aa7de9e6488649d968/40.3160097,-3.8765372,1479294000?exclude=currently,flags,hourly&') //Traemos el archivo con fetch
    .then(data => data.text()) //Hacemos una promesa de que lo haga y con data text, lo convertimos a txt
    .then(data => {
      //console.log(data)
      //contenido.innerHTML =`${data}` // Así nos traemos de manera literal una variable HTML
      var viaje= JSON.parse(`${data}`);
      console.log(viaje);
      var daily =viaje.daily.data[0];//me creo esta variable para reutilizarla de manera + eficiente al acceder a datos
      contenido.innerHTML = (daily.apparentTemperatureHigh);
      var celsiusPintar = convertirFarenACelsius(daily.apparentTemperatureHigh); //estoy llamando a la funcion y recibiendo el resultado
      contenido.innerHTML = celsiusPintar.toLocaleString();
    })
  }

  traer();
 */


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


  fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${destinoId},ES&units=metric&lang=es&APPID=dcad6bd0f350bf23372a42cce21f47da`)

    /*   fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Mostoles,ES&APPID=dcad6bd0f350bf23372a42cce21f47da') */ //Traemos el archivo con fetch
    .then(data => data.text()) //Hacemos una promesa de que lo haga y con data text, lo convertimos a txt
    .then(data => {


      contenido.innerHTML = `${data}` // Así nos traemos de manera literal una variable HTML
      var viaje = JSON.parse(`${data}`);
      console.log(viaje);
      //var daily = viaje.data[0]//me creo esta variable para reutilizarla de manera + eficiente al acceder a datos
      let destino = (viaje.name);
      let temMax = (viaje.main.temp);
      let temGEN = (viaje.sys.country);
      let SEM = (viaje.weather[0].main);


      contenido.innerHTML = destino + " " + temMax + " " + temGEN + " " + SEM;
      //var celsiusPintar = convertirFarenACelsius(viaje.temMax); //estoy llamando a la funcion y recibiendo el resultado
      //contenido.innerHTML = celsiusPintar.toLocaleString();
    })
}
traer();





function convertirFarenACelsius(farenheit) {
  var celsiusConvertir = (farenheit - 32) * 5 / 9;
  var celsiusRedondeados = Math.round(celsiusConvertir * 100) / 100;
  return celsiusRedondeados;
}


function convertirKelvinACelsius(kelvins) {
  let celsiusConvertir = (kelvins - 273, 15);
  var celsiusRedondeados = Math.round(celsiusConvertir * 100) / 100;
  return celsiusRedondeados;

}








  //Array ciudades cuado pincho que me busque esa ciudad.
/*
traer los dos valores .latirtud.Array

var latitud
var longitud
var ciudad (latitud, longirud) */
