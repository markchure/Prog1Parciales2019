/*Realizar en JS una función de nombre "sinCeros" que recibe dos números naturales mayores
que 0 y retorna su suma sin los ceros.
Ejemplos: si los números fueran 14 y 6, la suma da 20 y retorna 2.
para otros números, si la suma da 2000308, retorna 238;
si la suma es 1900, retorna 19;
si la suma es 15432, retorna 15432.
Agregar la invocación de la función para los números 12800 y 42, mostrando el resultado en
consola.
function sinCeros (dato1, dato2)*/
function sinCeros(dato1, dato2) {
  let suma = dato1 + dato2;
  let resulado = "";

  while(suma >0){
    //Devuelve el último digito
    let dig = suma % 10;
    if (dig>0){
      //Como vamos obteniendo los digitos de derecha a izquierda al concatenar debemos invertir las variables
      resulado = dig + resulado;
    }
    suma = (suma - dig)/10;
  }

  return resulado;
}

let dato1 = -1
while (!(dato1 > 0)) {
  dato1 = parseInt(prompt("Ingrese el primer número natural: "));
}

let dato2 = -1
while (!(dato2 > 0)) {
  dato2 = parseInt(prompt("Ingrese el segundo número natural: "));
}

console.log(sinCeros(dato1,dato2));
