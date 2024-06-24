import Pago from "../models/pago.js";

const pagoController = {
    // crear pago
    async crearPago(req, res) {
        const body = req.body;
        try {
            const pago = await Pago.create(body);
            res.status(201).json(pago);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear pago',
                error
            });
        }
    },
    // Modificar pago
    async modificarPago(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const pago = await Pago.findByIdAndUpdate(_id, body, { new: true });
            res.json(pago);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al modificar pago',
                error
            });
        }
    },
    // activar pago
    async activarPago(req, res) {
        const _id = req.params.id;
        try {
            const pago = await Pago.findByIdAndUpdate(_id, { estado: 1 }, { new: true });
            res.json(pago);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al activar pago',
                error
            });
        }
    },
    // inactivar pago
    async inactivarPago(req, res) {
        const _id = req.params.id;
        try {
            const pago = await Pago.findByIdAndUpdate(_id, { estado: 0 }, { new: true });
            res.json(pago);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al inactivar pago',
                error
            });
        }
    },
    // Listar todos los pagos
    async listarPagos(req, res) {
        const pagos = await Pago.find();
        res.json(pagos);
    },
    // Listar pago por id
    async listarPago(req, res) {
        const _id = req.params.id;
        const pago = await Pago.findById(_id);
        res.json(pago);
    },
    // Listar pagos activos
    async listarActivos(req, res) {
        const pagos = await Pago.find({ estado: 1 });
        res.json(pagos);
    },
    // Listar pagos inactivos
    async listarInactivos(req, res) {
        const pagos = await Pago.find({ estado: 0 });
        res.json(pagos);
    },
    // Total de pagos por plan
    async totalPagosPlan(req, res) {
        const _id = req.params.id;
        const pagos = await Pago.find({ plan: _id });
        res.json(pagos);
    },
    // total de pagos por cliente
    async totalPagosCliente(req, res) {
        const _id = req.params.id;
        const pagos = await Pago.find({ cliente_id: _id });
        res.json(pagos);
    }, 
    // total de pagos entre fechas
    async totalPagosEntreFechas(req, res) {
        const { fechaInicio, fechaFin } = req.body;
        const pagos = await Pago.find({ fecha: { $gte: fechaInicio, $lte: fechaFin } });
        res.json(pagos);
    },
};

export default pagoController;