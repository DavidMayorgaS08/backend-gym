import Cliente from '../models/cliente.js';

const clienteController = {
    // crear cliente
    async crearCliente(req, res) {
        const body = req.body;
        try {
            const cliente = await Cliente.create(body);
            res.status(201).json(cliente);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear cliente',
                error
            });
        }
    },
    // Modificar cliente
    async modificarCliente(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const cliente = await Cliente.findByIdAndUpdate(_id, body, { new: true });
            res.json(cliente);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al modificar cliente',
                error
            });
        }
    },
    // Activar cliente
    async activarCliente(req, res) {
        const _id = req.params.id;
        try {
            const cliente = await Cliente.findByIdAndUpdate(_id, { estado: 1 }, { new: true });
            res.json(cliente);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al activar cliente',
                error
            });
        }
    },
    // Inactivar cliente
    async inactivarCliente(req, res) {
        const _id = req.params.id;
        try {
            const cliente = await Cliente.findByIdAndUpdate(_id, { estado: 0 }, { new: true });
            res.json(cliente);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al inactivar cliente',
                error
            });
        }
    },
    // Listar todos los clientes
    async listarClientes(req, res) {
        const clientes = await Cliente.find();
        res.json(clientes);
    },
    // Listar por id
    async listarCliente(req, res) {
        const _id = req.params.id;
        const cliente = await Cliente.findById(_id);
        res.json(cliente);
    },
    // Listar activos
    async listarClientesActivos(req, res) {
        const clientes = await Cliente.find({ estado: 1 });
        res.json(clientes);
    },
    // Listar inactivos
    async listarClientesInactivos(req, res) {
        const clientes = await Cliente.find({ estado: 0 });
        res.json(clientes);
    },
    // Listar por plan 
    async listarPorPlan(req, res) {
        const _id = req.params.id;
        const clientes = await Cliente.find({ plan: _id });
        res.json(clientes);
    },
    // Listar total de clientes
    async totalClientes(req, res) {
        const total = await Cliente.countDocuments();
        res.json(total);
    },
    // Listar cumpleaños
    async listarCumpleaños(req, res) {
        const clientes = await Cliente.find({ fechaNacimiento: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) } });
        res.json(clientes);
    },
    // Listar seguimiento por id
    async listarSeguimiento(req, res) {
        const _id = req.params.id;
        const cliente = await Cliente.findById(_id).populate('seguimiento');
        res.json(cliente);
    }

};

export default clienteController;