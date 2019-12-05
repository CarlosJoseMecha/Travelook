//------------------------
/* var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
var url = new URL(url_string);
var a = url.searchParams.get("a");
console.log(a); */

//------------------------------

let url_destino = "https://example.com/?name=Jonathan%20Smith&age=18";
let url2 = new URL(url_destino);
let nombre = url2.searchParams.get('name');
console.log(nombre);


/* ${temperatura} */
///---------------------------------------------
//let temperatura = document.querySelector('#temperatura');

let url_tipomaleta = `http://127.0.0.1:5500//appJSON_prueba.html?&temperatura=20&select=mujer#`;
let url = new URL(url_tipomaleta);
let temperatura = url.searchParams.get('temperatura');
let sexo = url.searchParams.get('sexo');
let clima // calor-frio

console.log(temperatura);


let tipoLook = "mujer";
let clima2 = "frio";
///json/hombre/calor/img/1.jpg"
//Funcion que cambia el json
function cambiarJSON(temperatura, sexo) {
    document.querySelector('#mostradorMaletas').src = `{../json/${tipoLook}/${clima2}/img/1.jpg`;;


}











//Funcion que busca la casuistica de los looks segun parametros
function mostrarLook(temperatura, sexo) {
    switch (temperatura) {
        case hombreCalor:
            return cambiarJSON(temperatura, sexo, document.querySelector('#mostradorMaletas').src = "https://www.w3schools.com/jsref/jsref_switch.asp");


        default:
            return false;
    }
}
mostrarLook();















/* 

if (temperaturaSelec >= 18) {
    alert("hace caloooo")
}
else {
    alert("hace frio");
}
 */

//recogemos el parametro de sexo

/* let sexo = document.querySelector(selectSex);
let temp = document.querySelector(temperatura); */
//alert(url_tipomaleta);





















///----------------------------------------------------------

//Función para traer el JSON DE LOS LOOKS ----------------------------------
var hombreCalor = [];
var hombreFrio = [];
var mujerCalor = [];
var mujerFrio = [];



var xhttp = new XMLHttpRequest(); //Pedimos una nueva request 
xhttp.onreadystatechange = function () {//cuando el servidor este listo
    if (this.readyState == 4 && this.status == 200) {//si el servidor es el estado 4 y estatus 200 , si todo es ok
        //Transformamos
        var response = JSON.parse(xhttp.response); // Response es el JSON, luego lo parseo a objeto para que JS lo entienda, y lo meto en variable

        for (i = 0; i < response.lenght; i++); {
            var posicion = 0;
            hombreCalor = response.hombreCalor;
            var output = '';
            output = `< img src = "${hombreCalor[i].name}" alt = "" > `
        }

        ///Pintamos  el primer modelo
        document.getElementById('mostradorMaletas').innerHTML = output;
    }

    ///-----------------btn que trae más modelos del mismo sexo y clima

    document.querySelector('.btn-roll').addEventListener('click', function otroModelo() {
        // numero ramdom
        var dado = Math.floor(Math.random() * hombreCalor.length); //se pone así y no 7 , po que si no daca el indice 0, y en las img no lo tenemos asi

        //Muestro el numero radom con la img, haciendo el truco de 0 y 1
        var contenedorCaja = document.querySelector('#mostradorMaletas');
        document.getElementById('mostradorMaletas').src = `${hombreCalor[dado].name}`
        //document.getElementById('mostradorMaletas').innerHTML = output = `< img src = "${hombreCalor[dado].name}" alt = "" > `
        //mostradorMaletas.src = `< img src = "${dado}" alt = "" > `;
    });

};
/*  El metodo open: estpecifica la solicitud , y especificamos si 
-Por GET o POST
-Archivo Text, ph, xml, json, etc... 
-true/ false: metodo de envio / es true = asincrono/*/

xhttp.open("GET", "/json/hombre/calor/prendas.json", true);
xhttp.send();
