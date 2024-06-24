import { Router } from 'express';
import IngresoController from '../controllers/ingreso.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import ingresoHelper from '../helpers/ingreso.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], IngresoController.listarIngresos);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(ingresoHelper.validarId),
    validarCampos

], IngresoController.listarIngreso);

router.post('/', [
    validarJWT,
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('sede', 'La sede es obligatoria').not().isEmpty(),
    validarCampos
], IngresoController.crearIngreso);

router.put('/:id', [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(ingresoHelper.validarId),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('sede', 'La sede es obligatoria').not().isEmpty(),
    validarCampos
], IngresoController.modificarIngreso);

export default router;