function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let destinoId = getParameterByName('destino');
let fechaId = getParameterByName('fecha');

//let ciudadDestino = document.querySelector('#destinoViaje');
// ${ciudadDestino}

// "2019-12-10 18:00:00" ---fecha de la api
let fechaActual = new Date(fechaId);
//let fechaViaje = new Date(2019, 11, 25 + 3); // Sat Dec 07 2019 09:34:05 GMT+0100  si no especifica hora sale 00 por defcto     +15 dias de la Api?
//console.log(fechaActual + fechaViaje);



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
  return `${fechaObj.getDate()}  de  ${getNombreMes(fechaObj)} de ${fechaObj.getFullYear()}`;
}



//1 obtnego parametro de la url y veo que no sea nulo --traer()
//2 obtengo los datos de la api -- obternerDatos()
//3 trato los datos que recibo y pinto en html los resultados -- trataTardatos()
//4 paso la logica para saber si hace frio o calor --> comprobar temperatura (), logicaFrioCalor()

let temperaturaDia1;

function tratarDatosObtenidos(viaje) {

  let algunDatoHaCumplidoMiCondicion = false;
  let misDatos = '';
  //Convertimos al tipo Date la fecha recogida de la url
  var diaAcomprobar = new Date(fechaId);
  //Recorremos el listado obtenido del JSON para quedarnos solo con los objetos que queremos, en este caso la
  // muestra será un elemento por día
  for (let key in viaje.list) {
    //Obtengo el elemento del listado a iterar en esta vuelta del bucle
    let item = viaje.list[key];
    //Convertimos a tipo date la fecha que queremos comprobar.establecemos a 0 las horas minutos y segundos para comparar las fechas
    let fechaAComprobarEnObjeto = new Date(item.dt_txt).setHours(0, 0, 0, 0);
    let diaAcomprobarSinHora = diaAcomprobar.setHours(0, 0, 0, 0);
    //Comparamos si las fechas con coincidentes
    if (diaAcomprobarSinHora === fechaAComprobarEnObjeto) {
      let temperaturas = Math.floor(item.main.temp); //! : HE AÑADIDO EL MATH.FLOOR PARA QUE SALGAN SIN DECIMALES
      let fechas = item.dt_txt;
      let descripcion = item.weather[0].description;
      let icono = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

      // contenido.innerHTML = `Tu viaje a ${destinoId} comienza el ${fechaToStringES(fechaId)}<br> y esté será tu pronóstico del tiempo :<hr>`;
      //!cambios de carlos------------------------------------------------------------
      destino.innerHTML = `${ destinoId.toUpperCase()}`; //!TO UPPER CASE
      //!-----------------------------------------------------------------------------


      misDatos +=
        `
      <div class="col-6 mb-5">
      <div class="row justify-content-center">
        <div class="col">
          <div class="container-tiempo round-10 bg-">
            <div class="row">
              <div class="col text-center txt-trav-small ">
                <p>${fechaToStringES(fechas)}</p>
              </div>
            </div>
            <!-- -->
            <div class="row">
              <div class="col d-flex justify-content-center flex">
                <p class="txt-trav-big" style="font-size:5em;">${temperaturas}º</p>
                <img src='${icono}' class="icono-tiempo">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      `

      // misDatos += fechaToStringES(fechas) + '<br>' + temperaturas + ' Cº' + '<br>' + descripcion + '<br><img src=' + icono + '>' + '<hr>';
      //pinta el contenido 
      contenido.innerHTML = misDatos;
      //Como ya tengo un elemento del día que buscaba, añado un día a la fecha a comprobar un día
      diaAcomprobar.setDate(diaAcomprobar.getDate() + 1);

      if (!algunDatoHaCumplidoMiCondicion) {
        temperaturaDia1 = temperaturas;
      }
      algunDatoHaCumplidoMiCondicion = true;
    }
  }
  if (!algunDatoHaCumplidoMiCondicion) {
    window.location.href = "/DatesError.html"

  } else {
    logicaFrioCalor();
  }
}





function obtenerDatos(destinoParam) {

  fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=${destinoParam},ES&units=metric&lang=es&APPID=dcad6bd0f350bf23372a42cce21f47da`)
    .then(data => data.text()) //Hacemos una promesa de que lo haga y con data text, lo convertimos a txt
    .then(data => {
      let viaje = JSON.parse(`${data}`);
      tratarDatosObtenidos(viaje);
    });
}

//TODO :ACORDARSE DE DESCOMENTAR ESTO 

function traer() {
  // Estoy comprobando que haya un destino introducido, y si lo hay ...fetch
  if (destinoId == "" || destinoId == null) {
    alert('introduce un destino válido');
  } else {
    obtenerDatos(destinoId);
  }
}



//Comprobacion de temperatura para mostrar maleta
function comprobarTemperatura(temperaturaGrados) {
  if (temperaturaGrados >= 10) {
    return "calor";
  } else {
    return "frio"
  }
}



function logicaFrioCalor() {
  var temperaturaString = comprobarTemperatura(temperaturaDia1);
  let url = `http://127.0.0.1:5500/appLook.html?temperatura=${temperaturaString}`;

  const user = JSON.parse(localStorage.getItem('loguedUser'));
  let userGender = user.gender;

  if (userGender) {

    url += `&gender=${userGender}`;
  }

  //Botón lleva  a una nueva url de maleta destino con el parametro de clima
  document.getElementById("doItMaleta").addEventListener("click", function () {
    window.location.href = url;
  });
}


traer();





//Sacar  logica de usuarios  para el gender y su function
//El mensaje de no leemos el futuro
//Añadir la lista a la pagina de appLook
//Maquetar appTiempo.