import { action, computed, IObservableArray, observable } from "mobx";
import {Room} from "../types/room";
import {Team} from "../types/team";

export default class GameStore {

    @observable
    room: Room;

    @observable
    team: Team;


    constructor() {
        this.room = new Room();
        this.team = new Team();
    }

    @action  setRoom(room: Room) {
        console.log("in set room");
        this.room = room;
    }

    @computed get getRoom():Room {
        console.log("in get room ");
        return this.room;
    }

    @computed get roomId() {
        return this.room.id || -1;
    }
}