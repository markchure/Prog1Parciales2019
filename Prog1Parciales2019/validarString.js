/*Leer un string que representa un párrafo. Indicar si es válido. Se considera válido si tiene
más de 20 caracteres y cada vez que hay una coma, el siguiente carácter es un espacio.
Ejemplos:
Se ingresa: “Este es el texto. Para revisar, mañana sin falta.” Es válido
Se ingresa: “Esta frase aunque larga,no es ok, opss” No es válida
Se ingresa: “Frase larga y también incorrecta,” No es válida*/
function parrafoIsValid(parrafo) {
  let isValid = true;

  if (parrafo.length<=20) {
    isValid = false;
  }
  else{
    for (let i = 0; i < parrafo.length; i++) {
      if (parrafo.charAt(i) == ",") {
        if (i < parrafo.length - 1 && parrafo.charAt(i + 1) != " "){
            isValid = false;
            break;
        }
        else{
          isValid = false;
          break;
        }
      } 
    }
  }

  return patternMatcher(isValid);
}

function patternMatcher(isValid){
  let message = "";

  if(isValid){
    message = "es valido";
  }
  else{
    message = "no es valido";
  }

  return message;
}

let parrafo = prompt("Ingrese un párrafo: ");
console.log ("El párrafo '" + parrafo + "' " + parrafoIsValid(parrafo));











