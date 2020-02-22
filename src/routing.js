import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListSpeeches from './modules/speeches/pages/list';
import allRoutes from "./modules/routes";
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ListSpeeches></ListSpeeches>
        </Route>
        {...allRoutes}
      </Switch>
    </Router>
  );
}
export default AppRouter