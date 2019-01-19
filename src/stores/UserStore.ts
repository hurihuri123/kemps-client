// Services
import UserService from "../services/UserService";
import LoggerService from "../services/LoggerService";

// Stores
import {SocketStore, webSocketEvents} from "./SocketStore";
import {User} from "../types/user";

// Rxjs
import {filter, map} from 'rxjs/operators';



class UserStore {
    // Variable Definition
    user: User;
    socketStore: SocketStore;

    constructor(socketStore: SocketStore) {
        this.socketStore = socketStore;
        this.initCurrentUser();


        // Handle getUid events
        this.socketStore.getSocket()
            .pipe(filter(object => object.event == webSocketEvents.userId ))
            .pipe(map(object => object.data))
            .subscribe((data: object) => {
                LoggerService.debug("In userId event with :", data);
                this.socketStore.emitEvent(webSocketEvents.userId, {id: this.user.id});
            })
    }

    initCurrentUser(): void {
        // Send get request for it's data
        // Connect to socket io with the ID
        /* Use observables */
        this.user = UserService.getUser();
        this.socketStore.connect();
    }

    getUser(): User{
        return this.user;
    }
}


export default UserStore;