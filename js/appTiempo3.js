


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


// "2019-12-10 18:00:00" ---fecha de la api
let fechaActual = new Date(fechaId);
let fechaViaje = new Date(2019, 11, 25 + 3); // Sat Dec 07 2019 09:34:05 GMT+0100  si no especifica hora sale 00 por defcto     +15 dias de la Api?
console.log(fechaActual + fechaViaje);




//COMPROBACION DE QUE LA VARIABLE SEA FECHA
function esFecha(fecha) {
  return (fecha instanceof Date); // Si es fecha devolverá TRUE
}



function getNombreMes(fecha) {
  let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  return meses[fechaActual.getMonth()];
}



function fechaToStringES(fecha) {
  let fechaObj = new Date(fecha);
  return fechaObj.getDate() + " de " + getNombreMes(fechaObj) + " de " + fechaObj.getFullYear();
}
let fechaEnTexto = (fechaToStringES(fechaId));


// coger la fecha de inicio y recorrer el array de las predicciones para coger una predcion diaria.
//Al recorrer el array hay que averiguar en que posicion cambia de fecha.






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

let item;
let temperaturas;
let fechas;
let descripcion;
let icono;
let temperaturaDia1;







function traer() {
  // Estoy comprobando que haya un destino introducido, y si lo hay ...fetch
  if (destinoId == "" || destinoId == null) {
    alert('introduce un destino valido');
  } else {

    var destinoTrucado = '{"cod":"200","message":0,"cnt":40,"list":[{"dt":1575633600,"main":{"temp":19.63,"temp_min":16.89,"temp_max":19.63,"pressure":1019,"sea_level":1019,"grnd_level":1011,"humidity":49,"temp_kf":2.74},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.48,"deg":67},"sys":{"pod":"d"},"dt_txt":"2019-12-06 12:00:00"},{"dt":1575644400,"main":{"temp":20.98,"temp_min":18.92,"temp_max":20.98,"pressure":1018,"sea_level":1018,"grnd_level":1009,"humidity":45,"temp_kf":2.06},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.39,"deg":78},"sys":{"pod":"d"},"dt_txt":"2019-12-06 15:00:00"},{"dt":1575655200,"main":{"temp":15.31,"temp_min":13.94,"temp_max":15.31,"pressure":1019,"sea_level":1019,"grnd_level":1011,"humidity":64,"temp_kf":1.37},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.51,"deg":47},"sys":{"pod":"n"},"dt_txt":"2019-12-06 18:00:00"},{"dt":1575666000,"main":{"temp":12.73,"temp_min":12.04,"temp_max":12.73,"pressure":1021,"sea_level":1021,"grnd_level":1012,"humidity":74,"temp_kf":0.69},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.35,"deg":3},"sys":{"pod":"n"},"dt_txt":"2019-12-06 21:00:00"},{"dt":1575676800,"main":{"temp":11,"temp_min":11,"temp_max":11,"pressure":1022,"sea_level":1022,"grnd_level":1013,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.62,"deg":23},"sys":{"pod":"n"},"dt_txt":"2019-12-07 00:00:00"},{"dt":1575687600,"main":{"temp":9.97,"temp_min":9.97,"temp_max":9.97,"pressure":1022,"sea_level":1022,"grnd_level":1013,"humidity":80,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.62,"deg":29},"sys":{"pod":"n"},"dt_txt":"2019-12-07 03:00:00"},{"dt":1575698400,"main":{"temp":9.19,"temp_min":9.19,"temp_max":9.19,"pressure":1022,"sea_level":1022,"grnd_level":1014,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2,"deg":28},"sys":{"pod":"n"},"dt_txt":"2019-12-07 06:00:00"},{"dt":1575709200,"main":{"temp":11.55,"temp_min":11.55,"temp_max":11.55,"pressure":1024,"sea_level":1024,"grnd_level":1015,"humidity":72,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.91,"deg":27},"sys":{"pod":"d"},"dt_txt":"2019-12-07 09:00:00"},{"dt":1575720000,"main":{"temp":16.85,"temp_min":16.85,"temp_max":16.85,"pressure":1024,"sea_level":1024,"grnd_level":1016,"humidity":51,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.5,"deg":72},"sys":{"pod":"d"},"dt_txt":"2019-12-07 12:00:00"},{"dt":1575730800,"main":{"temp":18.34,"temp_min":18.34,"temp_max":18.34,"pressure":1023,"sea_level":1023,"grnd_level":1015,"humidity":45,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.01,"deg":122},"sys":{"pod":"d"},"dt_txt":"2019-12-07 15:00:00"},{"dt":1575741600,"main":{"temp":13.77,"temp_min":13.77,"temp_max":13.77,"pressure":1024,"sea_level":1024,"grnd_level":1016,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":0.9,"deg":226},"sys":{"pod":"n"},"dt_txt":"2019-12-07 18:00:00"},{"dt":1575752400,"main":{"temp":12.21,"temp_min":12.21,"temp_max":12.21,"pressure":1026,"sea_level":1026,"grnd_level":1018,"humidity":68,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.61,"deg":352},"sys":{"pod":"n"},"dt_txt":"2019-12-07 21:00:00"},{"dt":1575763200,"main":{"temp":10.8,"temp_min":10.8,"temp_max":10.8,"pressure":1027,"sea_level":1027,"grnd_level":1018,"humidity":74,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.62,"deg":6},"sys":{"pod":"n"},"dt_txt":"2019-12-08 00:00:00"},{"dt":1575774000,"main":{"temp":9.93,"temp_min":9.93,"temp_max":9.93,"pressure":1027,"sea_level":1027,"grnd_level":1018,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.7,"deg":17},"sys":{"pod":"n"},"dt_txt":"2019-12-08 03:00:00"},{"dt":1575784800,"main":{"temp":9.04,"temp_min":9.04,"temp_max":9.04,"pressure":1027,"sea_level":1027,"grnd_level":1018,"humidity":79,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.49,"deg":40},"sys":{"pod":"n"},"dt_txt":"2019-12-08 06:00:00"},{"dt":1575795600,"main":{"temp":11.22,"temp_min":11.22,"temp_max":11.22,"pressure":1029,"sea_level":1029,"grnd_level":1020,"humidity":69,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.51,"deg":32},"sys":{"pod":"d"},"dt_txt":"2019-12-08 09:00:00"},{"dt":1575806400,"main":{"temp":16.42,"temp_min":16.42,"temp_max":16.42,"pressure":1028,"sea_level":1028,"grnd_level":1020,"humidity":51,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":0.98,"deg":95},"sys":{"pod":"d"},"dt_txt":"2019-12-08 12:00:00"},{"dt":1575817200,"main":{"temp":18.23,"temp_min":18.23,"temp_max":18.23,"pressure":1027,"sea_level":1027,"grnd_level":1019,"humidity":45,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.42,"deg":208},"sys":{"pod":"d"},"dt_txt":"2019-12-08 15:00:00"},{"dt":1575828000,"main":{"temp":13.86,"temp_min":13.86,"temp_max":13.86,"pressure":1028,"sea_level":1028,"grnd_level":1019,"humidity":60,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.73,"deg":212},"sys":{"pod":"n"},"dt_txt":"2019-12-08 18:00:00"},{"dt":1575838800,"main":{"temp":12.61,"temp_min":12.61,"temp_max":12.61,"pressure":1029,"sea_level":1029,"grnd_level":1020,"humidity":69,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"nubes rotas","icon":"04n"}],"clouds":{"all":52},"wind":{"speed":0.91,"deg":27},"sys":{"pod":"n"},"dt_txt":"2019-12-08 21:00:00"},{"dt":1575849600,"main":{"temp":12.67,"temp_min":12.67,"temp_max":12.67,"pressure":1028,"sea_level":1028,"grnd_level":1020,"humidity":73,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"nubes dispersas","icon":"03n"}],"clouds":{"all":34},"wind":{"speed":1.49,"deg":6},"sys":{"pod":"n"},"dt_txt":"2019-12-09 00:00:00"},{"dt":1575860400,"main":{"temp":11.85,"temp_min":11.85,"temp_max":11.85,"pressure":1028,"sea_level":1028,"grnd_level":1020,"humidity":84,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"algo de nubes","icon":"02n"}],"clouds":{"all":21},"wind":{"speed":1.35,"deg":28},"sys":{"pod":"n"},"dt_txt":"2019-12-09 03:00:00"},{"dt":1575871200,"main":{"temp":11.78,"temp_min":11.78,"temp_max":11.78,"pressure":1028,"sea_level":1028,"grnd_level":1020,"humidity":90,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"nubes dispersas","icon":"03n"}],"clouds":{"all":28},"wind":{"speed":0.95,"deg":49},"sys":{"pod":"n"},"dt_txt":"2019-12-09 06:00:00"},{"dt":1575882000,"main":{"temp":14.38,"temp_min":14.38,"temp_max":14.38,"pressure":1029,"sea_level":1029,"grnd_level":1021,"humidity":82,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"nubes","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":1.52,"deg":344},"sys":{"pod":"d"},"dt_txt":"2019-12-09 09:00:00"},{"dt":1575892800,"main":{"temp":17.98,"temp_min":17.98,"temp_max":17.98,"pressure":1029,"sea_level":1029,"grnd_level":1021,"humidity":64,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"nubes","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":2.76,"deg":63},"sys":{"pod":"d"},"dt_txt":"2019-12-09 12:00:00"},{"dt":1575903600,"main":{"temp":19.17,"temp_min":19.17,"temp_max":19.17,"pressure":1027,"sea_level":1027,"grnd_level":1019,"humidity":60,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"nubes dispersas","icon":"03d"}],"clouds":{"all":27},"wind":{"speed":1.93,"deg":96},"sys":{"pod":"d"},"dt_txt":"2019-12-09 15:00:00"},{"dt":1575914400,"main":{"temp":14.74,"temp_min":14.74,"temp_max":14.74,"pressure":1028,"sea_level":1028,"grnd_level":1019,"humidity":77,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"nubes dispersas","icon":"03n"}],"clouds":{"all":30},"wind":{"speed":0.97,"deg":81},"sys":{"pod":"n"},"dt_txt":"2019-12-09 18:00:00"},{"dt":1575925200,"main":{"temp":13.08,"temp_min":13.08,"temp_max":13.08,"pressure":1029,"sea_level":1029,"grnd_level":1021,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.81,"deg":1},"sys":{"pod":"n"},"dt_txt":"2019-12-09 21:00:00"},{"dt":1575936000,"main":{"temp":11.66,"temp_min":11.66,"temp_max":11.66,"pressure":1029,"sea_level":1029,"grnd_level":1021,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.17,"deg":14},"sys":{"pod":"n"},"dt_txt":"2019-12-10 00:00:00"},{"dt":1575946800,"main":{"temp":10.53,"temp_min":10.53,"temp_max":10.53,"pressure":1029,"sea_level":1029,"grnd_level":1020,"humidity":79,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"nubes dispersas","icon":"03n"}],"clouds":{"all":36},"wind":{"speed":1.85,"deg":42},"sys":{"pod":"n"},"dt_txt":"2019-12-10 03:00:00"},{"dt":1575957600,"main":{"temp":9.31,"temp_min":9.31,"temp_max":9.31,"pressure":1028,"sea_level":1028,"grnd_level":1020,"humidity":79,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"nubes dispersas","icon":"03n"}],"clouds":{"all":36},"wind":{"speed":2.17,"deg":52},"sys":{"pod":"n"},"dt_txt":"2019-12-10 06:00:00"},{"dt":1575968400,"main":{"temp":11.35,"temp_min":11.35,"temp_max":11.35,"pressure":1029,"sea_level":1029,"grnd_level":1021,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.05,"deg":65},"sys":{"pod":"d"},"dt_txt":"2019-12-10 09:00:00"},{"dt":1575979200,"main":{"temp":16.89,"temp_min":16.89,"temp_max":16.89,"pressure":1028,"sea_level":1028,"grnd_level":1020,"humidity":36,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"algo de nubes","icon":"02d"}],"clouds":{"all":18},"wind":{"speed":2.84,"deg":69},"sys":{"pod":"d"},"dt_txt":"2019-12-10 12:00:00"},{"dt":1575990000,"main":{"temp":18.77,"temp_min":18.77,"temp_max":18.77,"pressure":1025,"sea_level":1025,"grnd_level":1018,"humidity":29,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"nubes dispersas","icon":"03d"}],"clouds":{"all":25},"wind":{"speed":1.81,"deg":87},"sys":{"pod":"d"},"dt_txt":"2019-12-10 15:00:00"},{"dt":1576000800,"main":{"temp":12.91,"temp_min":12.91,"temp_max":12.91,"pressure":1026,"sea_level":1026,"grnd_level":1018,"humidity":43,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"algo de nubes","icon":"02n"}],"clouds":{"all":13},"wind":{"speed":0.57,"deg":124},"sys":{"pod":"n"},"dt_txt":"2019-12-10 18:00:00"},{"dt":1576011600,"main":{"temp":11.68,"temp_min":11.68,"temp_max":11.68,"pressure":1026,"sea_level":1026,"grnd_level":1019,"humidity":46,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.42,"deg":1},"sys":{"pod":"n"},"dt_txt":"2019-12-10 21:00:00"},{"dt":1576022400,"main":{"temp":10.35,"temp_min":10.35,"temp_max":10.35,"pressure":1026,"sea_level":1026,"grnd_level":1018,"humidity":54,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.14,"deg":356},"sys":{"pod":"n"},"dt_txt":"2019-12-11 00:00:00"},{"dt":1576033200,"main":{"temp":9.21,"temp_min":9.21,"temp_max":9.21,"pressure":1025,"sea_level":1025,"grnd_level":1017,"humidity":60,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.07,"deg":17},"sys":{"pod":"n"},"dt_txt":"2019-12-11 03:00:00"},{"dt":1576044000,"main":{"temp":8.31,"temp_min":8.31,"temp_max":8.31,"pressure":1025,"sea_level":1025,"grnd_level":1017,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.36,"deg":20},"sys":{"pod":"n"},"dt_txt":"2019-12-11 06:00:00"},{"dt":1576054800,"main":{"temp":10.92,"temp_min":10.92,"temp_max":10.92,"pressure":1026,"sea_level":1026,"grnd_level":1018,"humidity":52,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.09,"deg":22},"sys":{"pod":"d"},"dt_txt":"2019-12-11 09:00:00"}],"city":{"id":6361046,"name":"Seville","coord":{"lat":37.3886,"lon":-5.9954},"country":"ES","timezone":3600,"sunrise":1575617037,"sunset":1575651968}}';







    let viaje = JSON.parse(`${destinoTrucado}`);
    console.log(viaje);

    //bucle recorrer la propiedad list del objeto
    let misDatos = '';

    for (key in viaje.list) {
      item = viaje.list[key];
      temperaturas = item.main.temp;
      fechas = item.dt_txt;
      descripcion = item.weather[0].description;
      icono = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
      temperaturaDia1 = viaje.list[0].main.temp;

      //http://openweathermap.org/img/wn/10d@2x.png
      //misDatos += fechaToStringES(item.dt_txt) + '<br>';
      misDatos += fechaToStringES(fechas) + '<br>' + temperaturas + ' Cº' + '<br>' + descripcion + '<br><img src=' + icono + '>' + '<hr>';
      contenido2.innerHTML = misDatos;



    }
    /*     contenido2.innerHTML = viaje.list[0].dt_txt;
        let destino = (viaje.city.name);
     */

    contenido.innerHTML = `Tu viaje a ${destinoId} comienza el ${fechaEnTexto}<br> y esté será tu pronóstico del tiempo :<hr>`;
    contenido2.innerHTML = misDatos;
    //let fecha1 = viaje.list[0].dt_txt;

    //bucle para encontrar  la fecha del parametro dentro de las fechas del objeto.



  }

}
traer();



//Comprobacion de temperatura para mostrar maleta
function comprobarTemperatura(temperaturaGrados) {
  if (temperaturaGrados >= 10) {
    return "calor";
  } else {
    return "frio"
  }
}

var temperaturaString = comprobarTemperatura(temperaturaDia1);











//Botón lleva  a una nueva url de maleta destino con el parametro de clima
document.getElementById("doItMaleta").addEventListener("click", function () {
  window.location.href = `http://127.0.0.1:5500/appLook.html?temperatura=${temperaturaString}`;
});












//display none del boton hasta que termina la llamada y luego si le damos display







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



