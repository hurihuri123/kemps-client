import UserStore from "./UserStore";
import {SocketStore} from "./SocketStore";
import Stores from "../consts/Stores";

/*
Stores are used to hold instances
 */


// Initiate all stores
const socketStore   = new SocketStore();
const userStore     = new UserStore(socketStore);


// Save the instance in global object


const rootStores = {
    [Stores.USER]: userStore,
    [Stores.SOCKET]: userStore,
};

export default rootStores;