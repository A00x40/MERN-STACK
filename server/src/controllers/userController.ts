import express from 'express';
import User from '../models/userModel';

export const getAllUsers = (_req: express.Request , res: express.Response) => {
    User.find()
      .then((users: any) => res.json(users))
      .catch((err: string) => res.status(400).json('Error: ' + err));
} 

export const addNewUser = async (req: express.Request , res: express.Response) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          newUser
        }
      });
    }
    catch(err)
    {
      res.status(400).json({
        status:'fail',
        data: {
          Error:err
        }
      });
    } 
};
