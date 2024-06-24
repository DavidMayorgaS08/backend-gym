import mongoose from "mongoose";

const IngresoSchema = new mongoose.Schema({
    cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    fecha: { type: Date, required: true },
    sede: { type: mongoose.Schema.Types.ObjectId, ref: 'Sede', required: true },
})

export default mongoose.model('Ingreso', IngresoSchema); 