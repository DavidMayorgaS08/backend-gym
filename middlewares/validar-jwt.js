import Usuario from '../models/usuario.js';
import jwt from 'jsonwebtoken';

const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid};
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            //100 years
            expiresIn: "100y"
        }, (err, token) => {
            if (err) {

                reject("No se pudo generar el token")
            } else {
                resolve(token)
            }
        })
    })
}

const validarJWT = async (req, res, next) => {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la peticion"
        })
    }

    try {
        const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        let usuario = await Usuario.findById(id);


        if (!usuario) {
            return res.status(401).json({
                msg: "Token no válido! ."//- usuario no existe DB
            })
        }

        if (usuario.estado == 0) {
            return res.status(401).json({
                msg: "Token no válido!!  " //- usuario con estado: false
            })
        }

        req.usuariobdtoken = usuario

        next();

    } catch (error) {


        res.status(401).json({
            msg: "Token no valido"
        })
    }
}


export { generarJWT, validarJWT }