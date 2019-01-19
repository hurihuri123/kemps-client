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

        // Handle getUid events
        socketStore.getSocket()
            .pipe(filter(object => object.event == webSocketEvents.gameReady && this.state.isPending ))
            .pipe(map(object => object.data))
            .subscribe((data: object) => {
                LoggerService.debug("In gameReady event :", data);
            })
    }

    joinQueue = () => {
        // Send HTTP request
        HttpService.post("http://localhost:3000/joinGameQueue",{uid: userStore.getUser().id}, null)
            .then(response => {
                Logger.debug("JoinQueue response : ", response);
            })
            .catch( err => {
                Logger.error("JoinQueue Error : ", err);
            })
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
