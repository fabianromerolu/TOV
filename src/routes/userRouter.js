const { Router } = require("express");
const userController = require("../controllers/userController");
const validationUSer = require("../middlewares/validationUser");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers); //RUTA GET DE USUARIOS
userRouter.post("/", validationUSer, userController.createUSer); //RUTA POST DE USUARIOS


module.exports = userRouter;