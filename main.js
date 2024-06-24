import express from 'express';
import 'dotenv/config';
import dbConexion from './database/cnxmongoose.js';
import cliente from './routes/cliente.js';
import ingreso from './routes/ingreso.js';
import inventario from './routes/inventario.js';
import mantenimiento from './routes/mantenimiento.js';
import maquina from './routes/maquina.js';
import pago from './routes/pago.js';
import plan from './routes/plan.js';
import sede from './routes/sede.js';
import usuario from './routes/usuario.js';
import venta from './routes/venta.js';
import cors from 'cors';
import cron from 'node-cron';
import usuarioController from './controllers/usuario.js';
import planController from './controllers/plan.js';
import clienteController from './controllers/cliente.js';

const app = express();

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));
app.use(express.static('public'))
app.use(express.json());
app.use('/cliente', cliente);
app.use('/ingreso', ingreso);
app.use('/inventario', inventario);
app.use('/mantenimiento', mantenimiento);
app.use('/maquina', maquina);
app.use('/pago', pago);
app.use('/plan', plan);
app.use('/sede', sede);
app.use('/usuario', usuario);
app.use('/venta', venta);

// cron.schedule('0 0 * * * *', async () => {
//     try {
//         const clientes = await clienteController.getclientes();
//         for (const cliente of clientes) {
//             const plan = await planController.getPlanById(cliente.planId);
//             if (plan && plan.fechaFin <= new Date()) {
//                 cliente.activo = false;
//                 await clienteController.modificarCliente(cliente);
//             }
//         }
//         console.log('El trabajo cron se ejecutó correctamente');
//     } catch (error) {
//         console.error('Error al ejecutar el trabajo cron:', error);
//     }
// });
const port = process.env.PORT || 4000;

app.listen(process.env.PORT, function () {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    dbConexion();
});

