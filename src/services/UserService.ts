import React, { Component } from 'react';
import {User} from "../types/user";

class UserService{
    constructor() {
    }

    getUser(): User {
        const id = prompt("Please enter your id:");
        return this.convertUserResponse(Number(id));
    }

    convertUserResponse(id: number): User {
        // Variable Definition
        const user = new User();

        // Code Section
        user.id = id;

        return user;
    }

}

export default new UserService();