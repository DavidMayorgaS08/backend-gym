import Usuario from '../models/usuario.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const usuarioController = {
    // crear usuario
    async crearUsuario(req, res) {
        const body = req.body;
        body.contrasena = bcryptjs.hashSync(body.contrasena, 10);
        try {
            const usuario = await Usuario.create(body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear usuario',
                error
            });
        }
    },
    // Modificar usuario
    async modificarUsuario(req, res) {
        const _id = req.params.id;
        const body = req.body;
        if (body.contrasena) {
            body.contrasena = bcryptjs.hashSync(body.contrasena, 10);
        }
        try {
            const usuario = await Usuario.findByIdAndUpdate(_id, body, { new: true });
            res.json(usuario);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al modificar usuario',
                error
            });
        }
    },
    // Activar usuario
    async activarUsuario(req, res) {
        const _id = req.params.id;
        try {
            const usuario = await Usuario.findByIdAndUpdate(_id, { estado: 1 }, { new: true });
            res.json(usuario);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al activar usuario',
                error
            });
        }
    },
    // Inactivar usuario
    async inactivarUsuario(req, res) {
        const _id = req.params.id;
        try {
            const usuario = await Usuario.findByIdAndUpdate(_id, { estado: 0 }, { new: true });
            res.json(usuario);
        }
        catch (error) {
            res.status(500).json({
                mensaje: 'Error al inactivar usuario',
                error
            });
        }
    },
    // Listar todos los usuarios
    async listarUsuarios(req, res) {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    },
    // Listar usuario por id
    async listarUsuario(req, res) {
        const _id = req.params.id;
        const usuario = await Usuario.findById(_id);
        res.json(usuario);
    },
    // Listar usuario activos
    async listarUsuariosActivos(req, res) {
        const usuarios = await Usuario.find({ estado: 1 });
        res.json(usuarios);
    },
    // Listar usuario inactivos
    async listarUsuariosInactivos(req, res) {
        const usuarios = await Usuario.find({ estado: 0 });
        res.json(usuarios);
    },
    // Listar usuario por rol
    async listarUsuariosPorRol(req, res) {
        const rol = req.params.rol;
        const usuarios = await Usuario.find({ rol });
        res.json(usuarios);
    },
    // Iniciar sesión
    async iniciarSesion(req, res) {
        const { correo, contrasena } = req.body;
        try {
            // Verificar si el correo existe
            const usuario = await Usuario.findOne({ correo });
            if (!usuario) {
                return res.status(400).json({
                    mensaje: 'Correo o contraseña incorrectos'
                });
            }
            // Verificar si el usuario está activo
            if (usuario.estado === 0) {
                return res.status(400).json({
                    mensaje: 'Correo o contraseña incorrectos'
                });
            }
            // Verificar la contraseña
            const validarPassword = await bcryptjs.compare(contrasena, usuario.contrasena);
            if (!validarPassword) {
                return res.status(400).json({
                    mensaje: 'Correo o contraseña incorrectos'
                });
            }
            // Generar el token
            const token = jwt.sign({
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo,
                rol: usuario.rol
            }, process.env.SECRETORPRIVATEKEY, { expiresIn: '4h' });
            res.json({
                usuario,
                token
            });
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al iniciar sesión',
                error
            });
        }
    }
};

export default usuarioController;
