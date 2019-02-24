import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import {User} from "../../types/user";
import MainGame from "../mainGame/index";
import MainHome from "../mainHome/index";
import {Room} from "../../types/room";

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

    gameStateHandler = (status: boolean) => {
        this.setState({
            inGame: status
        });
    };


    render() {
        return (
            <Router>
                <Route>
                    {this.state.inGame ?
                        <MainGame user={this.props.user} handler={this.gameStateHandler}/> :
                        <MainHome user={this.props.user}  gameStateHandler={this.gameStateHandler}/>
                    }
                </Route>
            </Router>

            );
    }
}

export default MainApp;
