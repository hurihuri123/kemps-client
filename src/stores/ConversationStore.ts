import { action, computed, IObservableArray, observable } from "mobx";
import {Message} from "../types/message";
import {User} from "../types/user";



export default class ConversationStore {

    @observable
    messages: Message[];


    constructor() {
        const message1 = new Message();
        message1.content = "hi";
        message1.user = new User();
        message1.user.nickname = "huri";
        this.messages = [message1];
    }
}