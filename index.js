//Que tiene que tener este archivo para crear un servidor

//importaciones

const http = require('http')


//definir constantes
const host =  "localhost"
const port = 8080

// crear el servidor, llamar al modulo http , usar el metodo create server
//el metodo createServer recibe una funcion, cuando se levante el servidor va hacer lo
//que indique la funcion

const server = http.createServer((request,response) =>{
    console.log('soy un servidor que no trabaja')
    //si la peticion es "/"
    if(request.url === "/"){
        //le retomo una cabecera (Http Headers )con el status code 200 (que dice que todo fue bien)
        //un objeto json con clave valor que especifica (tipo MIME) lo que manda
        //
        response.writeHead(200, {
            'Content-Type':"text/html",
            "Acces-Control-Allows-Origin":"*"
        })
        // Para el cuerpo (el body) se utiliza write
        response.write('<h1>Hola Remind Pay Team</h1>')

        //llamar al metodo end, para que finalmente le llegue al cliente
        response.end()
    }
})

//Start server
// server.listen recibe 3 parametros, la direccion, la puerta y la funcion
server.listen(port,host, ()=>{
    console.log(`server is running on http://${host}:${port}`)
})
