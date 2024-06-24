import Inventario from '../models/inventario.js';

const inventarioHelper = {
    validarId: async (id) => {
        const inventario = await Inventario.findById(id);
        if (!inventario) {
            throw new Error('El inventario no existe');
        }
    }, 
};

export default inventarioHelper;