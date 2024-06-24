import Ingreso from '../models/ingreso.js';

const ingresoController = {
    // crear ingreso
    async crearIngreso(req, res) {
        const body = req.body;
        try {
            const ingreso = await Ingreso.create(body);
            res.status(201).json(ingreso);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear ingreso', 
                error
            });
        }
    },
    // Modificar ingreso
    async modificarIngreso(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const ingreso = await Ingreso.findByIdAndUpdate(_id, body, { new: true });
            res.json(ingreso);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al modificar ingreso',
                error
            });
        }
    },
    // Listar todos los ingresos
    async listarIngresos(req, res) {
        const ingresos = await Ingreso.find();
        res.json(ingresos);
    },
    // Listar ingreso por id
    async listarIngreso(req, res) {
        const _id = req.params.id;
        const ingreso = await Ingreso.findById(_id);
        res.json(ingreso);
    },
};

export default ingresoController;