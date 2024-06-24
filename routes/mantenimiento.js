import { Router } from "express";
import mantenimientoController from "../controllers/mantenimiento.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import mantenimientoHelper from "../helpers/mantenimiento.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], mantenimientoController.listarMantenimientos);

router.get("/:id", [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(mantenimientoHelper.validarId),
    validarCampos
], mantenimientoController.listarMantenimiento);

router.post("/", [
    validarJWT,
    check("maquina_id", "El id de la máquina es obligatorio").not().isEmpty(),
    check("maquina_id", "El id de la máquina debe ser un ID válido").isMongoId(),
    check("fecha_mantenimiento", "La fecha de mantenimiento es obligatoria").not().isEmpty(),
    check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    check("responsable", "El responsable es obligatorio").not().isEmpty(),
    check("precio_mantenimiento", "El precio es obligatorio").not().isEmpty(),
    check("precio_mantenimiento", "El precio debe ser un número").isNumeric(),
    validarCampos
], mantenimientoController.crearMantenimiento);

router.put("/:id", [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(mantenimientoHelper.validarId),
    check("maquina_id", "El id de la máquina es obligatorio").not().isEmpty(),
    check("maquina_id", "El id de la máquina debe ser un ID válido").isMongoId(),
    check("fecha_mantenimiento", "La fecha de mantenimiento es obligatoria").not().isEmpty(),
    check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    check("responsable", "El responsable es obligatorio").not().isEmpty(),
    check("precio_mantenimiento", "El precio es obligatorio").not().isEmpty(),
    check("precio_mantenimiento", "El precio debe ser un número").isNumeric(),
    validarCampos
], mantenimientoController.modificarMantenimiento);

export default router;