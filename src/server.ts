import express from 'express';
import config from './config/config'
import router from './routes/index';
import cors from 'cors';
import { errorHandler } from './middleware/error-handler';
import morgan from 'morgan';
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(router);
app.use(errorHandler);

const PORT = config.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})