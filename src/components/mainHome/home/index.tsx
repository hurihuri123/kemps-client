import * as React from 'react';
import {rootStores, Stores} from "../../../stores/index";
import {filter, map} from 'rxjs/operators';
import Logger from "../../../services/LoggerService";
import LoggerService from "../../../services/LoggerService";
import {webSocketEvents} from "../../../stores/SocketStore";
import HttpService from "../../../services/HttpService";

// Stores
const userStore     = rootStores[Stores.USER];
const socketStore   = rootStores[Stores.SOCKET];

interface IProps {
    handler: any;
}

interface IState {
    isPending: boolean;
}


class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isPending: false
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
            .subscribe((data: object) => {
                LoggerService.debug("In gameReady event :", data);
            });
    }

    joinQueue = () => {
        // Send JoinQueue event
        socketStore.emitEvent(webSocketEvents.joinQueue, {id: userStore.getUser().id});
    };


    render() {
        return (
            <div>
                <button onClick={this.joinQueue}>Join Queue</button>
            </div>
        );
    }
}
export default Home;
