//creamos una variable que almacene el objeto
var fecha = new Date();

console.log(fecha);
var año = fecha.getFullYear(); //retorna el año
console.log(año);
var mes = fecha.getMonth(); //enero =>0 febreo =>1
var dia = fecha.getDate(); //el dia
console.log(mes + 1 + " " + dia);
