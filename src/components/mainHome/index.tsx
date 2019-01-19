import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import {User} from "../../types/user";
import Home from "./home/index";

interface IProps {
}

interface IState {
    isPending: boolean;
}

class MainHome extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);

    }
    render() {
        return (
            <Router>
                <Route>
                    <Home/>
                </Route>
            </Router>

        );
    }
}

export default MainHome;
