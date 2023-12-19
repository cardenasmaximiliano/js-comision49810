//ejemplo de abstraccion

//sin abstraccion
// let ancho = 5;
// let altura = 10;
// let area = ancho * altura;
// console.log("area de rectangulo" + area);


//abstraccion mediante funciones

// function calcularAreaRectangulo(ancho, altura){
//     return ancho * altura;
// }

// let ancho = 5;
// let altura = 10;
// let area = calcularAreaRectangulo (ancho,altura);

//funciones de orden superior => HOF , ES UNA FUNCION QUE TOMA UNA O MAS FUNCIONES COMO ARGUMENTO Y/O DEVUELVE UNA FUNCION COMO RESULTADO

//FUNCIONES QUE RETORNAN FUNCIONES 

// function asignarOperaciones (operacion){
//     if(operacion === 'sumar'){
//         return function(numero1,numero2){return numero1+numero2}
//     } else if (operacion === 'restar'){
//         return function(numero1, numero2){return numero1 - numero2
// }}
// }

// let sumar = asignarOperaciones('sumar');
// let restar = asignarOperaciones ('restar');

// //acepta js =>  ""  '' ``


// console.log()
// console.log(restar(5,1));

//funcion por parametro => hace referencia a la capacidad de pasar funciones como argumentos a otras funciones. 

//ejemplo

// function ejecutarOperacion(op, a ,b){
//     return op(a,b);
// }

// //funcion que pueda ser pasada como parametro

// function sumar(x,y){
//     return x+y;
// }

// function restar(x, y){
//     return x- y;
// }

// //utilizando funciones por parametro

// // let resultadoSuma = ejecutarOperacion(sumar, 5, 3);
// // console.log(resultadoSuma);

// let resultadoResta = ejecutarOperacion(restar, 5, 3);
// console.log(resultadoResta);

//funcion flecha => es una sintaxis mas corta


// function suma(a,b){
//     return a+ b;
// }


// const SUMA = (a,b) => a + b;


//forEach => es un metodo de los array, se utiliza para iterar sobre cada uno de los elementos del array y ejecuta una funcion proporcionada para cada elemento

// nombreDeArray.forEach(elemento, indice,array){
    //codigo a ejecutar por cada elemento del array
//}

//ejemplo

// const NUMERO = [1,2,3,4,5];


// NUMERO.forEach(function(numero){
//     const resultado = numero *2;
//     console.log(resultado);
// })

//array de estudiantes

// const ESTUDIANTES = [
//     {nombre: "carlos", edad:25},
//     {nombre: "mili", edad:18},
//     {nombre: "carlos", edad:30},
//     {nombre: "maxi", edad:31},
//     {nombre: "Dani", edad:25}
// ];

//funcion para imprimir mensaje

// function saludarEstudiante (estudiante){
//     console.log(`hola soy ${estudiante.nombre}, y tengo ${estudiante.edad}`)
// }
 

// backticks con alt 96
// "hola soy" + estundiante 

// ESTUDIANTES.forEach(saludarEstudiante);

//find => metodo buscar, nos sirve para encontrar el primer 
//elemento que posee un array siempre y cuando cumpla 
//con una condicion proporcionada por una funcion.

// const EL_MAYOR = ESTUDIANTES.find(function(estudiante){
//     return estudiante.edad > 25; 

// })

// console.log(EL_MAYOR);

//FILTER => metodo de array nos sirve para crear un nuevo array
//con todos los elementos que cumplan con una condicion proporcionada por una funcion

// const PRODUCTOS = [
//     {nombre: 'teclado', precio: 1000},
//     {nombre: 'telefono', precio: 2000},
//     {nombre: 'tablet', precio: 3000},
//     {nombre: 'auriculares', precio: 4000},
// ];

// //solicitar al usuario que indique un precio minimo

// const precioMinimoUsuario = parseFloat(prompt("ingrese el precio minimo que desee:"));

// if(isNaN(precioMinimoUsuario)){
//     console.log("capo pone un precio.");
// } else {
//     //aca le aplicamos el filter
//     const productoFiltrado = PRODUCTOS.filter(function(producto){
//         return producto.precio >= precioMinimoUsuario;
//     });
//     console.log("productos que cumplen", productoFiltrado);
// }

//some => metodo de array que verifica si al menos 1 elmeento 
//en el array cumple con una condicion proporcionada por una 
//funcion.
//some trabaja con booleanos, me dice verdadero o falso. 

// const NUMEROS = [2,3,10,15,9,7];

// const hayNumeroMayor = NUMEROS.some(function(numero){
//     return numero > 10;

// });

// console.log(hayNumeroMayor);

//map() => crea un nuevo array que contenga solo lo pedido dentro de un funcion.


const PRODUCTOS = [
    {nombre: 'teclado', precio: 1000},
    {nombre: 'telefono', precio: 2000},
    {nombre: 'tablet', precio: 5000},
    {nombre: 'auriculares', precio: 4000},
 ];

// const  nombreMayuscula = PRODUCTOS.map(function(producto){
//     return producto.nombre.toUpperCase();
// })

// console.log(nombreMayuscula);

const porcentajeAumento = 0.1;

const precioAumentados = PRODUCTOS.map(function(producto){
    return{
        nombre: producto.nombre,
        precio: producto.precio *(1+porcentajeAumento)
    }
})

console.log(precioAumentados);
console.log(PRODUCTOS);