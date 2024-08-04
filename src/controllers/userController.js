const userServices = require("../services/userServices");

module.exports = {
  //aqui estoy haciendo un llamado a una funcion que realiza operaciones asincronas
  // por eso hacemos el try catch porque si bien esa operacion puede resultar existosa, tambien esa operacion puede fallar
    getAllUsers: async(req, res) => {
      try {
        const users = await userServices.getUsers();// el controlador no sabe lo que pasa dentro de esta funcion
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({
          error:"Error interno del servidor get",
        });
      }
    },
    createUSer: async(req, res) => {
      const {name} = req.body;
      try {
        userServices.createUSer(name);
        res.status(201).json({
          message: "usuario creado correctamente",
        });
      } catch (error) {
        res.status(500).json({
          error: "no se pudo crear el usuario",
        })
      }
    },
};


