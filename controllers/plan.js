import Plan from "../models/plan.js";

const planController = {
    // crear plan
    async crearPlan(req, res) {
        const body = req.body;
        try {
            const plan = await Plan.create(body);
            res.status(201).json(plan);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear plan',
                error
            });
        }
    },
    // Modificar plan
    async modificarPlan(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const plan = await Plan.findByIdAndUpdate(_id, body, { new: true });
            res.json(plan);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al modificar plan',
                error
            });
        }
    },
    // Activar plan
    async activarPlan(req, res) {
        const _id = req.params.id;
        try {
            const plan = await Plan.findByIdAndUpdate(_id, { estado: 1 }, { new: true });
            res.json(plan);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al activar plan',
                error
            });
        }
    },
    // Inactivar plan
    async inactivarPlan(req, res) {
        const _id = req.params.id;
        try {
            const plan = await Plan.findByIdAndUpdate(_id, { estado: 0 }, { new: true });
            res.json(plan);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al inactivar plan',
                error
            });
        }
    },
    // Listar todos los planes
    async listarPlanes(req, res) {
        const planes = await Plan.find();
        res.json(planes);
    },
    // Listar plan por id
    async listarPlan(req, res) {
        const _id = req.params.id;
        const plan = await Plan.findById(_id);
        res.json(plan);
    },
    // Listar planes activos
    async listarPlanesActivos(req, res) {
        const planes = await Plan.find({ estado: 1 });
        res.json(planes);
    },
    // Listar planes inactivos
    async listarPlanesInactivos(req, res) {
        const planes = await Plan.find({ estado: 0 });
        res.json(planes);
    }
};

export default planController;