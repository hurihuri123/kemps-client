import { action, computed, IObservableArray, observable } from "mobx";
import {Room} from "../types/room";
import {Team} from "../types/team";
import {observer} from "mobx-react";


export default class GameStore {


    @observable
    room: Room;


    @observable
    team: Team;


    constructor() {
        this.room = new Room();
        this.team = new Team();
    }

    @action
    setRoom(room: Room) {
        this.room = room;
        console.log("set room : ", this.room);
    }

    @computed get getRoom():Room {
        return this.room;
    }

    @computed get roomId() {
        return this.room.id || -1;
    }
}