//ARRAY

/**
 un array es una estructura de datos qye utilizamos para alamacenar una coleccion de valores.
 los valores pueden ser: strings, numbers, objetos, otros arrays y funciones 
/ */

// let arrayString = ["a", "b", "c", "d", "e"];
// let arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11];
// let arrayBooleans = [true, false, false, true];
// let arrayEnsalada = ["a",1,true,"bokee"];


//cuando llamamos a un array aparece el concepto de indice y valor
//el indice va a depender de en que posicion nosotros escribimos el dato dentro del array.
// //todo array inicia en 0 como indice. 

// console.log(arrayString);

// let personas = ["diego", "adrian","hernan","claudia","carlos"];

//console.log(personas[1]);


//tambien podemos recorrer los arrays

// for (let i=1; i< 5; i++){
//     console.log(personas[i]);
// }

//METODOS EN ARRAY

//METODO LENGTH => se utiliza para obtener la cantidad de elementos en un array
// o tambien se utiliza para obtener la longitud de una cadena de texto.

// length nos sirve para obtener el largo de un array.



// let cantidadDePersonas = personas.length;

// console.log("la cantidad de personas en el array: " + cantidadDePersonas);

// //aplicado a strings

// let texto = "chicos estudiando js";
// let longitudTexto = texto.length;
// console.log (longitudTexto);

//push : se utiliza para agregar uno o mas elementos al final del array

// estudiantes.push("jose");

// console.log(estudiantes);

// console.log(estudiantes[5]);


//pop : es un metodo que elimina el ultimo elemento de un array.

//para eliminar un producto dentro del array.


// let elementoEliminado = estudiantes.pop();
// console.log(elementoEliminado);
// estudiantes.pop();
// console.log(estudiantes);


//shift: elimina el primer elemento de un array. 

// estudiantes.shift();
// console.log(estudiantes);


//splice => se utiliza para modificar el contenido de un array eliminando o reemplzando elementos existenetes
//o agregado elementos nuevos

// let numeroSplice = estudiantes.splice(0,2);
// // estudiantes.splice(indice, nAeliminar);

// console.log(numeroSplice);
// console.log(estudiantes);

//agregar elementos con splice => se indica el indice donde queremos agregar elementos, y pone un 0;
//si queremos reemplazar => indicamos el indice y ponemos los LaCantidadAreemplazar
//seguido de los datos

// estudiantes.splice(2,2,"maxi","alessio");

// console.log(estudiantes);


//join => convierte los elementos de un array en una cadena de texto y los une utilizando el separador que le indiquemos

// let arrayJoin = estudiantes.join(" ");
// console.log(arrayJoin);

//concat => se utiliza para combinar dos o mas arrays en uno nuevo

// let nuevosEstudiantes = estudiantes.concat(["maxi","alessio","hernan"]);

// console.log(nuevosEstudiantes)

//slice => crea una copia de un subconjunto de elementos de un array.

// let subconjunto = estudiantes.slice(2,4);

// console.log(subconjunto);

//indexOf => busca la primera aparicion de un elemento en un array y devuelve su indice. 


//let busquedaDeAlumno = estudiantes.indexOf("adrian");
//console.log(busquedaDeAlumno);

//includes => verifica si un array contiene un elemento especifico,
// en caso de que lo contenga, da verdadero en casoo que no da falso

// let includePesona = estudiantes.includes("maxi");
// console.log(includePesona);

// reverse => invierte el orden de los elementos en un array. 

// let estudiantes = ["diego","hernan","claudia","carlos","adrian", "adrian"];

// estudiantes.reverse();

// console.log(estudiantes);

//array de objetos => cada elemento en un array es un objeto con sus propiedades y valores

const PERSONAS = [
    
    {nombre:"juan", edad:30},
    {nombre:"maria", edad:28},
    {nombre:"jose", edad:25}
]

PERSONAS.push({nombre:"pedrito",edad:15});

console.log(PERSONAS);


//for ... of es un estructura de control de flujo. 

let arrayFrutas = ["manzanas","pera","naranja"];

for (const recorridoIndice of arrayFrutas){
    console.log(recorridoIndice);
}

const productos = [
    
    {nombre:"caramelo", precio:30},
    {nombre:"chicle", precio:28},
    {nombre:"naranju", precio:25}
]

//variable para almacenar el precio total

let precioTotal = 0;

//calcular el precio total a traves de un for .. of 

for(const recorridoProducto of productos){

     precioTotal += recorridoProducto.precio;
    }
    
    console.log("el precio total de tu compra es:" + precioTotal);
