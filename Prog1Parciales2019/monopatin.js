/*1) (Nivel básico, 7 puntos)
Se tiene información de los recorridos de los monopatines eléctricos. Hasta que el usuario lo
indique, se ingresará número de monopatín (se asume positivo). Debe verificarse que cada
número sea mayor que el previo. Si no está correcto, se vuelve a solicitar el dato hasta que lo
esté. Por cada número de monopatín, se ingresa la cantidad de usos que tuvo ese
monopatín y el total de km recorridos.
Al final del proceso de todos los datos, mostrar el total de km entre los monopatines que
fueron usados más de 20 veces.*/
let numeroMonopatin = 0;
let numeroMonopatinPrevio = numeroMonopatin;
let cantidadUsos = 0;
let totalKmRecorridos = 0;
let aux = "";

while (!(aux == "fin")) {
  aux = prompt("Ingrese número de monopatin: ");

  if (!isNaN(aux)){
    numeroMonopatin = parseInt(aux);
  
    if (numeroMonopatin > numeroMonopatinPrevio){
      cantidadUsos = parseInt(prompt("Ingrese la cantidad de usos: "));
      totalKmRecorridos = parseInt(prompt("Ingrese el total de Km recorridos: "));
  
      if (cantidadUsos > 20){
        console.log("Número monopatin: " + numeroMonopatin + " | Cantidad de usos: " + cantidadUsos + " | Total de km recorridos: " + totalKmRecorridos);
      }
  
      numeroMonopatinPrevio = numeroMonopatin;
    }
  }
}