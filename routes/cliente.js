import { Router } from "express";
import ClienteController from "../controllers/cliente.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import clienteHelper from "../helpers/cliente.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.post("/",[
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("fechaNacimiento", "La fecha de nacimiento es obligatoria").not().isEmpty(),
    check("edad", "La edad es obligatoria").not().isEmpty(),
    check("fechaIngreso", "La fecha de ingreso es obligatoria").not().isEmpty(),
    check("documento", "El documento es obligatorio").not().isEmpty(),
    check("direccion", "La dirección es obligatoria").not().isEmpty(),
    check("telefono", "El teléfono es obligatorio").not().isEmpty(),
    check("limitaciones", "Las limitaciones son obligatorias").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    check("plan", "El plan es obligatorio").not().isEmpty(),
    // check("foto", "La foto es obligatoria").not().isEmpty(),
    validarCampos
], ClienteController.crearCliente);

router.put("/:id", [
    validarJWT,
    check("id", "Se necesita un mongoid valido").isMongoId(),
    check("id").custom(clienteHelper.validarId),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("fechaNacimiento", "La fecha de nacimiento es obligatoria").not().isEmpty(),
    check("edad", "La edad es obligatoria").not().isEmpty(),
    check("fechaIngreso", "La fecha de ingreso es obligatoria").not().isEmpty(),
    check("documento", "El documento es obligatorio").not().isEmpty(),
    check("direccion", "La dirección es obligatoria").not().isEmpty(),
    check("telefono", "El teléfono es obligatorio").not().isEmpty(),
    check("limitaciones", "Las limitaciones son obligatorias").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    check("plan", "El plan es obligatorio").not().isEmpty(),
    // check("foto", "La foto es obligatoria").not().isEmpty(),
    validarCampos
], ClienteController.modificarCliente);

router.put("/activar/:id", [
    validarJWT,
    check("id", "Se necesita un mongoid valido").isMongoId(),
    check("id").custom(clienteHelper.validarId),
    validarCampos
], ClienteController.activarCliente);

router.put("/inactivar/:id", [
    validarJWT,
    check("id", "Se necesita un mongoid valido").isMongoId(),
    check("id").custom(clienteHelper.validarId),
    validarCampos
], ClienteController.inactivarCliente);

router.get("/", [
    validarJWT,
    validarCampos
],ClienteController.listarClientes);

router.get("/:id", [
    validarJWT,
    check("id", "Se necesita un mongoid valido").isMongoId(),
    check("id").custom(clienteHelper.validarId),
    validarCampos
], ClienteController.listarCliente);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], ClienteController.listarClientesActivos);
router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], ClienteController.listarClientesInactivos);
router.get("/listar-por-plan/:id", [
    validarJWT,
    check("id", "Se necesita un mongoid valido").isMongoId(),
    check("id").custom(clienteHelper.validarPlan),
    validarCampos
], ClienteController.listarPorPlan);

router.get("/total/clientes",[
    validarJWT,
    validarCampos
], ClienteController.totalClientes);

router.get("/listar/cumpleaños",[
    validarJWT,
    validarCampos
], ClienteController.listarCumpleaños);

router.get("/listar/seguimiento/:id",[
    validarJWT,
    check("id", "Se necesita un mongoid valido").isMongoId(),
    check("id").custom(clienteHelper.validarId),
    validarCampos

], ClienteController.listarSeguimiento);

export default router;