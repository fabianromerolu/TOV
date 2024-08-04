const app = require("./src/server.js");  //requiero a mi servidor que esta encapsulado en "app"

app.listen(3000, () => {
    console.log("el servidor esta escuchando en el puerto 3000")
}); //express tiene un metodo (listen) que le va a permitit escuchar lo que pase en el puerto 3000
