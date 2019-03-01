import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import {User} from "../../types/user";
import Home from "./home/index";
import {observer} from "mobx-react";

interface IProps {
    user: User;
    gameStateHandler: any;
}

interface IState {
}

@observer
class MainHome extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);
    }



    render() {
        return (
            <Router>
                <Route>
                    <Home user={this.props.user} gameStateHandler={this.props.gameStateHandler}/>
                </Route>
            </Router>

        );
    }
}

export default MainHome;
