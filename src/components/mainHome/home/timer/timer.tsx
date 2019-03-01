import * as React from 'react';
import {clearInterval, setInterval} from "timers";
import {Room} from "../../../../types/room";
import {rootStores, Stores} from "../../../../stores";
import {webSocketEvents} from "../../../../stores/SocketStore";
import LoggerService from "../../../../services/LoggerService";
import {User} from "../../../../types/user";
import GameStore from "../../../../stores/GameStore";

// Stores
const socketStore   = rootStores[Stores.SOCKET];
const gameStore: GameStore= rootStores[Stores.GAME];

interface IProps {
    user: User;
}

interface IState {
    intervalId: any;
    countDown: any;
}



class Timer extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            intervalId: null,
            countDown: 10
        };
    }

    componentDidMount() {
        this.setState({
            intervalId: setInterval(this.handleTick, 1000)
        })
    }

    handleTick = (): void => {
        this.tick(); // Set timer
        // Test timer status
        if (this.state.countDown > 0) {
            return;
        }
        const room:Room = gameStore.room;
        // Timer is over
        clearInterval(this.state.intervalId); // Terminate timer
        if (room.isCurrentUserManager) {
            // Send time over event
            socketStore.emitEvent(webSocketEvents.timerOver, {roomId: room.id});
            LoggerService.debug("Emitting timerOver event with roomId ", room.id);
        }

    };

    tick = () => {
        this.setState({
            countDown: this.state.countDown - 1
        })
    };

    imReady = () => {
        // Send ImReady event
        socketStore.emitEvent(webSocketEvents.imReady, {roomId: gameStore.room.id, id: this.props.user.id});
    };


    render() {
        return (
            <div>
                <div>{this.state.countDown}</div>
                <button onClick={this.imReady}>Im Ready</button>
            </div>

        );
    }
}
export default Timer;
