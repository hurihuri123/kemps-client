import UserStore from "./UserStore";
import {SocketStore} from "./SocketStore";
import Stores from "../consts/Stores";
import GameStore from "./GameStore";

/*
Stores are used to hold instances
 */


// Initiate all stores
const socketStore   = new SocketStore();
const userStore     = new UserStore(socketStore);
const gameStore     = new GameStore();


// Save the instance in global object


const rootStores = {
    [Stores.USER]: userStore,
    [Stores.SOCKET]: socketStore,
    [Stores.GAME]: gameStore
};

export {rootStores, Stores};