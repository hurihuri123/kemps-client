import webSocketService from "../webSocket/webSocket.service";
import {Observable, Subject} from 'rxjs';
import {events} from "../webSocket/events";
import {filter, map} from 'rxjs/operators';
import LoggerService from "../services/LoggerService";




export class SocketStore {
    // Variable Definition
    socket: any;
    socketSubject: Subject<any>; // Events consumer & producer
    serverUrl: string;

    constructor() {
        this.serverUrl = 'http://localhost:5000';
        this.socketSubject = new Subject<any>();
    }


    connect() {
        // Code Section
        this.socket = webSocketService.connect(this.serverUrl);

        // Create events observable
        const observable = new Observable(observer => {

            this.socket.on(events.userId, (event: any) => {
                observer.next(this.buildEventJson(events.userId, event));
            });

            this.socket.on(events.joinQueue, (event: any) => {
                observer.next(this.buildEventJson(events.joinQueue, event));
            });

            this.socket.on(events.gameReady, (event: any) => {
                observer.next(this.buildEventJson(events.gameReady, event));
            });
        });

        // Create emit observer
        const observer = {
            next: this.emitEvent
        };

        // Combine emit observer & events observable
        this.socketSubject =  Subject.create(observer, observable);
    }


    emitEvent(event: string, args: any) {
        // Code Section
        this.socket.emit(event,args);
    }

    getSocket() {
        return this.socketSubject;
    }

    getEvent(eventName: string) {
        return this.getSocket()
            .pipe(filter(object => object.event == eventName))
            .pipe(map(object => object.data))
    }

    buildEventJson(event: string, data: any): Object {
        return ({event: event, data});
    }
}



export {events as webSocketEvents};