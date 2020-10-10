import React, { Suspense } from 'react';
import { Switch , Route } from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
    

      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    
    </Suspense>
  );
}

export default App;
