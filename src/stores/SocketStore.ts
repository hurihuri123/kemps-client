import webSocketService from "../webSocket/webSocket.service";
import {Observable, Subject} from 'rxjs';
import {events} from "../webSocket/events";




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
        });

        // Create emit observer
        const observer = {
            next: this.emitEvent
        };

        // Combine emit observer & events observable
        this.socketSubject =  Subject.create(observer, observable);
    }


    emitEvent(data: any) {
        // Variable Definition
        const {event, args} = data;

        // Code Section
        this.socket.emit(event,args);
    }

    // Set identification for the connected socket
    setSocketId = (id: number) => {
        this.emitEvent({event: events.userId, data: id});
    };

    getSocket() {
        return this.socketSubject;
    }

    buildEventJson(event: string, data: any): Object {
        return ({event: event, data});
    }
}



export {events as webSocketEvents};