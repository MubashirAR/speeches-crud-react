import React from "react";
import { Route } from "react-router-dom";
import ListSpeeches from "./pages/list";
import AddSpeech from "./pages/add";
export default [
  <Route path="/speech/list" exact>
    <ListSpeeches></ListSpeeches>
  </Route>,
  <Route path="/speech/add" exact>
    <AddSpeech></AddSpeech>
  </Route>,
];
