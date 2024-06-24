import mongoose from "mongoose";

const MaquinaSchema = new mongoose.Schema({
    codigo: { type: String, required: true },
    sede: { type: mongoose.Schema.Types.ObjectId, ref: 'Sede', required: true },
    descripcion: { type: String, required: true },
    fechaIngreso: { type: Date, required: true },
    fechaUltimoMantenimiento: { type: Date, required: true },
    estado: { type: Number, required: true },
})

export default mongoose.model('Maquina', MaquinaSchema);