import React, { Component } from 'react';
import {User} from "../Types/user";

class UserService{
    constructor() {
    }

    getUser() {
        const user = new User(1234);
        console.log("im here");
        return user;
    }

}

export default new UserService();