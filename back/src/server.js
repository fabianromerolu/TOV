const express = require("express"); // Importa el módulo express para crear un servidor
const router = require("./routes"); // Importa el router que contiene las rutas definidas

const morgan = require("morgan"); //🔒este es un middleware que se llama morgan (npm install morgan)

const cors = require("cors"); //🔒este es otro middleware que se encarga de definir a quien le puede constestar mi servidor
// es decir a quien yo autorizo para que le pueda hacer peticiones a mi server (npm install cors)

const app = express(); // Crea una instancia de la aplicación express, nuestro servidor

//el metodo use(quiere decir que quiero que la solicitud pase por aca)


app.use(morgan("dev"));//🔒aqui la solicitud pasa al middleware de morgan con el argumento dev

app.use(cors());//🔒aqui estoy indicando que mi servidor esta abierto a cualquier cliente

app.use(express.json()); //🔒este es oto middleware que ya viene al instalar express, que hace que cuando reciba la solitud 
//pasa por este middleware y convierte esta informacion que pudo haber venido en json en javascript para que este disponible patra el resto del proyecto

// MORGAN, CORS Y EXPRESS.JSON ya vienen configuarados para que la solitud siga su camino
//PERO EN UN MIDDELWARE PERSONALIZADO yo debo indicar por donde tiene que pasa la solitud y para ello es el 
//tecer parametro "next()"

app.use((req, res, next)=>{
    console.log("estamos pasando por mi middleware personalizado");
    next();
})// los middleware son funciones asi que si no quiero usar un middleware de alguien mas puedo hacer mi propia funcion dentro
//los parentesis de use con tres parametos req.res.next asi: app.use((req, res, next)=>{})


app.use(router); //aqui la solicitud luego de haber pasado de morgan pasa a router(carpeta routes con los direccionamientos)
module.exports = app; // Exporta la instancia de la aplicación express para que pueda ser utilizada en el archivo principal
