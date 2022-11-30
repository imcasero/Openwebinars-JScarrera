//Mostrar solo los numeros pares el array

var array = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 == 0) {
    console.log(array[index]);
  }
}
//sumar los valores de array
var resul = 0;
for (j = 0; j < array.length; j++) {
  resul += array[j];
}
console.log('El resultado es ' + resul);