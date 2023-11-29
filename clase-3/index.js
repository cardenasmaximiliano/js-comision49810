//operadores unitarios
/**
 * ayudan a aumentar o disminuir el valor de una variable.
 * 
 * operador de incremento => ++
 * 
 * 
 * 
 * operador de decremento => --
 * 
 */

//operador pre-incremento => va a incrementar la variable antes que se utilice.

// let x = 5;
// let y = ++x; 

// console.log(y)

//operador post-incremento => el valor de la variable incrementa despues de 
//se utiliza la variable actual.

// let m = 4; 
// let n = m++;

// console.log(n);


//operador pre-decremento => el valor se reduce antes que se ejecute la variable.

// let x = 5;
// let y = x--;

// console.log(y);

//ciclo for => parte de los ciclos por conteo, repite un bloque de codigo
//siempre y cuando sepamos la cantidad de veces que necesitamos hacerlo.

// for(inicializacion(desde);condicion(hasta);actualizacion){
//     bloque de codigo a repetir
// }

// for(let i=0; i < 21; ++i){
//     console.log("iteracion Nro", i);
// }

// const NUMERO = parseInt(prompt(""));

// for(let i=1; i <= 10; i++){
//     let resultado = NUMERO * i;
//     console.log(NUMERO + " X " + i + " = " + resultado);
// }

//sentencia break => se utiliza para salir inmediamente de un bucle
//cuando se cumpla una condicion especifica. 
//podemos usar un break dentro un ciclo y hacer que se termine antes.

// for(let i=0; i <= 10; i++){
//     if( i === 5){
//         break;
//     }
//     console.log(i)
// }

//sentencia continue => se utiliza para saltar iteraciones y continua
//con la siguiente iteracion.
/*
for(let i=1; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}*/

//WHILE => SIEMPRE Y CUANDO SE CUMPLA UN CODICION ESTE BUCLE SE VA A EJECUTAR.

//while(condicion){
    //bloque de codigo a ejecutar mientras se cumpla la condicion
//}

//queremos que se muestren numeros del 1 al 10

// let contador = 1;

// while(contador <= 50){
//     console.log("numero: "+ contador);
//     contador ++;
// }

// console.log("bucle completado");

// let segundos = 10;

// while(segundos >= 0 ){
//     console.log("cuenta regresiva"+ segundos);
//     segundos--; 
// }

// console.log("tiempo agotado");

//juego de adivinanza

// const PALABRASECRETA = "javascript";
// let intentos = 0;
// let adivinanza = "";

// while(adivinanza !== PALABRASECRETA){
//     adivinanza = prompt("adivina la palabra secreta, es un lenguaje de programacion").toLowerCase()
//     intentos++;

//     if(adivinanza !== PALABRASECRETA){
//         alert("ese no es, adivina de nuevo")
//     }
 
// }

// alert("felicitaciones capo adivinaste, tardeste " + intentos + " intentos")

//do while => es como while, aunque este por lo menos ejecuta 1 vez el codigo antes que se evalue.

//do{
    //bloque de codigo a ejecutar al menos una vez. 

//while(condicion);

//sumar numeros por usuario

// let suma = 0;
// let continuar;

// do{
//     const NUMERO = parseFloat(prompt("ingresa un numero para sumar:"));
//     if(!isNaN(NUMERO)){
//         suma += NUMERO;
//         continuar = prompt("¿quiere ingresar otro numero?(si/no)").toLowerCase();
//     }else{
//         alert("ingresa un numero valido");
//         continuar ="si"; //continua el bloque en caso de ser entrada invalida
//     }
// } while( continuar === "si");

// console.log("la suma total es:" + suma);

//sentencia switch => sirve para toma de decisiones basadas en un valor de una expresion.
//alternativa al if .. else y nos sirve para realizar diferentes acciones

// switch (expresion){

//     case valor1:
//         //codigo a ejecutar 
//         break;
//     case valor1:
//         //codigo a ejecutar 
//         break;
//     case valor1:
//         //codigo a ejecutar 
//         break;
//     case valor1:
//         //codigo a ejecutar 
//         break;
// }


//calculadora

let num1 = parseFloat(prompt("ingresa el numero"));
let operacion = prompt ("ingresa operacion + - * /");
let num2 = parseFloat(prompt("ingresa el numero"));

let resultado;
switch (operacion){
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
            break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    default:
        alert("operacion no valida");
        resultado = "indefinido"
}

alert ("resultado:" + resultado);