// Services
import UserService from "../services/UserService";
import webSocketService from "../webSocket/webSocket.service";
import LoggerService from "../services/LoggerService";

// Stores
import {SocketStore, webSocketEvents} from "./SocketStore";
import {User} from "../Types/user";

import {filter} from 'rxjs/operators';



class UserStore {
    // Variable Definition
    user: User;
    socketStore: SocketStore;

    constructor(socketStore: SocketStore) {
        this.socketStore = socketStore;
        this.initCurrentUser();


        // Handle getUid events
        this.socketStore.getSocket()
            .pipe(filter(data => data.event == webSocketEvents.userId ))
            .subscribe(data => {
                LoggerService.debug("uid event");
            })
    }

    initCurrentUser(): void {
        // Send get request for it's data
        // Connect to socket io with the ID
        /* Use observables */
        this.user = UserService.getUser();
        this.socketStore.connect();
    }
}


export default UserStore;