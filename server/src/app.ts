import express , { Application } from "express";
import cors from "cors";

const app : Application = express();

app.use(express.json());
app.use(cors());

const exercisesRouter = require('./routes/exerciseRoutes');
const usersRouter = require('./routes/userRoutes');

app.use('/users' , usersRouter);
app.use('/exercises' , exercisesRouter);

export default app;