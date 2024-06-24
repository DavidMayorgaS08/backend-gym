import Usuario from '../models/usuario.js';
import Sede from '../models/sede.js';

const usuarioHelper = {
    validarId: async (id) => {
        const existeUsuario = await Usuario.findById(id);
        if (!existeUsuario) {
            throw new Error('El id no existe');
        }
    },
    existeRol: async (rol) => {
        if (rol < 1 || rol > 3) {
            console.log(rol);
            throw new Error('El rol no es válido');
        }
    },
    existeSede: async (sede) => {
        const existeSede = await Sede.findById(sede);
        if (!existeSede) {
            throw new Error('La sede no existe');
        }
    },
};

export default usuarioHelper;