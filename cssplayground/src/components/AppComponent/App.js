import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NeonButton } from '../index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/neonbutton" render={() => <NeonButton />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
