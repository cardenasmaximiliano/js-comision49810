document.addEventListener("DOMContentLoaded", async()=>{
    try{
        const response = await fetch('productos.json');
        const productos = await response.json();

        //imprimir los productos en cosnola
        console.log(productos);

        //empezariamos a incorporar los productos de json a nuestro cidog
        const productosContainer = document.getElementById('productosContainer');
        
        productos.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.innerHTML = `
                <h2>${producto.nombre}</h2>
                <p>${producto.precio}</p>
               <p>${producto.descripcion}</p>
               `
               //productos al contenedor del dom
               productosContainer.appendChild(productoElement);
        });
    }catch(error){
        console.error('error al cargar los productos', error)
    }




})