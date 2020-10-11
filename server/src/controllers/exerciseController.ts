import express from 'express';
import Exercise from '../models/exerciseModel';

export const getAllExercises = (_req: express.Request, res: express.Response) => {
    Exercise.find()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
};
  
export const addNewExercise = (req: express.Request, res: express.Response) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
  
    const newExercise = new Exercise({
      username,
      description,
      duration,
      date,
    });
  
    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
};
  
export const getOneExercise = (req: express.Request, res: express.Response) => {
    Exercise.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
};
  
export const deleteOneExercise =(req: express.Request, res: express.Response) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
};
  
export const updateOneExercise = (req: express.Request, res: express.Response) => {
    Exercise.findById(req.params.id)
      .then(exercise => {
        exercise!.username = req.body.username;
        exercise!.description = req.body.description;
        exercise!.duration = Number(req.body.duration);
        exercise!.date = new Date(req.body.date);
  
        exercise!.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
};
  

  