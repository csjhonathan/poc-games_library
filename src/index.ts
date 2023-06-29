import express, { json } from 'express';
import router from '@/routes/index.routes';
import 'dotenv/config';
import errorHandler  from '@/middlewares/errorHandler';
import 'express-async-errors';
const app = express();

app.use(json());
app.use(router);
app.use(errorHandler);


const port : number = Number(process.env.PORT) || 5000;

app.listen(port, () => console.log(`Server is live on http://localhost:${port}`));