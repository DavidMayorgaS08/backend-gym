import { Router } from 'express';
import InventarioController from '../controllers/inventario.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import inventarioHelper from '../helpers/inventario.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    // validarJWT,
    check('codigo', 'El código es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    check('valor', 'El valor es obligatorio').not().isEmpty(),
    check('valor', 'El valor debe ser un número').isNumeric(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty(),
    check('cantidad', 'La cantidad debe ser un número').isNumeric(),
], InventarioController.listarInventarios);

router.get('/:id', [ 
    // validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(inventarioHelper.validarId),
    validarCampos
], InventarioController.listarInventario);

router.get('/total/inventario',[
    // validarJWT,
    validarCampos
], InventarioController.totalInventario);

router.post('/', [
    // validarJWT,
    check('codigo', 'El código es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    check('valor', 'El valor es obligatorio').not().isEmpty(),
    check('valor', 'El valor debe ser un número').isNumeric(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty(),
    check('cantidad', 'La cantidad debe ser un número').isNumeric(),
    validarCampos
], InventarioController.crearInventario);

router.put('/:id', [
    // validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(inventarioHelper.validarId),
    check('codigo', 'El código es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    check('valor', 'El valor es obligatorio').not().isEmpty(),
    check('valor', 'El valor debe ser un número').isNumeric(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty(),
    check('cantidad', 'La cantidad debe ser un número').isNumeric(),
    validarCampos
], InventarioController.modificarInventario);

export default router;