module.exports = {
    getPosts: async()=>{
        //consultar a una base de datos
        // o en su defecto van a hacer una solitud a otro servidor para poder responder
        //en casos extraordinarios podran leerr los datos de un archivos
        //esto son operaciones asincronas
        const posts = [
            {
                id:1,
                name: "dia del amor y la amistad",
            },
            {
                id:2,
                name: "navidad",
            },
            {
                id:3,
                name: "hallowen",
            },
        ];
        return posts;
    },
}