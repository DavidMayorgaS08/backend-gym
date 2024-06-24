import plan from "../models/plan.js";

const planHelper = {
    // Validar ID
    async validarId(id) {
        const planDB = await plan.findById(id);
        if (!planDB) {
            throw new Error('El ID no existe');
        }
    }
};

export default planHelper;