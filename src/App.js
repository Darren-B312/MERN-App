import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Read from './components/read';
import CreateSubject from './components/createSubject';
import CreateAssessment from './components/createAssessment';
import UpdateSubject from './components/updateSubject';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="light">
            <Nav.Link href="/">myGrades</Nav.Link>
            <Nav.Link href="/createSubject">New Module</Nav.Link>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Read} />
            <Route path="/createSubject" component={CreateSubject} />
            <Route path="/createAssessment/:id" component={CreateAssessment}/>
            <Route path="/updateSubject/:id" component={UpdateSubject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
