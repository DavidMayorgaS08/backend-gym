import venta from "../models/venta.js";

const ventaHelper = {
    validarId: async (id) => {
        const existeVenta = await venta.findById(id);
        if (!existeVenta) {
            throw new Error('El id no existe');
        }
    }
};

export default ventaHelper;