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


/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación. */

