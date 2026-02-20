import app from './main.js';
import env from './config/env.js';
import dbconnexion from './config/db.js';

app.listen(env.port, async () => {
    console.log(`Servidor escuchando en el puerto ${env.port}`);
    dbconnexion();
});