import { Request, Response, Router } from 'express';
import libraryRouter from './library.routes';
import gamesRouter from './games.routes';
import platformsRouter from './platforms.routes';
import gradesRouter from './grades.routes';
import usersRouter from './users.routes';

const router = Router();

router.get('/health', (req:Request, res:Response) => res.send('Im alive'));
router.use(libraryRouter);
router.use(gamesRouter);
router.use(platformsRouter);
router.use(usersRouter);
router.use(gradesRouter);

export default router;