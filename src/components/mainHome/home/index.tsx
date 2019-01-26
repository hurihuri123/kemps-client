import * as React from 'react';
import {rootStores, Stores} from "../../../stores/index";
import {filter, map} from 'rxjs/operators';
import Logger from "../../../services/LoggerService";
import LoggerService from "../../../services/LoggerService";
import {webSocketEvents} from "../../../stores/SocketStore";
import HttpService from "../../../services/HttpService";
import {Room} from "../../../types/room";
import {User} from "../../../types/user";
import Timer from "./timer/timer";

// Stores
const socketStore   = rootStores[Stores.SOCKET];

interface IProps {
    user: User;
    gameStateHandler: any;
    roomStateHandler: any;
}

interface IState {
    isPending: boolean;
    queueRoom: Room;
}


class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isPending: false,
            queueRoom: new Room()
        };

        // Handle join queue response events
        socketStore.getEvent(webSocketEvents.joinQueue)
            .pipe(map(object => object.status))
            .subscribe((status: boolean) => {
                this.setState({
                    isPending: status
                });
                // TODO - test status errors
                LoggerService.debug("Join queue response :", status);
            });

        // Handle gameReady events
        socketStore.getEvent(webSocketEvents.gameReady)
            .pipe(filter( () => this.state.isPending))
            .pipe(map(data => this.convertRoomResponse(data)))
            .subscribe((room: Room) => {
                LoggerService.debug("In gameReady event :", room);
                this.setState({
                   queueRoom: room
                });
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
        return (
            <div>
                <button onClick={this.joinQueue}>Join Queue</button>
                {this.state.queueRoom.id ? <Timer user={this.props.user} room={this.state.queueRoom} /> : null}
            </div>
        );
    }
}
export default Home;
