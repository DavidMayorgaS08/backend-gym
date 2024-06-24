import mongoose from "mongoose";

const MantenimientoSchema = new mongoose.Schema({
    maquina_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Maquina', required: true },
    fecha_mantenimiento: { type: Date, required: true },
    descripcion: { type: String, required: true },
    responsable: { type: String, required: true },
    precio_mantenimiento: { type: Number, required: true },
})

export default mongoose.model('Mantenimiento', MantenimientoSchema);