/* function Viaje(nombre, fecha, estadoMaleta) {
    this.name = nombre;
    this.fecha = fecha;
    this.maleta = estadoMaleta;


}


//let viaje1 = new Viaje("Nueva York", 10 - 20 - 2019, "completa");

//




function rellenaCard() {
    let cards = document.getElementsByClassName('card-animation');
    //bucle para recorrer todas las cards
    for (var i = 0; i < cards.length; i++) {
        console.log(cards[i]);
        cards[i].style.backgroundColor = "PINK";
        cards[i].style.fontStyle = "oblique";
        document.getElementsByClassName('card-title').write = ("tu viaje");
    }
}

rellenaCard();

 */


$("button").click(function () {

    let contador = $('.card-model').length + 1;
    let bloqueAdd = ('<div class="col-4">\
        <div class="card card-animation-'+ contador + ' round-10">\
                <img src="assets/img/viajes/planificarViaje.jpg" class="card-img-top overlay-card" alt="...">\
                    <div class="card-body center">\
                        <h5 class="card-title txt-trav-secondary-dark">NUEVO VIAJE</h5>\
                        <p class="card-text txt-trav-dark">Prepara todos los detalles</p>\
                        <a href="#" class="btn btn-block btn-trav-purple" data-toggle="modal"\
                        data-target="#nuevoViajeModal">Planear Viaje</a>\
                    </div>\
                        </div>\
        </div> ');
    $('#card-container').append(bloqueAdd);
});



