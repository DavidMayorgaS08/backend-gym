import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    edad: { type: Number, required: true },
    fechaIngreso: { type: Date, required: true },
    documento: { type: Number, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true },
    limitaciones: { type: String, required: true },
    estado: { type: Number, required: true },
    plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
    // foto: { type: String, required: true },
    seguimiento: [{
        fecha: { type: Date, required: true },
        peso: { type: Number, required: true },
        altura: { type: Number, required: true },
        imc: { type: Number, required: true },
        medidaBrazo: { type: Number, required: true },
        medidaPierna: { type: Number, required: true },
        medidaCintura: { type: Number, required: true },
    }] 
})

export default mongoose.model('Cliente', ClienteSchema);