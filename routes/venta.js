import { Router } from "express";
import VentaController from "../controllers/venta.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import ventaHelper from "../helpers/venta.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    // validarJWT,
    validarCampos
], VentaController.listarVentas);

router.get("/:id", [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(ventaHelper.validarId),
    validarCampos
], VentaController.listarVenta);

router.post("/", [
    // validarJWT,
    check("fecha", "La fecha es obligatoria").not().isEmpty(),
    check("codigo_producto", "El código del producto es obligatorio").not().isEmpty(),
    check("valor", "El valor unitario es obligatorio").not().isEmpty(),
    check("valor", "El valor unitario debe ser un número").isNumeric(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad debe ser un número").isNumeric(),
    validarCampos
], VentaController.crearVenta);

router.put("/:id", [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(ventaHelper.validarId),
    check("fecha", "La fecha es obligatoria").not().isEmpty(), 
    check("codigo_producto", "El código del producto es obligatorio").not().isEmpty(),
    check("valor", "El valor unitario es obligatorio").not().isEmpty(),
    check("valor", "El valor unitario debe ser un número").isNumeric(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad debe ser un número").isNumeric(),
    validarCampos
], VentaController.modificarVenta);

export default router;