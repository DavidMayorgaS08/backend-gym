import { Router } from "express";
import pagoController from '../controllers/pago.js'
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import pagoHelper from '../helpers/pago.js'
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], pagoController.listarPagos);

router.get("/:id", [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(pagoHelper.validarId),
    validarCampos
], pagoController.listarPago);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], pagoController.listarActivos);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], pagoController.listarInactivos);

router.get("/total-pagos-plan/:id", [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(pagoHelper.validarIdPlan),
    validarCampos
], pagoController.totalPagosPlan);

router.get("/total-pagos-cliente/:id", [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(pagoHelper.validarIdCliente),
    validarCampos
], pagoController.totalPagosCliente);

router.put("/activar/:id", [
    // validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(pagoHelper.validarId),
    validarCampos
], pagoController.activarPago);

router.put("/inactivar/:id", [
    // validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(pagoHelper.validarId),
    validarCampos
], pagoController.inactivarPago);

router.post("/", [
    validarJWT,
    check("cliente_id", "El cliente es obligatorio").not().isEmpty(),
    check("cliente_id", "El cliente debe ser un ID válido").isMongoId(),
    check("plan", "El plan es obligatorio").not().isEmpty(),
    check("plan", "El plan debe ser un ID válido").isMongoId(),
    check("fecha", "La fecha es obligatoria").not().isEmpty(),
    check("fecha", "La fecha debe ser un string").isString(),
    check("valor", "El valor es obligatorio").not().isEmpty(),
    check("valor", "El valor debe ser un número").isNumeric(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], pagoController.crearPago);

router.put("/:id", [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(pagoHelper.validarId),
    check("cliente_id", "El cliente es obligatorio").not().isEmpty(),
    check("cliente_id", "El cliente debe ser un ID válido").isMongoId(),
    check("plan", "El plan es obligatorio").not().isEmpty(),
    check("plan", "El plan debe ser un ID válido").isMongoId(),
    check("fecha", "La fecha es obligatoria").not().isEmpty(),
    check("fecha", "La fecha debe ser un string").isString(),
    check("valor", "El valor es obligatorio").not().isEmpty(),
    check("valor", "El valor debe ser un número").isNumeric(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], pagoController.modificarPago);

// total de pagos entre fechas
router.get("/total-pagos-entre-fechas",[
    validarJWT,
], pagoController.totalPagosEntreFechas);

export default router;