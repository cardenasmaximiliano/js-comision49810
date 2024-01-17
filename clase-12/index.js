//template literals

// let nombre = "pedro";


// console.log("hola me llamo " + nombre + "soy argentino");


// //sugar sintax 
// console.log(`hola mi nombre es ${nombre} y soy argentino`);


// //operador ternario o operador de condicion

// // condicion ? valor_si_verdadero : valor_si_falso; 

// let edadCliente = 8;

// if( edadCliente >= 18 ){
//     //retorna verdadero
//     console.log("es mayor de edad")
// }
// else{
//     //retorna falso
//     console.log("No, es mayor de edad")
// }

// edadCliente >=18 ? console.log("es mayor") : console.log("es menor");


// //operador logico and 

// let nombreCliente = "hernan";

// nombreCliente === "hernan" && alert ("bienvenido Hernan");


// //operador logico or

// let juan = prompt ("ingrese el nombre");

// console.log ( juan || "invitador");


//operador nullish coalescing

// const datos = {

//     nombre: null,
//     edad:25,
//     ciudad: undefined

// };

// const nombre = datos.nombre ?? 'nombre no disponible';
// const edad = datos.edad ?? 'edad no disponible';
// const ciudad = datos.ciudad ?? 'ciudad no disponible';

// console.log(nombre);
// console.log(edad);
// console.log(ciudad);


// //acceso condicional de un objeto

// console.log( datos?.nombre || "no existe" );


//desestructuracion de objetos 

//expresion de js que nos permite descomponer una estructura de datos, objeto o arrays, en variables mas chicas y manejables.

//hace mas facil el trabajar con datos estructurados y dar variables mas concisas.


// const persona = {
//     nombre: "claudia",
//     edad: 30,
//     ciudad: "buenos aires"
// }

// const{nombre,edad,ciudad} = persona;

//podemos declararlos con const o let. Adentro de las llaves podemos poner, 
//el nombre delas propiedades que queremos extraer. Y en memoria se crean esas variables a las cuales se quiere acceder. 

// const gato={

//     duenio: "juan",
//     raza: "persa",
//     edad: 8,
//     direccion:{
//         calle: "valencia",
//         numero: 1234,
//         ciudad: "mar del plata"
//     }
// }

// let{ duenio, raza, edad:edadGato, direccion:{calle,numero,ciudad}}= gato; 

// console.log(edadGato)

//desestructuracion por parametros
// const alumno = {
//     nombre: " pedro",
//     edad: 15,
//     ciudad:"mar del plata"
// }


// // function mostrarDatos(objeto){
// //     console.log( `hola mi nombre es ${objeto.nombre} y tengo ${objeto.edad} años `)
// // };

// // mostrarDatos(alumno);

// function mostrarDatos({nombre, edad,ciudad}){
//     console.log( `hola mi nombre es ${nombre} y tengo ${edad} años y mi ciudad es ${ciudad} `)
// }
// mostrarDatos(alumno);


// const frutas = ['manzana','pera', 'banana'];

// const [fruta1, fruta2, fruta3] =frutas;


// console.log(fruta1);
// console.log(fruta2);
// console.log(fruta3);

//funcion que retorna datos de las personas 

function obtenerInformacionPersona(){
    return{
        nombre:'hernan',
        edad:28,
        direccion:{
            ciudad: "buenos aires",
            codigoPostal: 1245
        }
    }

}

//isp de desestructuracion para que nos de la informacion.

const {nombre, edad:edadPersona, direccion:{ciudad, codigoPostal}} = obtenerInformacionPersona();

console.log(`nombre:${nombre}`)
console.log(`edad:${edadPersona}`)
console.log(`ciudad:${ciudad}`)
console.log(`codigo postal:${codigoPostal}`);