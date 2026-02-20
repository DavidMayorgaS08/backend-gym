import mongoose from "mongoose";

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.CNX_MONGO);
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

export default dbConection;