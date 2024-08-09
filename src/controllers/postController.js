const postServices =require("../services/postServices");
module.exports = {
    getAllPosts: async(req, res) => {
        try {
          const posts = await postServices.getPosts();// el controlador no sabe lo que pasa dentro de esta funcion
          res.status(200).json(posts);
        } catch (error) {
          res.status(500).json({
            error:"Error interno del servidor",
          });
        };
      },
};