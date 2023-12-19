// const personas = [
//     { nombre: "Juan", edad: 30 },
//     { nombre: "María", edad: 25 },
//     { nombre: "Luis", edad: 35 }
//   ];

// function calcularEdadesPromedio(arrayPersonas){
//     let sumaEdades = 0;

//     for(let i = 0; i < arrayPersonas.length; i++){

//         sumaEdades += arrayPersonas[i].edad;
//     }
//     const PROMEDIO = sumaEdades / arrayPersonas.length;
//     return PROMEDIO;
// }

// const promedioEdades = calcularEdadesPromedio(personas);
// console.log("el promedio de edades es: " + promedioEdades);

//2
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filtrarNumerosPares(arrayNumeros){
//     const numerosPares =[];

//     for(let i =0; i < arrayNumeros.length; i++){
        
//         if(arrayNumeros[i] % 2 === 0){
//             numerosPares.push(arrayNumeros[i]); 
//         }
//     }
//     return numerosPares;
// }

// const NUMEROS_PARES = filtrarNumerosPares(numeros);

// console.log("los numeros son:" + NUMEROS_PARES);


//


///filter lo podemos utilizar en caso de que un elemento cumpla con una condicion dada


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filtrarNumerosPares(array) {
  
//   const numerosPares = array.filter(numero => numero % 2 === 0);
//   return numerosPares;
// }

// const numerosPares = filtrarNumerosPares(numeros);

// console.log(numerosPares);

// const estudiantes =[
//     {nombre:"fran", calificacion:50},
//     {nombre:"claudia", calificacion:85},
//     {nombre:"jesus", calificacion:62},
//     {nombre:"benit0", calificacion:10},
//     {nombre:"josua", calificacion:60},
// ]

// function encontrarEstudiantesAprobados(arrayDeEstudiantes){
//     const aprobados = [];
    
//     for (let i = 0; i < arrayDeEstudiantes.length; i++){
//         if( arrayDeEstudiantes[i].calificacion >= 60){
//             aprobados.push(arrayDeEstudiantes[i]);
//         }

//     }
//     return aprobados;
// }

// const estudiantesAprobados = encontrarEstudiantesAprobados(estudiantes);
// console.log(estudiantesAprobados);


///

// let estudiantesAprobados = []

// const ESTUDIANTES = [

//     { nombre: "Francisco", calificacion: 80 },
//     { nombre: "Pedro", calificacion: 30 },
//     { nombre: "Carlos", calificacion: 55 },
//     { nombre: "Juan", calificacion: 76 },
//     { nombre: "Esteban", calificacion: 23 },
//     { nombre: "Alexandro", calificacion: 90 },

// ];


// function alumnosAprobados(recorridoEstudiantes) {
//     for (const recorridoEstudiantes of ESTUDIANTES) {
//         if (recorridoEstudiantes.calificacion > 60) {
//             estudiantesAprobados.push(recorridoEstudiantes)
//         }
//     }
//     return estudiantesAprobados
// }

// console.log(alumnosAprobados(ESTUDIANTES))


//  const palabras = ["manzana","banana","manzana","naranja","banana","frutilla","frutilla"];

// function contadorDePalabras(arrayPalabras){

// //     //crear un objeto para almacenar el conteo de palabras
//      const conteo= {};
    
// //     //iterando sobre el array de palabras
//      for(let i=0; i < arrayPalabras.length; i++){
// //         //obtener la palabra actual
//        const palabra = arrayPalabras[i]

// //         //verificar si la palabra dentro de conteo ya existe
//         if(conteo[palabra]){
// //             //si se repite incrementa en uno
//             conteo[palabra]++;

// //             //sino se toma como 1 
//         } else {
//             conteo[palabra] = 1;
//         }

//      }   


//     return conteo;
// }

// const cuantasVeces = contadorDePalabras(palabras);
//  console.log(cuantasVeces);


// const palabrasIngresadas = []

//   for(i=0; i< 5; i++){
//     let palabra = prompt ("ingrese su palabra");
//     palabrasIngresadas.push(palabra)
//   }


// function contarPalabras (arrays){
//     const conteoPalabras = {};
//     arrays.forEach(palabra => {
//         if (conteoPalabras[palabra]){
//             conteoPalabras[palabra]++
//         } else {
//         conteoPalabras[palabra]=1
//         }
//     });
//     return conteoPalabras
// }

//  const conteo =  contarPalabras(palabrasIngresadas);
// console.log (conteo)


// crear un objeto para almacenar el conteo de palabras
const PALABRAS = ["manzana", "banana", "manzana", "naranja", "banana", "frutilla"];

// iterando sobre el array de palabras
function contadorDePalabras(arrayPalabras){
    const CONTEO = {};

    for(let i=0; i<arrayPalabras.length; i++){
        // obtener la plabra actual
        const PALABRA = arrayPalabras[i];
        // verificar si la palabra dentro de conteo ya existe
        if(CONTEO[PALABRA]){
            CONTEO[PALABRA]++;
        } else {
            CONTEO[PALABRA] = 1;
        }
    }
    return CONTEO;
}

const CUANTAS_VECES = contadorDePalabras(PALABRAS);
console.log(CUANTAS_VECES);