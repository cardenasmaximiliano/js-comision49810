//condicional => una estructura de flujo que nos permite tomar decisiones
//estas se expresan con veradero o false 
//verdero o falso son booleanos, que representan numero binarios 0(falso) y 1(verdadero)


//operadores de comparacion o relacionales

// operador de igualdad ==  (doble igual) va a comparar los valores y va a comparar el tipo de dato

// operador de igualdad estricta === ()

// operador distinto != 

//operador distintamente estricto !==

//estructura if / sentencia if
// importante para la toma de decisiones, evalua expresiones de tipo verdaderas

// if (condicion_boleana){
        //aca va el resultado de la condicion
// }

let a,b,c,d,e;

// el = solo es de asignacion
a = 8;
//operador de igualdad
if (a == 8){
    console.log("en efecto es el numero 8");
}
//estrictamente igual
b = 10;

if (b === 10){
    console.log("esto es el numero 10")
}

//operador de desigualdad

c = "10";

if (c !== 10){
    console.log("esto deberia ser distinto a pepito")
}

// operador de mayor que y operador de menor que 

//operador mayor que y mayor-igual > 

d = 8;

if (d >= 8){
    console.log(d+" "+"esto es mas grande que 8");
}

//operador menor que 

// e = 10;

// if(e <= 10){
//     console.log(e +" "+"es menor que 10")
// }

// else = nos sirve para completar la sentencia if, en caso de querer
// retornar un mensaje de tipo false.

// e = 11;

// if(e <= 10){
//     console.log(e +" "+"es menor que 10")
// }
// else{
//     console.log(e +" "+"es mayor que 10 capo, date cuenta ")
// }

//else if = sino, condicion o sentencia, nos va a ayudar a evaluar multiples condiciones

// e = 9;

// si es mayor, igual o menor a 10;

// if (e > 10){
//     console.log(e +" "+"es mayor que 10")
// }
// else if(e == 10){
//     console.log(e +" "+"es igual que 10")
// }

// else{
//     console.log( e +" "+"es menor que 10")
// }

// edad para conducir

// |
//operadores logicos,son operadores que van a ejecutar x parte del programa 
//siempre y cuando se cumpla una condicion.

// Operador AND o operador Y  (&&)



//va a devolver verdadero si ambas condiciones que se evaluen son tambien verdaderas.

// let edad = 17;
// let tieneLicencia = false;

// if (edad >= 18 && tieneLicencia == true){
//     console.log("podes conducir")

// }
// else{
//     console.log("no podes conducir")
// }


//operador logico O ||  alt + 124
// operador logico O, se va a ejecutar siempre y cuando 
//una de las 2 condiciones sea verdadera. SOLAMENTE 1

// let edad = 17;
// let tieneLicencia = false;

// if (edad >= 18 || tieneLicencia == true){
//     console.log("podes conducir")

// }
// else{
//     console.log("no podes conducir")
// }

//operador logico "no" se pone simbolo de cierr de !

//este operador es invertir el valor de la condicion. 
//si la condicion es true te la pasa a false, y al reves.

/*
 condicion  resultado
    true  => falso
    false => verdadero


*/

let esVerano = false;

if(!esVerano){
    console.log("no es verano");

}
else{
    console.log("es verano");
}


//precedencia de operadores=> que nos ayuda a entender
//como ejecuta js los bloques de codigo

/**
 *  paretensis y corchetes
 *  operador unitarios (- ++)
 * operadores aritmeticos
 * operadores relacionales < >
 * operadores de igualdad
 * operadores logicos 
 */





