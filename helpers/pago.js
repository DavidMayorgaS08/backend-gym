import Pago from '../models/pago.js';
import Plan from '../models/plan.js';
import Cliente from '../models/cliente.js';

const pagoHelper = {
    validarId: async (id = '') => {
        const existePago = await Pago.findById(id);
        if (!existePago) {
            throw new Error(`El id ${id} no existe`);
        }
    },

    validarIdPlan: async (id = '') => {
        const existePlan = await Plan.findById(id);
        if (!existePlan) {
            throw new Error(`El id ${id} no existe`);
        }
    },

    validarIdCliente: async (id = '') => {
        const existeCliente = await Cliente.findById(id);
        if (!existeCliente) {
            throw new Error(`El id ${id} no existe`);
        }
    }
};

export default pagoHelper;