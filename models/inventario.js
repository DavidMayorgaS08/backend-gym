import mongoose from "mongoose";

const InventarioSchema = new mongoose.Schema({
    codigo: { type: String, required: true },
    descripcion: { type: String, required: true },
    valor: { type: Number, required: true },
    cantidad: { type: Number, required: true },
})

export default mongoose.model('Inventario', InventarioSchema);