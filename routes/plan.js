import { Router } from "express";
import PlanController from "../controllers/plan.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import planHelper from "../helpers/plan.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    // validarJWT,
    validarCampos
], PlanController.listarPlanes);

router.get("/:id", [
    // validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(planHelper.validarId),
    validarCampos
], PlanController.listarPlan);

router.get("/listar/activas",[
    // validarJWT,
    validarCampos
], PlanController.listarPlanesActivos);

router.get("/listar/inactivas",[
    // validarJWT,
    validarCampos
], PlanController.listarPlanesInactivos);

router.post("/", [
    // validarJWT,
    check("codigo", "El código es obligatorio").not().isEmpty(),
    check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    check("valor", "El precio es obligatorio").not().isEmpty(),
    check("valor", "El precio debe ser un número").isNumeric(),
    check("dias", "Los días son obligatorios").not().isEmpty(),
    check("dias", "Los días deben ser un número").isNumeric(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], PlanController.crearPlan);

router.put("/:id", [
    // validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(planHelper.validarId),
    check("codigo", "El código es obligatorio").not().isEmpty(),
    check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    check("valor", "El precio es obligatorio").not().isEmpty(),
    check("valor", "El precio debe ser un número").isNumeric(),
    check("dias", "Los días son obligatorios").not().isEmpty(),
    check("dias", "Los días deben ser un número").isNumeric(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], PlanController.modificarPlan);

router.put("/activar/:id", [
    // // validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(planHelper.validarId),
    validarCampos
], PlanController.activarPlan);

router.put("/inactivar/:id", [
    // // validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(planHelper.validarId),
    validarCampos
], PlanController.inactivarPlan);

export default router;
