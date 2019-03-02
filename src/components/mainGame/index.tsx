import React, { Component } from 'react';
import { BrowserRouter as Router, Route   } from 'react-router-dom'
import Chat from "./chat/index";
import Game from "./game/index";
import {User} from "../../types/user";
import {Room} from "../../types/room";
import GameStore from "../../stores/GameStore";
import {rootStores, Stores} from "../../stores";
import ConversationStore from "../../stores/ConversationStore";
import {observer} from "mobx-react";

interface IProps {
    user: User;
    handler: any;
}

interface IState {
    inChat: boolean;
}

const conversationStore: ConversationStore = rootStores[Stores.CONVERSATION];

@observer
class MainGame extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            inChat: true
        };

    }
    render() {
        const {messages} = conversationStore;
        return (
            <Router>
                <Route>
                    {this.state.inChat ?
                        <Chat messages={messages} /> :
                        <Game/>
                    }
                </Route>
            </Router>

        );
    }
}

export default MainGame;
