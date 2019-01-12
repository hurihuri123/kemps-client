import React, { Component } from 'react';
import './App.css';
import Stores from "./consts/Stores";
import rootStores from "./stores";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router";
import Home from "./components/home/home";

interface IProps {
}


class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    const user = rootStores[Stores.USER];

  }
  render() {
    return (
        <Router>
          <Route>
            <Home/>
          </Route>
        </Router>
    );
  }
}

export default App;
