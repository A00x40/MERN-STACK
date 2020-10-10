import express from 'express';

const Router = express.Router();

import { getAllUsers , addNewUser } from '../controllers/userController';


Router.route('/').get(getAllUsers);
  
Router.route('/add').post(addNewUser);
  
module.exports = Router;

