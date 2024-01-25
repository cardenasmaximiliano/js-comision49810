//sincronismo => operaciones que son ejecutadas una tras otra en ORDEN.
//donde el programa, espera que cada operacion se ejecute, antes de iniciar la otra. 

// console.log("inicio programa");
// function operacionSincronica (){
//     console.log("incio de opeacion sincronica");
//     for( let i= 0; i < 3; i++){
//         console.log("paso " + (i + 1));
//     }
// }


// operacionSincronica();
// console.log("fin programa")


//asincronismo => nos permite saltearnos en los flujos de ejecucion. 
// son aquellas que no van a bloquer el hilo principal del programa y permiten que otras operaciones continuen mientras estas suceden. 


//setTimeOut => es una funcion que utilizamos para programar la ejecucion de algunas funciones despues de cierto periodo de tiempo. 
//estas funciones que posean setTimeOut se van ejecutar luego del tiempo especificado. 

//setTimeOut (funcion, tiempoEnMiliSegundos)

// console.log("iniciar programa asincrono");

// setTimeout(function(){
//     console.log("la operacion asincrona se ha ejecutado")
// },4000);

// console.log("fin del programa asincrono")

//callback => es una funcion que se pasa como argumento en otra funcion
//y se ejecuta despues de que complete X operacion. 

//funcion que toma como callback un argumento

// function operacionAsincronica(callback){
//     console.log("inicio de operacion asincrona")
    
//     //simular una operacion que nos toma X tiempo

//     setTimeout(function(){
//         console.log("operacion asincrona completa")
        
//         //llamado al callback
//         callback();
        
//     },2000);
// }

// //uso de la funcion callback

// console.log("inicio programa")

// operacionAsincronica(function(){
//     console.log("este, callbck de la operacion finalizada")
// })
// console.log("fin de programa")

// const mensaje = "maximiliano";
// const elemento = document.getElementById("miElemento");
// let indice = 0;
// //mostarLetra = funcion se encarga de añadir la letra actual al contenido del elemento y aumentar el indice
// function mostrarLetra(){
//     elemento.textContent += mensaje[indice];
//     indice++;

//     //verificar si quedan letras para mostrar
//     if( indice < mensaje.length){

//         //
//         setTimeout(mostrarLetra,2000);
//     }
// }

// console.log("inicio programa")
// setTimeout(mostrarLetra,2000);
// console.log("fin programa")


// function cambiarContenido(){
//     document.getElementById("ejemploDos").innerHTML +="SOY PROGRAMADOR FRONTEND";
// }

// setTimeout(cambiarContenido,2000);

// function cambiarContenidoDos(){
//     document.getElementById("ejemploDos").innerHTML+="TRABAJO EN CODERHOUSE";

// }
// setTimeout(cambiarContenidoDos,4000);


//SET INTERVAL => SE UTILIZA para ejecutar repetidamente una funcion o bloque de codigo a intervalos regulares especificos. 
//basicamente estable un temporizador que ejecuta una funcion dad una cantidad de tiempo.


//setInterval(funcion, intervalo de tiempo)

// let tiempoRestante = 10;

// function actualizarTemporizador(){
//     const temporizadorElemento = document.getElementById("temporizador");

//     temporizadorElemento.textContent= "tiempo restante:" + tiempoRestante;
//     tiempoRestante --; 

//     if(tiempoRestante <0){
//         clearInterval(IntervaloID);
//         temporizadorElemento.textContent= "tiempo agotado"; 
//     }
// }

// const IntervaloID = setInterval(actualizarTemporizador,1000);


// let segundos = 0;
// let minutos = 0;
// let intervalId;

// function actualizarCronometro(){
//     segundos++;
//     if( segundos === 60){
//         segundos = 0;
//         minutos ++
//     }
//     const cronometroElemento = document.getElementById("cronometro");
//     cronometroElemento.textContent = `${minutos}:${segundos < 10 ? '0': ''}${segundos}`;
// };

// function iniciarCronometro (){
//     intervalId = setInterval(actualizarCronometro, 1000);
// }

// function detenerCronometro(){
//     clearInterval(intervalId)
// }

// function reiniciarCronometro(){
//     segundos = 0;
//     minutos = 0;

//     const cronometroElemento = document.getElementById("cronometro");
//     cronometroElemento.textContent = `0:00`;
//     detenerCronometro()
// }


//Promesas 

/*
    una prome en js son objetos que representan la finalizacion o no de una operacion asincrona.

    las promesas tienen 3 estados:

    pending (pendiente): qeu es le estado inicial donde la promesa esta en curso y todavaia no finalizo;
    fulfilled (cumplida): que la promesa se completo con exito. 
    rejected (rechazada): la operacion asincrona fallo. 

*/

// const falsaPromesa= ()=>{

//     return new Promise((resolve, reject)=>{
//         //resolve => se va a ejecutar cuando la promesa se cumple
//         //reject => se va a ejecutar cunado la promesa NO se cumple

//     })

// console.log(falsaPromesa());

// }


const miPrimeraPromesa = new Promise((resolve, reject)=>{

    setTimeout(()=> {
        const exito = false;
        
        if(exito){
            resolve("la operacion se completo");
        }else{
            reject(new Error("la operacion fallo"))
        }
    
    },2000);

})

//manejo de la promesa

miPrimeraPromesa 
 .then((resultado)=>{
    console.log("exito", resultado)
 })
 .catch((error)=>{
    console.error("error", error.message);
 })
