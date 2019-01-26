import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import {User} from "../../types/user";
import Home from "./home/index";

interface IProps {
    user: User;
    gameStateHandler: any;
    roomStateHandler: any;
}

interface IState {
}

class MainHome extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);
    }



    render() {
        return (
            <Router>
                <Route>
                    <Home user={this.props.user} roomStateHandler={this.props.roomStateHandler} gameStateHandler={this.props.gameStateHandler}/>
                </Route>
            </Router>

        );
    }
}

export default MainHome;
