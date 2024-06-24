import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    sede: { type: mongoose.Schema.Types.ObjectId, ref: 'Sede', required: true },
    correo: { type: String, required: true },
    contrasena: { type: String, required: true },
    telefono: { type: Number, required: true },
    estado: { type: Number, required: true },
    rol: { type: Number, required: true },
})

export default mongoose.model('Usuario', UsuarioSchema);