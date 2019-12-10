


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

        fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=${destinoId},ES&units=metric&lang=es&APPID=dcad6bd0f350bf23372a42cce21f47da`)

            .then(data => data.text()) //Hacemos una promesa de que lo haga y con data text, lo convertimos a txt
            .then(data => {

                /*  contenido.innerHTML = `${data}` // Así nos traemos de manera literal una variable HTML */
                let viaje = JSON.parse(`${data}`);
                console.log(viaje.name);


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

                //var daily = viaje.data[0]//me creo esta variable para reutilizarla de manera + eficiente al acceder a datos
                let destino = (viaje.city.name);
                let temDias = (viaje.list[0].main.temp);
                let descripcion = (viaje.weather[0].description);




                //bucle recorrer la propiedad list del objeto

                /*     contenido2.innerHTML = viaje.list[0].dt_txt;
                    let destino = (viaje.city.name);
                 */




            })

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