//spread operator con arrays => vamos a pode copiar,concatenar y añadir elementos al array


//copiar un array

// const ORIGINAL_ARRAY = [1,2,3,4,5,6,7,8,10];

// const NEW_ARRAY = [...ORIGINAL_ARRAY];

// console.log(ORIGINAL_ARRAY);

// console.log(NEW_ARRAY);

// console.log(ORIGINAL_ARRAY === NEW_ARRAY);

// //CONCATENACION DE ARRAYS


// let nombresH = ["matias","pepito","carlos"];

// let nombresM = ["carla","antonella","luciana"];

// let alumnos = [...nombresH, ...nombresM];

// console.log(alumnos);

// //poder añadir elementos 

// let añadirArray = [...NEW_ARRAY,15,17,22];

// console.log(añadirArray);


//spread de objetos

//copia 

// const actualObject = {
//     a:1,
//     b:2,
//     c:3
// }

// const nuevoObjeto = {...actualObject, a:4,e:5};

// console.log(actualObject);
// console.log(nuevoObjeto);

// const unirObjetos = {...actualObject, ...nuevoObjeto};

// console.log(unirObjetos)

//tenemos objetos grandes.

// const DATOS_PERSONA = {
//     nombre:'carlos',
//     anios: 30,
//     direccion:{
//         ciudad: 'mar del plata',
//         CP: 7600
//     }
// }

// const COPIA_PERSONA = {
//     ...DATOS_PERSONA,
//     direccion:{
//         ...DATOS_PERSONA.direccion,
//         ciudad:'mar chiquita'
//     }
// }
// console.log(DATOS_PERSONA);
// console.log(COPIA_PERSONA);


// //USUARIOS

// const USERS = [

//     {id:1, nombre: 'alice'},
//     {id:2, nombre:'luffy'},
//     {id:3, nombre: 'kibito'}

// ]

// //clonar y actualizar el usuario
// const actualizarUsers = USERS.map(user => user.id === 2 ? {...USERS, nombre:'pablito99'}: user);

// console.log(actualizarUsers);
// console.log(USERS);

// ///funcion de suma 


// function sumar(...numeros){
//     let resultado = 0;
//     for(let numero of numeros){
//         resultado +=numero;

//     }
//     return resultado;
// }

// console.log(sumar(20,40,50,10,15));

// console.log(sumar());

//crear los datos de mis productos

const PRODUCTOS = [

    {id:1, nombre: 'azucar', precio: 1300, },
    {id:2, nombre: 'arroz', precio: 1500},
    {id:3, nombre:'leche', precio:1600},
    {id:4, nombre:'galletitas', precio:2600}
];

const carrito = [];

//creacion de las cards

function renderizarProductos(){
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';

    PRODUCTOS.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p>precio: $${producto.precio.toFixed(2)} </p>
                    <button onclick ="agregarAlCarrito(${producto.id})">agregar carrito</button>
        `;
        carritoElement.appendChild(card);
    })

}


//funcion para agregar un producto al carrito

function agregarAlCarrito(idProducto){
    const productosSeleccionado = PRODUCTOS.find(producto => producto.id === idProducto);

    if(productosSeleccionado){
        carrito.push(productosSeleccionado);
        actualizarCarrito();
    }
}

//funcion para actualizar y visualizar carrito

function actualizarCarrito(){
    const carritoElement = document.getElementById('total');
    carritoElement.innerHTML = '';
    carrito.forEach(producto =>{
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p>precio: ${producto.precio.toFixed(2)} </p>
            
        `;
        carritoElement.appendChild(card);

    })
    sumarTotal()
}


function sumarTotal(){
    const totalElement = document.getElementById('final');
    const total = carrito.reduce((acc, producto) => acc+ producto.precio,0 )
    totalElement.innerHTML = `<p> total: $${total}`;
}
renderizarProductos();