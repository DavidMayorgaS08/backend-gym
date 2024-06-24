import { Router } from "express";
import UsuarioController from "../controllers/usuario.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import usuarioHelper from "../helpers/usuario.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    // validarJWT,
    validarCampos
], UsuarioController.listarUsuarios);

router.get("/:id",[
    // validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(usuarioHelper.validarId),
    validarCampos
], UsuarioController.listarUsuario);

router.get("/listar/activos",[
    // validarJWT,
    validarCampos
], UsuarioController.listarUsuariosActivos);

router.get("/listar/inactivos",[
    // validarJWT,
    validarCampos
], UsuarioController.listarUsuariosInactivos);

router.get("/listar/rol/:rol",[
    // validarJWT,
    check('rol', 'El rol no es válido').isNumeric(),
    validarCampos
], UsuarioController.listarUsuariosPorRol);

router.post("/", [
    // // validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('sede', 'La sede es obligatoria').not().isEmpty(),
    check('sede', 'La sede no es válida').isMongoId(),
    check('sede').custom(usuarioHelper.existeSede),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    check('contrasena', 'La contraseña es obligatoria').not().isEmpty(),
    check('telefono', 'El teléfono es obligatorio').not().isEmpty(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    check('rol', 'El rol no es válido').custom(usuarioHelper.existeRol),
    validarCampos
], UsuarioController.crearUsuario);

router.put("/:id", [
    // validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(usuarioHelper.validarId),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('sede', 'La sede es obligatoria').not().isEmpty(),
    check('sede', 'La sede no es válida').isMongoId(),
    check('sede').custom(usuarioHelper.existeSede),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    check('contrasena', 'La contraseña es obligatoria').not().isEmpty(),
    check('telefono', 'El teléfono es obligatorio').not().isEmpty(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    check('rol', 'El rol no es válido').custom(usuarioHelper.existeRol),
    validarCampos
], UsuarioController.modificarUsuario);

router.put("/activar/:id", [
    // // validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(usuarioHelper.validarId),
    validarCampos
], UsuarioController.activarUsuario);

router.put("/inactivar/:id", [
    // // validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(usuarioHelper.validarId),
    validarCampos
], UsuarioController.inactivarUsuario);

//ruta de iniciar sesion

router.post("/iniciar-sesion", [
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    check('contrasena', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], UsuarioController.iniciarSesion);

export default router;      
