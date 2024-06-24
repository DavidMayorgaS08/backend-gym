import Ventas from '../models/venta.js';

const ventasController = {
    // crear venta
    async crearVenta(req, res) {
        const body = req.body;
        try {
            const venta = await Ventas.create(body);
//modificacomos 


            res.status(201).json(venta);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear venta',
                error
            });
        }
    },
    // Modificar venta
    async modificarVenta(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const venta = await Ventas.findByIdAndUpdate(_id, body, { new: true });
            res.json(venta);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al modificar venta',
                error
            });
        }
    },
    // Listar todas las ventas
    async listarVentas(req, res) {
        const ventas = await Ventas.find();
        res.json(ventas);
    },
    // Listar venta por id
    async listarVenta(req, res) {
        const _id = req.params.id;
        const venta = await Ventas.findById(_id);
        res.json(venta);
    }
};

export default ventasController;