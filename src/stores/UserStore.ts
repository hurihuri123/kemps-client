// Services
import UserService from "../services/UserService";
import LoggerService from "../services/LoggerService";

// Stores
import {SocketStore, webSocketEvents} from "./SocketStore";
import {User} from "../types/user";

// Rxjs
import {filter, map} from 'rxjs/operators';
import {action, computed, observable} from "mobx";



class UserStore {
    // Variable Definition
    @observable
    user: User;

    socketStore: SocketStore;

    constructor(socketStore: SocketStore) {
        this.socketStore = socketStore;
    }

    @action
    initCurrentUser(): Promise<any> {
        // Send get request for it's data
        // Connect to socket io with the ID
        /* Use observables */
        return UserService.getUser()
            .then( (user: User) => {
                return this.user = user;
            })
            .then( () => {
                this.socketStore.connect();
            })
            .then( () => {
                // Handle getUid events
                this.socketStore.getEvent(webSocketEvents.userId)
                    .subscribe((data: object) => {
                        LoggerService.debug("In userId event with :", data);
                        this.socketStore.emitEvent(webSocketEvents.userId, {id: this.user.id, nickname: this.user.nickname});
                    });
                console.log(this.getUser);
            })
    }

    @computed
    get getUser(): User{
        return this.user;
    }
}


export default UserStore;