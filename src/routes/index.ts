import express from 'express'
import authRouter from './auth.routes';
import userRouter from './user.routes';
import publicRouter from './public.routes';
const router = express.Router();

router.use('/', publicRouter);
router.use('/auth', authRouter);
router.use('/users', userRouter);

export default router;
