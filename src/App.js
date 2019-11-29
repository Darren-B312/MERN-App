import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Read from './components/read';
import CreateSubject from './components/createSubject';
import CreateAssessment from './components/createAssessment';
import UpdateSubject from './components/updateSubject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Read} />
          <Route path="/createSubject" component={CreateSubject} /> 
          <Route path="/createAssessment/:id" component={CreateAssessment}/> 
          <Route path="/updateSubject/:id" component={UpdateSubject}/>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
