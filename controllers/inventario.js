import Inventario from '../models/inventario.js';

const inventarioController = {
    // crear inventario
    async crearInventario(req, res) {
        const body = req.body;
        try {
            const inventario = await Inventario.create(body);
            res.status(201).json(inventario);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear inventario',
                error
            });
        }
    },
    // Modificar inventario
    async modificarInventario(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const inventario = await Inventario.findByIdAndUpdate(_id, body, { new: true });
            res.json(inventario);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al modificar inventario',
                error
            });
        }
    },
    // Listar todos los inventarios
    async listarInventarios(req, res) {
        const inventarios = await Inventario.find();
        res.json(inventarios);
    },
    // Listar inventario por id
    async listarInventario(req, res) {
        const _id = req.params.id;
        const inventario = await Inventario.findById(_id);
        res.json(inventario);
    },
    // Listar total del inventario
    async totalInventario(req, res) {
        const inventarios = await Inventario.find();
        let total = 0;
        inventarios.forEach(inventario => {
            total += inventario.valor * inventario.cantidad;
        });
        res.json({ total });
    },
};

export default inventarioController;