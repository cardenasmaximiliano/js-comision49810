
//metodos de accesos a html
// getElementById => con este metodo del document objecto en js, captamos los ID de HTML
// const TITULO = document.getElementById("tituloPrincipal");

// console.log(TITULO);

//getElementByClassName => un metodo con el cual nosotros vamos pa aoder acceder o seleccionar 
//elementos que poseean clases. 

// const NOMBRES = document.getElementsByClassName("nombres");

// console.log(NOMBRES);

//SE crea algo llamado HTMLcollection, esto es un objeto
//que representa una coleccion de elementos en el DOM.
//ES SIMILAR A UN ARRAY, pero no es un array real.
//va a compartir el tener una longitud, y el poder acceder  a traves de indices.


//getElementByTagName => es un metodo con el cual nosotros vamos a poder llamar a las etiquetas HTMl

// const LI = document.getElementsByTagName("li");
// console.log(LI);

// //querrySelector => nos permite seleccionar los nodos(LAS ETIQUETAS CHICOS), con la misma sintaxis que CSS

// const QueryNames = document.querySelector(".nombres");
// console.log(QueryNames);

// //querySelectorAll => devuelve un NodeList, que es similiar a HTML COLLECTION.

// const QueryNameAll = document.querySelectorAll(".nombres");
// console.log(QueryNameAll);


// //diferencias entre HTMLcollection y NodeList

// //1- en cuanto a nodos => HTMLcollection, esta diseñada para contener elementos HTML. 
// //nodeList, puede contener cualquier tipo de nodo de HTML, elementos, atributos textos etc.
// //2- HTMLcollection se actualiza dinamicamente y NodeList no. 

// //modificacion de NODOS a traves de JS

// // innerText innerHTML => son propiedades de JS, que permiten acceder y manipular
// //el contenido de los elementos HTML. 

// //innerText => devuelve texto visible contenido en un elemento. 
// const TITULO = document.getElementById("tituloPrincipal");

// TITULO.innerText = "RE LOCOO";


// const SECTION_CONT = document.getElementById("sectionContenedor");

// //innerHTML, se utiliza para obtener o establecer contenido HTML interno de un elemento.
// //a diferencia de innerTEXT, este incluye todas las etiquetas HTML dentro de un elemento. 

// SECTION_CONT.innerHTML =  `
//                         <div class="card">
//                             <img src="" alt="">
//                             <div>
//                                 <h3>titulo de la card</h3>
//                                 <p>precio del producto </p>
//                                 <button>comprar</button>
//                             </div>
//                         </div>`

// //agregar nodos. 

// //createElement => me sirve para crear un elemento desde JS
// const contenedor = document.getElementById("contenedor")

// const parrafo = document.createElement("p");

// parrafo.innerText ="este es un parrafo agregado desde JS";
// parrafo.className ="rojo";


// //appendChild =Z es un metodo que se utiliza para agregar nodos nuevos al HTML.
// //nos va a permitir agregar elemnetos, como texto o cualquier elmeento de nodo .

// contenedor.appendChild(parrafo);


// parrafo.remove; 

//cards de productos

//crear objetos dinamicos

class Producto{
    constructor(nombre,precio,img){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

//aca creo los productos
const PROD1 = new Producto("yerba",3000,"yerba.webp");
const PROD2 = new Producto("cafe",4500,"cafe.jpg");
const PROD3 = new Producto("whisky",190000,"whisky.jpg");
const PROD4 = new Producto("pitusas",290000,"https://masonlineprod.vtexassets.com/arquivos/ids/171264-1200-auto?v=637835144779170000&width=1200&height=auto&aspect=true");

const arrayProductos= [PROD1,PROD2,PROD3,PROD4];

const contenedorProductos =document.getElementById("contenedorProductos");

arrayProductos.forEach(producto =>{
    const div = document.createElement("div");

    div.className ="card";

    div.innerHTML =`
                <img class="card-img" src="${producto.img}">
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <button>comprar</button>
                </div>
                `;

        contenedorProductos.appendChild(div);  
})

