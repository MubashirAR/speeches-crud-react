import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import DBContext, { createDB, getItems, addItem } from './indexed-db-context';

async function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}
render();
