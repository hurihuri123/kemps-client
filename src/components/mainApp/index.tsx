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
        }

    }
    render() {
        return (
            <Router>
                <Route>
                    {this.state.inGame ?
                        <MainGame/> :
                        <MainHome/>
                    }
                </Route>
            </Router>

            );
    }
}

export default MainApp;
