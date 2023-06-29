import { Request, Response, Router } from 'express';
import libraryRouter from './library.routes';

const router = Router();

router.get('/health', (req:Request, res:Response) => res.send('Im alive'));
router.use(libraryRouter);

export default router;