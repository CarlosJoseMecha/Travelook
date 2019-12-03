//Función para traer el JSON DE LOS LOOKS ----------------------------------
var hombreCalor = [];



var xhttp = new XMLHttpRequest(); //Pedimos una nueva request 
xhttp.onreadystatechange = function () {//cuando el servidor este listo
    if (this.readyState == 4 && this.status == 200) {//si el servidor es el estado 4 y estatus 200 , si todo es ok
        //Transformamos
        var response = JSON.parse(xhttp.response); // Response es el JSON, luego lo parseo a objeto para que JS lo entienda, y lo meto en variable

        for (i = 0; i < response.lenght; i++); {
            var posicion = 0;
            hombreCalor = response.hombreCalor;
            var output = '';
            output = `<img src="${hombreCalor[i].name}" alt="">`
        }

        ///Pintamos  el primer modelo
        document.getElementById('mostradorMaletas').innerHTML = output;
    }

    ///-----------------btn

    document.querySelector('.btn-roll').addEventListener('click', function otroModelo() {
        // numero ramdom
        var dado = Math.floor(Math.random() * hombreCalor.length); //se pone así y no 7 , po que si no daca el indice 0, y en las img no lo tenemos asi

        //Muestro el numero radom con la img, haciendo el truco de 0 y 1
        var contenedorCaja = document.querySelector('#mostradorMaletas');
        document.getElementById('mostradorMaletas').src = `${hombreCalor[dado].name}`
        //document.getElementById('mostradorMaletas').innerHTML = output = `<img src="${hombreCalor[dado].name}" alt="">`
        //mostradorMaletas.src = `<img src="${dado}" alt="">`;
    });

};


xhttp.open("GET", "/json/hombre/calor/prendas.json", true);
/*  El metodo open: estpecifica la solicitud , y especificamos si 
-Por GET o POST
-Archivo Text, ph, xml, json, etc... 
-true/ false: metodo de envio / es true = asincrono/*/
xhttp.send();
