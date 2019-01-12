import  { Component } from 'react';

import socketIOClient from 'socket.io-client'


class webSocketService {
    constructor() {
    };


    // Establish socket io connection
    connect(serverUrl: string): any{
        return socketIOClient(serverUrl);
    };
}

export default new webSocketService();