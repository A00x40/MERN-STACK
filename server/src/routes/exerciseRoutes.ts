import express from 'express';
const Router = express.Router();

import { getAllExercises , addNewExercise , getOneExercise , deleteOneExercise , updateOneExercise} from '../controllers/exerciseController';

Router.route('/').get(getAllExercises);
Router.route('/add').post(addNewExercise);

Router.route('/:id').get(getOneExercise).delete(deleteOneExercise);
Router.route('/update/:id').post(updateOneExercise);
module.exports = Router;


