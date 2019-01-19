import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import './App.css';
import Stores from "./consts/Stores";
import rootStores from "./stores";
import MainApp from "./components/mainApp/index";
import Login from "./components/login/login";

interface IProps {
}

interface IState {
    isAuthenticated: boolean;
    isLoading: boolean
}

class App extends React.Component<IProps,IState> {
  constructor(props: IProps) {
    super(props);
      this.state = {
          isAuthenticated: true,
          isLoading: false,
      }

  }
  render() {
    return (
        <Router>
          <Route>
              {this.state.isAuthenticated ?
                  <MainApp user={rootStores[Stores.USER].getUser()}/>
                  : <Login/>
              }
          </Route>
        </Router>
    )
  }
}

export default App;
