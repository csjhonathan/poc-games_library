import express, { json } from 'express';
import router from '@/routes/index.routes';
import { errorHandler } from '@/middlewares/errorHandler';
const app = express();

app.use(json());
app.use(router);
app.use(errorHandler);

export default app;