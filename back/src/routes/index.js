const { Router } = require("express"); // Importa el módulo Router de express

const userRouter = require("./userRouter");
const postRouter = require("./postRouter");

const router = Router(); // Crea una nueva instancia de Router

// el METODO [USE] PUEDE REDIRECIONAR LAS RUTAS:
router.use("/users", userRouter);
router.use("/posts", postRouter);

module.exports = router; 
