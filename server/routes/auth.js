import Router from 'express';
import { login } from '../controllers/auth.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validaciones.js';


const router = Router();

router.post('/login', [
    check('nickname', 'El username es obligatorio.').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login);

export default router;