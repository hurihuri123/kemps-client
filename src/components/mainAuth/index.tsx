import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import {User} from "../../types/user";
import Login    from "./login/index";
import Register from "./register/index";

interface IProps {
}

interface IState {
    inGame: boolean;
}

class MainAuth extends React.Component<IProps,IState> {
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
                        <Login/> :
                        <Register/>
                    }
                </Route>
            </Router>

        );
    }
}

export default MainAuth;
