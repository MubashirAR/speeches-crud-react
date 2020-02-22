import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import createDB from './indexed-db-context'

async function render() {
  try {
    let db = await createDB();
  } catch (error) {
    console.log('We got storage issues m8');
    console.error(error);
  }
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
render();
