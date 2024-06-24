import mongoose from "mongoose";

const SedeSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    codigo: { type: String, required: true },
    horario: { type: String, required: true },
    ciudad: { type: String, required: true },
    telefono: { type: Number, required: true },
})

export default mongoose.model('Sede', SedeSchema);