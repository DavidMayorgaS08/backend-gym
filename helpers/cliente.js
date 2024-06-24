import Cliente from '../models/cliente.js';
import Plan from '../models/plan.js';

const clienteHelper = {
    validarId: async (id) => {
        const cliente = await Cliente.findById(id);
        if (!cliente) {
            throw new Error(`El cliente con id ${id} no existe en la base de datos`);
        }
    },
    validarPlan: async (id) => {
        const plan = await Plan.findById(id);
        if (!plan) {
            throw new Error(`El plan con id ${id} no existe en la base de datos`);
        }
    }
};

export default clienteHelper;