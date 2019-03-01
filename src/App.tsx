import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import './App.css';
import {rootStores, Stores} from "./stores";
import MainApp from "./components/mainApp/index";
import MainAuth from "./components/mainAuth/index";
import UserStore from "./stores/UserStore";
import {User} from "./types/user";
import {webSocketEvents} from "./stores/SocketStore";
import LoggerService from "./services/LoggerService";

interface IProps {
}

interface IState {
    isAuthenticated: boolean;
}

class App extends React.Component<IProps,IState> {
  constructor(props: IProps) {
    super(props);
      this.state = {
          isAuthenticated: false,
      };
  }


    setAuthenticated = (status: boolean) => {
        this.setState({
            isAuthenticated: status
        });
    };

  render() {
      const {isAuthenticated} = this.state;
    return (
        <Router>
          <Route>
              {isAuthenticated ?
                  <MainApp/>
                  : <MainAuth setAuthenticated={this.setAuthenticated} />
              }
          </Route>
        </Router>
    )
  }
}

export default App;
