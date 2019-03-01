import React, { Component } from 'react';
import {User} from "../types/user";
import HttpService from "./HttpService";

class UserService{
    constructor() {
    }

    getUser(): any {
        // const nickname = prompt("Choose nickname:");
        return HttpService.get("http://localhost:3000/getUser")
            .then(response =>{
               return response.data;
            })
            .then(data => {
                data.nickname = "daniel";
                return this.convertUserResponse(data);
            });

    }

    convertUserResponse(data: any): User {
        // Variable Definition
        const user = new User();

        // Code Section
        if(!data) {
            return user;
        }

        user.id = data.id;
        user.nickname = data.nickname;

        return user;
    }

}

export default new UserService();