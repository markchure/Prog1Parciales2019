/*Leer un string y genere uno nuevo donde cada letra esté repetida según su posición.
Ejemplo:
Lee: “hola”, genera: hoolllaaaa
Lee: “parcial”, genera: paarrrcccciiiiiaaaaaalllllll*/
function repetirSegunPosicion(palabra) {
  let palabraModificada = "";

  //Recprrp cada una de las letras de la palabra
  for (let i = 0; i < palabra.length; i++) {
    //Cantidad de veces que repito la letra
    for (let x = 0; x <= i; x++) {
      palabraModificada = palabraModificada + palabra.charAt(i)
    }
  }

  return palabraModificada;
}

let palabra = prompt("Ingrese una palabra: ");
console.log(repetirSegunPosicion(palabra));



