import { action, computed, IObservableArray, observable } from "mobx";
import {Room} from "../types/room";
import {Team} from "../types/team";

export default class GameStore {

    @observable
    room: Room;

    @observable
    id: number;

    @observable
    team: Team;


    constructor() {
        this.room = new Room();
        this.team = new Team();
        this.id = -1;
    }

    @action setRoom(room: Room) {
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

    @action setId(room: number) {
        console.log("in set id");
        this.id = room;
    }

    @computed get getId():number {
        console.log("in get room ");
        return this.id;
    }
}