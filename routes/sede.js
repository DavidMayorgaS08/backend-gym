import { Router } from "express";
import SedeController from "../controllers/sede.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import sedeHelper from "../helpers/sede.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    // validarJWT,
    validarCampos
], SedeController.listarSedes);

router.get("/:id", [
    // validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(sedeHelper.validarId),
    validarCampos
], SedeController.listarSede);

router.post("/", [
    // validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("direccion", "La dirección es obligatoria").not().isEmpty(),
    check("codigo", "El código es obligatorio").not().isEmpty(),
    check("horario", "El horario es obligatorio").not().isEmpty(),
    check("ciudad", "La ciudad es obligatoria").not().isEmpty(),
    check("telefono", "El teléfono es obligatorio").not().isEmpty(),
    validarCampos
], SedeController.crearSede);

router.put("/:id", [
    // validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(sedeHelper.validarId),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("direccion", "La dirección es obligatoria").not().isEmpty(),
    check("codigo", "El código es obligatorio").not().isEmpty(),
    check("horario", "El horario es obligatorio").not().isEmpty(),
    check("ciudad", "La ciudad es obligatoria").not().isEmpty(),
    check("telefono", "El teléfono es obligatorio").not().isEmpty(),
    validarCampos
], SedeController.modificarSede);

export default router;