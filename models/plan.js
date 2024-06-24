import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema({
    codigo: { type: String, required: true },
    descripcion: { type: String, required: true },
    valor: { type: Number, required: true },
    dias: { type: Number, required: true },
    estado: { type: Number, required: true },
})

export default mongoose.model('Plan', PlanSchema); 