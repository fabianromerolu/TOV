const users = [
    {
        id:1,
        name: "jorge",
    },
    {
        id:2,
        name: "alejo",
    },
    {
        id:3,
        name: "maria",
    },
];
let id = 4;
module.exports = {
    getUsers: async()=>{
        //consultar a una base de datos o en su defecto van a hacer una solitud a otro servidor para poder responder en casos extraordinarios podran leerr los datos de un archivos esto son operaciones asincronas
        return users;
    },
    createUSer: async(name)=>{
        const newUser = {
            id,
            name,
        };
        id++;
        users.push(newUser);
    },
};