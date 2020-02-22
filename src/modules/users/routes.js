import React from 'react';
import {  Route } from 'react-router-dom';
import AddSpeech from './pages/add';

export default [
  <Route path="/user/add" exact>
    <AddSpeech></AddSpeech>
  </Route>,
];
