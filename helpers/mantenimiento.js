import mantenimiento from "../models/mantenimiento.js";

const mantenimientoHelper = {
    validarId: async (id) => {
        const mantenimiento = await mantenimiento.findById(id);
        if (!mantenimiento) {
            throw new Error('El mantenimiento no existe');
        }
    },
};

export default mantenimientoHelper;