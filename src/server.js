const express = require("express"); // Importa el módulo express para crear un servidor
const router = require("./routes"); // Importa el router que contiene las rutas definidas

const app = express(); // Crea una instancia de la aplicación express, nuestro servidor

app.use(router); // Usa el router para manejar todas las rutas definidas

module.exports = app; // Exporta la instancia de la aplicación express para que pueda ser utilizada en el archivo principal
