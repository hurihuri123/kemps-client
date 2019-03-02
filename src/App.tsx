import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import './App.scss';
import MainApp from "./components/mainApp/index";
import MainAuth from "./components/mainAuth/index";

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
