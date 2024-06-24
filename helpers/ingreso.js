import Ingreso from '../models/ingreso.js';

const ingresoHelper = {
    validarId: async (id) => {
        const ingreso = await Ingreso.findById(id);
        if (!ingreso) {
            throw new Error(`El ingreso con id ${id} no existe en la base de datos`);
        }
    },
};

export default ingresoHelper;