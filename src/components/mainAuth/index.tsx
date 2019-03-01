import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import {User} from "../../types/user";
import MainGame from "../mainGame/index";
import MainHome from "../mainHome/index";
import {Room} from "../../types/room";
import {observer} from "mobx-react";
import {rootStores, Stores} from "../../stores";
import UserStore from "../../stores/UserStore";

interface IProps {
    setAuthenticated: any;
}

interface IState {
}

const userStore: UserStore = rootStores[Stores.USER];


@observer
export default class MainAuth extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        userStore.initCurrentUser()
            .then( () =>{
                this.props.setAuthenticated(true);
            });
    }


    render() {
        return (
            <Router>
                <Route>
                    <div>
                        loading...
                    </div>
                </Route>
            </Router>

        );
    }
}
