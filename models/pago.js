import mongoose from "mongoose";

const PagoSchema = new mongoose.Schema({
    cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
    fecha: { type: Date, required: true },
    valor: { type: Number, required: true },
    estado: { type: Number, required: true },
})

export default mongoose.model('Pago', PagoSchema);