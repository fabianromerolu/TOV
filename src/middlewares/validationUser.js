const validationUSer = (req, res, next) => {
    const {name} = req.body;

    if (!name) {
        console.log("hay un error en el nombre, faltan datos");
        return res.status(404).json({
            error: "falta el dato del nombre",
        })
    }else{
        console.log("el nombre esta correcto");
        next();//este next libera la request para que constinue
    }
};

module.exports = validationUSer;