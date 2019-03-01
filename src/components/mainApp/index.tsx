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
}

interface IState {
    inGame: boolean;
    isLoading: boolean;
    user: User;
}

const userStore: UserStore = rootStores[Stores.USER];


@observer
class MainApp extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            inGame: false,
            isLoading: true,
            user: userStore.getUser
        };
    }

    componentDidMount() {
        userStore.initCurrentUser()
            .then( () =>{
                this.setState({isLoading: false})
            });
    }

    gameStateHandler = (status: boolean) => {
        this.setState({
            inGame: status
        });
    };


    render() {
        const {inGame, user} = this.state;
        return (
            <Router>
                <Route>
                    {inGame ?
                        <MainGame user={user} handler={this.gameStateHandler}/> :
                        <MainHome user={user}  gameStateHandler={this.gameStateHandler}/>
                    }
                </Route>
            </Router>

            );
    }
}

export default MainApp;
