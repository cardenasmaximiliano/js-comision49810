const http = require('http');

//configurar entorno http servidor => hola mundo
const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("hola mundo")
})

//se escuche en algun puerto el pedidio que estamos haciendo 

const puerto =3000;

const direccionIP = '127.0.0.1'; 
server.listen(puerto, direccionIP, ()=>{
    console.log(`servidor ip corriendo http://${direccionIP}:${puerto}`)
}); 

