import express from 'express';
import User from '../models/userModel';

export const getAllUsers = (_req: express.Request , res: express.Response) => {
    User.find()
      .then((users: any) => res.json(users))
      .catch((err: string) => res.status(400).json('Error: ' + err));
} 

export const addNewUser = (req: express.Request , res: express.Response) => {
    const username = req.body.username;
  
    const newUser = new User({username});
  
    newUser.save()
      .then(() => res.json('User added!'))
      .catch((err: string) => res.status(400).json('Error: ' + err));
};
