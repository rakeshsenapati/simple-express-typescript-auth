import express from 'express'
import * as authController from '../controllers/auth.controller';
import * as validation from '../middleware/validation/user-validation';
const router = express.Router();

router.post('/login', validation.loginValidation, authController.login);
router.post('/register', validation.registerValidation, authController.register);

export default router;