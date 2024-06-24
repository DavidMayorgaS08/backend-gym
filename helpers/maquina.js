import Maquina from '../models/maquina.js';

const maquinaHelper = {
    validarId: async (id) => {
        const maquina = await Maquina.findById(id);
        if (!maquina) {
            throw new Error(`La máquina con el ID ${id} no existe`);
        }
    }
};

export default maquinaHelper;