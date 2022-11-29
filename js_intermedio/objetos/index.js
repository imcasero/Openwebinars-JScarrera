//Crear un objeto de jugadorcon la propiedad de fuerza , que sera 1, con un metodo que incremenara automaticamente la fuerza
//Crear una funcion que nos devuelva la fuerza del jugador

//CREO EL OBJETO
var jugador = {
  name: "jugador",
  fuerza: 1,

  //tambien se puede crear la funcion de la siguiente forma
  verfuerza: function () {
    console.log(this.fuerza);
  },

  showStrong() {
    console.log(this.name + " tiene una fuerza de " + this.fuerza);
  },
  masFuerza() {
    this.fuerza = this.fuerza + 1;
  },
};
jugador.showStrong();
jugador.masFuerza();
jugador.showStrong();
jugador.verfuerza();
