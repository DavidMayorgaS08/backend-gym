import Mantenimiento from '../models/mantenimiento.js';

const mantenimientoController = {
    // crear mantenimiento
    async crearMantenimiento(req, res) {
        const body = req.body;
        try {
            const mantenimiento = await Mantenimiento.create(body);
            res.status(201).json(mantenimiento);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear mantenimiento',
                error
            });
        }
    },
    // Modificar mantenimiento
    async modificarMantenimiento(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const mantenimiento = await Mantenimiento.findByIdAndUpdate(_id, body, { new: true });
            res.json(mantenimiento);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al modificar mantenimiento',
                error
            });
        }
    },
    // Listar todos los mantenimientos
    async listarMantenimientos(req, res) {
        const mantenimientos = await Mantenimiento.find();
        res.json(mantenimientos);
    },
    // Listar mantenimiento por id
    async listarMantenimiento(req, res) {
        const _id = req.params.id;
        const mantenimiento = await Mantenimiento.findById(_id);
        res.json(mantenimiento);
    }
};

export default mantenimientoController;