import express from 'express'
import * as userController from '../controllers/user.controller';
import { verifyAccessToken } from '../middleware/toker-validator';
const router = express.Router();

router.get('/', verifyAccessToken, userController.getUsers);
router.get('/:id', verifyAccessToken, userController.getUserById);

export default router;