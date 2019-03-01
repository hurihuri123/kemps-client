import * as React from 'react';
import {rootStores, Stores} from "../../../stores/index";
import {filter, map} from 'rxjs/operators';
import LoggerService from "../../../services/LoggerService";
import {SocketStore, webSocketEvents} from "../../../stores/SocketStore";
import {Room} from "../../../types/room";
import {User} from "../../../types/user";
import Timer from "./timer/timer";
import GameStore from "../../../stores/GameStore";
import {observer} from "mobx-react";
import {action, computed} from "mobx";
import UserStore from "../../../stores/UserStore";


// Stores
const socketStore:  SocketStore       = rootStores[Stores.SOCKET];
const gameStore:    GameStore       = rootStores[Stores.GAME];
const userStore: UserStore = rootStores[Stores.USER];

interface IProps {
    user: User;
    gameStateHandler: any;
}

interface IState {
    isPending: boolean;
}

@observer
class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isPending: false,
        };

        // Handle join queue response events
        socketStore.getEvent(webSocketEvents.joinQueue)
            .pipe(map(object => object.status))
            .subscribe((status: boolean) => {
                this.setState({
                    isPending: status,
                });
                // TODO - test status errors12
                LoggerService.debug("Join queue response :", status);
            });

        // Handle gameReady events
        socketStore.getEvent(webSocketEvents.gameReady)
            .pipe(filter( () => this.state.isPending))
            .pipe(map(data => this.convertRoomResponse(data)))
            .subscribe((room: Room) => {
                LoggerService.debug("In gameReady event :", room);
                gameStore.setRoom(room);
            });

        // Handle startChat event
        socketStore.getEvent(webSocketEvents.startChat)
            .subscribe((data: object) => {
                LoggerService.debug("In start chat event :", data);
                this.props.gameStateHandler(true);
            });
    }

    joinQueue = () => {
        // Send JoinQueue event
        socketStore.emitEvent(webSocketEvents.joinQueue, {id: this.props.user.id});
    };

    convertRoomResponse = (data: any): Room => {
      // Variable Definition
      const room = new Room();

      // Code Section
        room.id = data.roomId;
        room.isCurrentUserManager = data.manager === this.props.user.id;

        return room;
    };


    render() {
        const {id} = gameStore.room;
        return (
            <div>
                <button onClick={this.joinQueue}>Join Queue</button>
                {id}
                {id ? <Timer user={this.props.user} /> : null}
            </div>
        );
    }
}
export default Home;
