import Sede from '../models/sede.js';

const sedeController = {
    // crear sede
    async crearSede(req, res) {
        const body = req.body;
        try {
            const sede = await Sede.create(body);
            res.status(201).json(sede);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear sede',
                error
            });
        }
    },
    // Modificar sede
    async modificarSede(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const sede = await Sede.findByIdAndUpdate(_id, body, { new: true });
            res.json(sede);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al modificar sede',
                error
            });
        }
    },
    // Listar todas las sedes
    async listarSedes(req, res) {
        const sedes = await Sede.find();
        res.json(sedes);
    },
    // Listar sede por id
    async listarSede(req, res) {
        const _id = req.params.id;
        const sede = await Sede.findById(_id);
        res.json(sede);
    }
};

export default sedeController;