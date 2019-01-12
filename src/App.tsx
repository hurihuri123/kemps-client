import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Stores from "./consts/Stores";
import rootStores from "./stores";

interface IProps {
}


class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    const user = rootStores[Stores.USER];

  }
  render() {
    return (
      <div className="App">
        <Header name={'huri'}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
