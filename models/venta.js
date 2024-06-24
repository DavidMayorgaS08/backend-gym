import mongoose from "mongoose";

const VentaSchema = new mongoose.Schema({
    fecha: { type: Date, required: true },
    codigo_producto: { type: String, required: true },
    valor: { type: Number, required: true },
    cantidad: { type: Number, required: true },
})

export default mongoose.model('Venta', VentaSchema);                