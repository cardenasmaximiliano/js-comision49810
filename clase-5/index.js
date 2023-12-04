/**
objetos => estructura de datos que almacenan informacion 
a traves de clave y valor; 
un objeto puede guardar cualquier tipo de dato

strings 
numeros
booleans
*/

// let nombre = "maximiliano";
// let edad = 31;
// let estadoCivil = "soltero";
// let hinchaDeRiver = true; 


//estructura de objeto

// let persona = {
//     //clave : valor,
//     nombre: "maximiliano",
//     edad: 31,
//     estadoCivil: "soltero",
//     hinchaDeRiver: true
// };

// console.log(persona);
// console.log(persona.nombre);
//nos ayuda el objeto a no escribir tantas variables y agrupar informacion que este relacionada.

// let persona = {
//     //clave : valor,
//     nombre: "",
//     edad: "",
//     estadoCivil: "",
//     hinchaDeRiver: ""
// };

// persona.nombre = "adrian";

// console.log(persona.nombre);

//

// let persona = {
//     nombre:"",
//     apellido: "pepito"
// }

// persona.nombre = prompt("ingresa nombre");

// console.log(persona.nombre);
// console.log(persona);

//objetos constructores o funcion constructora

//es una funcion que se utiliza para crear instancias de obejtos. definen y crean objetos con propiedades y metodos. 

/** 
funcion NombreFuncion (params/parametros){

    //this es una palabra clave, que refiere al contexto actual en el que se 
    //esta ejecutando el objeto.(un objeto que se esta creando)

    this.EltipoDeDatoAguardar

}

    variable objetoAcrear = new Objeto ("argumentos a pasar")

 */

//lo que se pasa en el objeto constructor son parametros
// function Productos(id,nombre, precio,cantidad){

//     this.id = id,
//     this.nombre = nombre,
//     this.precio = precio,   
//     this.cantidad= cantidad
// }

// //lo que se pasa en la creacion de objetos nuevos se llama argumento
// const PRODUCTO_1 = new Productos(1,"arroz",1400,2);
// const PRODUCTO_2 = new Productos(2,"harina",1100,1);
// console.log (PRODUCTO_1, PRODUCTO_2);

//METODOS Y OPERACIONES CON OBJETOS

/*
    Cuando hablamos de metodos y operacion decimos que son accioenes o funciones que se pueden realizar dentro del
    objeto o en sus propiedades
*/

// let Coche = {
//     marca: "toyota",
//     modelo: "corolla",
//     //podes usar una clave para alojar una funcion
//     arrancar: function (){
//         console.log ("el coche arranca...")
//     }
// };

// Coche.arrancar();

//ejemplo de productos con iva

// const IVA = 1.21;

// function Producto(nombre, precio, stock){

//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//     this.precioConIva= function(){ 

//         let precioFinal = this.precio * IVA;
//         return "$"+ precioFinal;
//     }
// }

// const PROD1 = new Producto("arroz",150,1);

// PROD1.precioConIva();

//metodos de objetos

// let nombre = prompt("ingresa tu nombre").toLowerCase();

// console.log(nombre);


//OPERADOR IN Y FOR IN

/**
 * operador in y 
 * bucle for..in
 * 
 * sirven para iterar sobre propiedades de los objetos

    
 */

//operador in => nos sirve para verificar si una propiedad especifica existe dentro de un objeto.
//si es verdadero devuelve true, en caso que no devuelve false.

// let persona ={
//     nombre: "juan",
//     edad: 20,
//     profesion: "abogado"
// };

// if ("pedro" in persona ){
//     console.log ("la propiedad nombre existe")
// }else{
//     console.log("esto no esta")
// }


//for in  => bucle que nos va a servir para iterar sobre las propiedades de un objeto. 


// for ( let propiedad in persona){
//     console.log( propiedad + ":" + persona[propiedad]);
// }

//clases 

//las class en js nacieron en ecma6 , proporciona manera mas estructurada y esta orientada a objetos. 

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log (`hola chicos soy ${this.nombre} y tengo ${this.edad}`)
    }

}

//creamos las instancias de la class

const persona1 = new Persona("juan", 10);
const persona2 = new Persona("claudia", 18);


console.log(persona1);
persona1.saludar();