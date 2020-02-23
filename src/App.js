import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ListSpeeches from './modules/speeches/pages/list';
import allRoutes from './modules/routes';
import AppHeader from './modules/main/header';
import DBContext, { createDB, getItems, addItem } from './indexed-db-context';
class App extends Component {
  state = {
    speeches: [],
  };
  addItemCustom = async (data, storeName) => {
    try {
      await addItem(data, storeName);
      let resp = await getItems(storeName);
      this.setState({
        speeches: resp,
      });
      
    } catch (error) {
      console.log(error)
    }
  };
  constructor(props) {
    super(props);
    createDB()
      .then(async _ => {
        this.setState({
          speeches: await getItems('speeches'),
        });
      })
      .catch(e => {
        console.log('error creating db');
        console.error(e);
      });
  }
  render() {
    return (
      <DBContext.Provider value={{ speeches: this.state.speeches, getItems, addItem: this.addItemCustom }}>
        <React.Fragment>
          <Router>
            <AppHeader></AppHeader>
            <Switch>
              <Route path="/" exact>
                <ListSpeeches></ListSpeeches>
              </Route>
              {allRoutes}
            </Switch>
          </Router>
        </React.Fragment>
      </DBContext.Provider>
    );
  }
}
export default App;
