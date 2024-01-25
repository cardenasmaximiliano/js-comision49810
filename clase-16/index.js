//api = interfaz de programacion de aplicaciones, son conjutos de reglas y protocoloes que nos permiten 
//comunicar 2 aplicaciones entre si. 

//nos perimite conectarnos con servicios externos, y que podamos acceder a funcionalidades especificas. 

// existen diferentes tipso de Apis 

// Apis de bibliotecas o framworks, proporciona conjuntos de funciones y procedimientos que podes incluir en nuestro SVGTextPositioningElement

// Api web => APIs HTTP permiten comunicarnos utilizando protocolos HTTP


//nos conectamos

const url = "https://jsonplaceholder.typicode.com/users";

//objeto de tipo XMLhttpRequest => no es mas que un objeto que nos permite hacer solicitudes HTTP

const xhr = new XMLHttpRequest()

function manejador(){
    if(this.readyState === 4 && this.status === 200){

        const datos = JSON.parse(this.response);
        console.log(datos);
        mostrarUsuarios(datos);
    }
    //this.readyState => nos indica el estado de solicitud
    // 0 => unset, la solicitud no ha sido declarada
    //1 => opened, la conexion el servidor fue establecida.
    //2 => header received, hay respuesta desde la cabecera.
    //3 => loading tiempo de carga. 
    //4 => done, operacion completada.

    //this.status => estado de codigo de HTTP, esta de respuesta. 
    // 200 => la solicitud esta completa correctamente
    //404 not found => la pagina solicitada no se encuentra.
    //500 => interval server error => nos dice que hay un error al procesar la solicitud.

}
xhr.addEventListener('load', manejador);

xhr.open('get', url);

xhr.send();

// crear una funcion para mostrar usuarios

const app= document.getElementById("app");

function mostrarUsuarios(datos){
    datos.forEach(usuario => {
        const li= document.createElement("li")
        li.textContent = `${usuario.id} - ${usuario.name} - ${usuario.username} - ${usuario.email}`
        app.appendChild(li);
    })
}


//fetch => es una funcion de js, que se utiliza para realizar solicitudes HTTP, desde le cliente hacia un servidor. 
// a diferencia de XMLhttpRequest, es mucho mas moderna, flexible para trabajar con redes. 


const apiFotos = "https://jsonplaceholder.typicode.com/photos";

const contenedorFotos = document.getElementById('fotos');

//fetch funciona con promesas => se respetan los 2 metodos
// then => maneja los casos en caso de que se resuelva, se pueden encadenar varios then mas.
//then toma 1 o mas argumentos
//
//catch => maneja los casos que son rechazados.toma una funcion como argumento.
//catch es unico. 


fetch(apiFotos) //se pasa la direccion de la api consumir
    .then(respuesta => respuesta.json()) // recibir la respuesta de conexion
    .then((datos)=>{ //toma los datos frente a la respuesta en caso de ser correcta
        console.log(datos);
        mostrarFotos(datos);
    })
    .catch(error => console.log(error)) //en caso de que no conecte tira error
    .finally(()=>console.log("proceso finalizo")); // toma una funcion como argumento que se va a ejecutar si se cumple o no la promesa.

    function mostrarFotos(datos){
        datos.forEach(fotos => {
            const img = document.createElement('img');
            img.src= fotos.url;
            contenedorFotos.appendChild(img);
        })
    }

//cotizador de monedas

const dolarApi = "https://criptoya.com/api/dolar";

const divDolar = document.getElementById("dolar");

setInterval(()=>{
    fetch(dolarApi)
        .then(response => response.json())
        .then(({blue,ccl,mep,oficial,tarjeta})=>{
            divDolar.innerHTML = `
            <h2>Cotizador de divisas</h2>
            <p>dolar oficial :${oficial}</p>

            <p>dolar mep:${mep}</p>
            <p>dolar ccl :${ccl}</p>
            <p>dolar blue :${blue}</p>
            <p>dolar tarjeta :${tarjeta}</p> 
            `
            
        })
        .catch(error => console.log(error))

},3000);