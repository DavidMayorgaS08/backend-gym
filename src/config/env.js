import dotenv from 'dotenv';

dotenv.config();

function required(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Falta la variable de entorno ${key}`);
    }
    return value;
}

const env = {
    port: (() => {
        const port = Number(required('PORT'));
        if (Number.isNaN(port)) {
            throw new Error('La variable de entorno PORT debe ser un número');
        }
        return port;
    })(),

    mongoUri: required('CNX_MONGO'),


    secret: (() => {
        const secret = required('SECRET_OR_PRIVATE_KEY');
        if (secret.length < 16) {
            throw new Error('La variable de entorno SECRET_OR_PRIVATE_KEY debe tener al menos 16 caracteres');
        }
        return secret;
    })(),
};

export default env;