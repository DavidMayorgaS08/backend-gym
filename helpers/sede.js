import Sede from '../models/sede.js';

const sedeHelper = {
    // Validar ID
    async validarId(id) {
        const sedeDB = await Sede.findById(id);
        if (!sedeDB) {
            throw new Error('El ID no existe');
        }
    }
};

export default sedeHelper;