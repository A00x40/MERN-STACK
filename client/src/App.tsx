import React from 'react';
import { Route , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';
import ExerciseList from './components/ExerciseList';

function App() {
  return (
    <div>
      <NavBar/>
      <br/>
      <Switch>
        <Route path='/' exact component={ExerciseList}/>
        <Route path='/user' exact component={CreateUser}/>
        <Route path='/create' exact component={CreateExercise}/>
      </Switch>
      
    </div>
  );
}

export default App;
