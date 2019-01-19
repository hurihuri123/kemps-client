import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import {User} from "../../types/user";
import MainGame from "../mainGame/index";
import MainHome from "../mainHome/index";

interface IProps {
    user: User;
}

interface IState {
    inGame: boolean;
}

class MainApp extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            inGame: false
        };
    }

    handler = (status: boolean) => {
        this.setState({
            inGame: status
        });
    };


    render() {
        return (
            <Router>
                <Route>
                    {this.state.inGame ?
                        <MainGame user={this.props.user} handler={this.handler}/> :
                        <MainHome user={this.props.user} handler={this.handler}/>
                    }
                </Route>
            </Router>

            );
    }
}

export default MainApp;
