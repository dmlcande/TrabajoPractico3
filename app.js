/* 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let listameses = meses.join ("<br>" + "•");

document.write("Lista de Meses"+ "<br>" + listameses);


/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let arrayCiudad = [];
do
{
    let ciudad = prompt("Escriba una ciudad")
    arrayCiudad.push(ciudad);
}
while (confirm ("Quiere seguir ingresando?") == true);

document.write("El arreglo tiene " + arrayCiudad.length + " elementos" + "<br> <br>");

document.write("Elemento 1er posicion: " + arrayCiudad[0] + "<br>");

document.write("Elemento 3ra posicion: " + arrayCiudad[2] + "<br>");

document.write("Elemento ultima posicion: " + arrayCiudad[arrayCiudad.length - 1] + "<br>");

arrayCiudad.push("Paris");

document.write("Elemento ultima posicion añadido: " + arrayCiudad[arrayCiudad.length - 1] + "<br> ");

document.write("Elemento 2da posicion: " + arrayCiudad[1] + "<br>");

arrayCiudad.splice(1, 1, "Barcelona");

document.write("Elemento 2da posicion añadido: " + arrayCiudad[1] + "<br> <br>")

let lista = arrayCiudad.join("<br>"+"•" );
document.write("Arreglo de Ciudades" + "<br>"  +"•"+ lista);


/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.


let apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0];

const numeroAleatorio = function () {
    let numero = Math.floor((Math.random())*6 + 1);
    return numero;
}

const suma = function () {
    let dado1 = numeroAleatorio();
    let dado2 = numeroAleatorio();
    let suma = dado1 + dado2;
    return suma;
}

for (let i = 1; i <= 50 ; i++) {
    let resultado = suma();
    switch (resultado) {
        case 2:
            apariciones[2]++;
            break;
        case 3:
            apariciones[3]++;
            break;
        case 4:
            apariciones[4]++;
            break;
        case 5:
            apariciones[5]++;
            break;       
        case 6:
            apariciones[6]++;
            break;
        case 7:
            apariciones[7]++;
            break;
        case 8:
            apariciones[8]++;
            break;
        case 9:
            apariciones[9]++;
            break;     
        case 10:
            apariciones[10]++;
            break;
        case 11:
            apariciones[11]++;
            break;
        case 12:
            apariciones[12]++;
            break;
    }
}

console.log(apariciones);

/* Otra forma de mostrar el resultado:
for (let i = 2; i < apariciones.length; i++) {
  console.log(`al sumar los dados 50 veces, elresultado ${i} me dio ${apariciones[i]}veces`);
}     */


/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. 

Paso a paso:
Hacer una funcion donde pase como parametro un numero entero. 
Hacer que la funcion devuelva como resultado una cadena de texto que indique si el numero es par o impar.
Mostrar por pantalla el resultado de la funcion.


const parImpar = function (numInt) {
    if (numInt % 2 === 0) {
        console.log(`El numero ${numInt} es par.`);
    } else {
        console.log(`El numero ${numInt} es impar.`);
    }
}

// Hacerlo pero pidiendo un prompt */

/* 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. 

Paso a paso:
Crear una funcion que tenga como argumento una cadena de texto.
Determinar si la cadena esta formada por mayusculas, solo por minusculas o por una mezcla de ambas.


let cadenaTexto = prompt("Escriba un texto")

const info = function (cadena) {
    if(cadena == cadena.toLowerCase()){
        console.log(`Las letras estan en minuscula`)
    } else if(cadena == cadena.toUpperCase()){
        console.log(`Las letras estan en mayuscula`)
    } else {
        console.log(`Las letras estan en minuscula y mayuscula`)
    }
}

info (cadenaTexto);

/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)



let ladoA = parseInt(prompt("Ingrese el lado A de un rectangulo"));
let ladoB = parseInt(prompt("Ingrese el lado B de un rectangulo"));

const perimetro = function (A, B) {
    let formula = 2*(A+B);
    return formula;
}

alert(perimetro(ladoA, ladoB));


/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. 

Paso a paso:
Pedir que ingrese un numero.
Crear una funcion que muestre una tabla de multiplicar del numero ingresado, solo desde el resultado 1 al 10.
*/

let numerito = parseInt(prompt("Ingrese un numero"));

const tabla = function (num) {
    let multiplicacion
    for (let i = 1; i <= 10; i++) {
        multiplicacion = num * i;
        console.log(`${num} x ${i} es igual a ${multiplicacion}`);
    }
}

tabla(numerito)