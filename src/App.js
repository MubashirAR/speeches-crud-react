import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ListSpeeches from './modules/speeches/pages/list';
import allRoutes from './modules/routes';
import AppHeader from './modules/main/header';
import createDB from './indexed-db-context'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader></AppHeader>
        <Router>
          <Switch>
            <Route path="/" exact>
              <ListSpeeches></ListSpeeches>
            </Route>
            {allRoutes}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
createDB();
export default App;
