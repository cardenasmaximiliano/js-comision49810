//reduce => es un metodo que se utiliza para reducir
//elementos de un array a un solo valor. 

let numeros =["a","b","c","d"];

let suma = numeros.reduce(function(acumulador, valor){
    return acumulador + valor;

})

console.log(suma)


//sort => nos va a servir para ordenar un array, los elementos de un array.
//sort modifica el array original. 

let frutas = ["manzana","banana","frutilla"];

frutas.sort();

console.log(frutas);


let estudiantes =[
    {nombre: "juan", edad:30},
    {nombre:"jose",edad:20},
    {nombre:"karol",edad:24},
    {nombre:"karol",edad:21},
    {nombre:"karol",edad:22},
    {nombre:"karol",edad:25},
    {nombre:"karol",edad:26}

];

estudiantes.sort(function(a, b){
    return b.edad - a.edad

});
//si b.edad es mayor que a.edad la diferencia va a dar un numero positivo
//si b.edad es menor que a.edad nos va dar un numero negativo.
//si b.edad es igual que a.edad esto nos va adar 0. 
console.log(estudiantes);


/**********************************************************************************/

//objeto math = es todo para calculos matematicos

/*
 proporciona propiedades y metodos para realizar operaciones matematicas

  */

//math.PI
// console.log(Math.PI);
// console.log(Math.E)

// //metodo min & max

// //min => nos va a devolver el valor mas pequeño entre los numeros proporcionados de un listado

// let minimo = Math.min(76,23,87,88,90,10);
// console.log("el numero minimo es " + minimo);


// //max = > va a devolver el numero mas grande
// let maximo = Math.max(76,23,87,88,90,10);
// console.log("el numero maximo es " + maximo);

// //ceil, florr, round => nos va a servir principalmente en caso de que querramos redondear valores.

// //ceil nos retorna el numero que indiquemos redondeandolo hacia arriba.

// let numeroDecimal = 4.5;

// let numeroCeil = Math.ceil(numeroDecimal);

// console.log(numeroCeil)

// //floor => retorna el numero que le indiquemos redondeando hacia abajo.

// let numeroFloor = Math.floor(numeroDecimal);
// console.log(numeroFloor);

// let numeroRound = Math.round(numeroDecimal);
// console.log(numeroRound)


// //metodo random => da un numero aleatorio entre 0 y 1;

// let numeroAleatorio = Math.random()*50;
// console.log(numeroAleatorio);

//solicitamos al jugador numero y comprobamos si la eleccion del numero coincide con el random

// let eleccionDelJugador = prompt("eligi un numero del 1 al 10");

// //convertir la entrada en un numero

// eleccionDelJugador = parseInt(eleccionDelJugador);

// if(isNaN(eleccionDelJugador)|| eleccionDelJugador < 1|| eleccionDelJugador>10 ){
//     alert("por favor poner un numero entre el 1 y el 10 ")
// }else{
//     //generamos el numero ganador
//     let numeroGanador = Math.floor(Math.random()*10+1);

//     //comprobar si numero ganador coincide con el numero del usuario
//     let jugadorUno = eleccionDelJugador === numeroGanador;

//     console.log("numero random", numeroGanador);
//     console.log("eleccion del jugador", eleccionDelJugador);
// }


//clase Date 

//es un objeto que se utiliza para trabajar con fechas y horas

// let fechaActual = new Date();

// console.log(fechaActual)

// console.log (fechaActual.getDate());
// console.log (fechaActual.getMonth());
// console.log (fechaActual.getFullYear());
// console.log(fechaActual.getHours());
// console.log(fechaActual.getMinutes())
// console.log(fechaActual.getSeconds())
// console.log(fechaActual.getDay());// 0= domingo 1=lunes 2= martes 3=miercoles
// console.log(fechaActual.toString());
// console.log(fechaActual.toDateString());
// console.log(fechaActual.toLocaleString());
// console.log(fechaActual.toLocaleDateString());

//alquiler una peli

class Cliente{
    constructor (nombre, edad, membresia){
        this.nombre = nombre;
        this.edad = edad;
        this.membresia = membresia;
    }

}

class Alquiler{
    constructor (pelicula, cliente, costo, fecha){
        this.pelicula = pelicula;
        this.cliente = cliente;
        this.costo = costo;
        this.fecha = fecha || new Date()
    }

}

class Pelicula{
    constructor (nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

}

const clienteUno = new Cliente("carlos", 30, "gold");
const clienteDos = new Cliente("Marta", 20, "normal");

const peliculaUno = new Pelicula ("el secreto de tus ojos","drama");
const peliculaDos = new Pelicula ("avatar 2","fantasia");


const alquilerUno = new Alquiler(peliculaUno, clienteUno, 3.8);
const alquilerDos = new Alquiler(peliculaDos, clienteDos, 3.28, new Date("December 11, 2023 : 11:00"));


function diasAlquilerSegunMembresia(cliente){

    
        if(cliente.membresia == "gold"){
            return 3;
        } else{
            return 2;
        }

}

function peliculaDevolverHoy (alquiler){
    let fechaAlquiler = alquiler.fecha;
    let fechaActual = new Date();
    let diasAlquiler = diasAlquilerSegunMembresia (alquiler.cliente);

    fechaAlquiler.setDate(fechaAlquiler.getDate() + diasAlquiler)

    if (fechaAlquiler < fechaActual){
        return `la pelicula ${alquiler.pelicula.nombre} debe devolveser hoy su costo es ${alquiler.costo}`
    }else{
        return `la pelicula ${alquiler.pelicula.nombre} no debe devolverse hoy, su costo es de ${alquiler.costo}`
    }
}
console.log(peliculaDevolverHoy(alquilerUno))
console.log(peliculaDevolverHoy(alquilerDos))


