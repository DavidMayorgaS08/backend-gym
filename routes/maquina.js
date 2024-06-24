import { Router } from "express";
import MaquinaController from "../controllers/maquina.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import maquinaHelper from "../helpers/maquina.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], MaquinaController.listarMaquinas);

router.get("/:id", [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(maquinaHelper.validarId),
    validarCampos
], MaquinaController.listarMaquina);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], MaquinaController.listarMaquinasActivas);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], MaquinaController.listarMaquinasInactivas);

router.post("/", [
    validarJWT,
    check("codigo", "El código es obligatorio").not().isEmpty(),
    check("sede", "La sede es obligatoria").not().isEmpty(),
    check("sede", "La sede debe ser un ID válido").isMongoId(),
    check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    check("fechaIngreso", "La fecha de ingreso es obligatoria").not().isEmpty(),
    check("fechaUltimoMantenimiento", "La fecha de último mantenimiento es obligatoria").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    validarCampos
], MaquinaController.crearMaquina);

router.put("/:id", [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(maquinaHelper.validarId),
    check("codigo", "El código es obligatorio").not().isEmpty(),
    check("sede", "La sede es obligatoria").not().isEmpty(),
    check("sede", "La sede debe ser un ID válido").isMongoId(),
    check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    check("fechaIngreso", "La fecha de ingreso es obligatoria").not().isEmpty(),
    check("fechaUltimoMantenimiento", "La fecha de último mantenimiento es obligatoria").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    validarCampos
], MaquinaController.modificarMaquina);

router.put("/activar/:id", [
    // validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(maquinaHelper.validarId),
    validarCampos
], MaquinaController.activarMaquina);

router.put("/inactivar/:id", [
    // validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(maquinaHelper.validarId),
    validarCampos
], MaquinaController.inactivarMaquina);

export default router;