import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import Chat from "./chat/index";
import Game from "./game/index";
import {User} from "../../types/user";
import {Room} from "../../types/room";

interface IProps {
    user: User;
    room: Room;
    handler: any;
}

interface IState {
    inChat: boolean;
}

class MainGame extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            inChat: false
        };

    }
    render() {
        return (
            <Router>
                <Route>
                    {this.state.inChat ?
                        <Chat/> :
                        <Game/>
                    }
                </Route>
            </Router>

        );
    }
}

export default MainGame;
