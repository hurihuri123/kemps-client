import UserStore from "./UserStore";
import {SocketStore} from "./SocketStore";
import Stores from "../consts/Stores";
import GameStore from "./GameStore";
import ConversationStore from "./ConversationStore";

/*
Stores are used to hold instances
 */


// Initiate all stores
const socketStore   = new SocketStore();
const userStore     = new UserStore(socketStore);
const gameStore     = new GameStore();
const conversationStore = new ConversationStore();


// Save the instance in global object


const rootStores = {
    [Stores.USER]: userStore,
    [Stores.SOCKET]: socketStore,
    [Stores.GAME]: gameStore,
    [Stores.CONVERSATION]: conversationStore
};

export {rootStores, Stores};