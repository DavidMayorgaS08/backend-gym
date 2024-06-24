import Maquina from '../models/maquina.js';

const maquinaController = {
    // crear maquina
    async crearMaquina(req, res) {
        const body = req.body;
        try {
            const maquina = await Maquina.create(body);
            res.status(201).json(maquina);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear maquina',
                error
            });
        }
    },
    // Modificar maquina
    async modificarMaquina(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const maquina = await Maquina.findByIdAndUpdate(_id, body, { new: true });
            res.json(maquina);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al modificar maquina',
                error
            });
        }
    },
    // Activar maquina
    async activarMaquina(req, res) {
        const _id = req.params.id;
        try {
            const maquina = await Maquina.findByIdAndUpdate(_id, { estado: 1 }, { new: true });
            res.json(maquina);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al activar maquina',
                error
            });
        }
    },
    // Inactivar maquina
    async inactivarMaquina(req, res) {
        const _id = req.params.id;
        try {
            const maquina = await Maquina.findByIdAndUpdate(_id, { estado: 0 }, { new: true });
            res.json(maquina);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al inactivar maquina',
                error
            });
        }
    },
    // Listar todas las maquinas
    async listarMaquinas(req, res) {
        const maquinas = await Maquina.find();
        res.json(maquinas);
    },
    // Listar maquina por id
    async listarMaquina(req, res) {
        const _id = req.params.id;
        const maquina = await Maquina.findById(_id);
        res.json(maquina);
    },
    // Listar maquinas activas
    async listarMaquinasActivas(req, res) {
        const maquinas = await Maquina.find({ estado: 1 });
        res.json(maquinas);
    },
    // Listar maquinas inactivas
    async listarMaquinasInactivas(req, res) {
        const maquinas = await Maquina.find({ estado: 0 });
        res.json(maquinas);
    }
};

export default maquinaController;