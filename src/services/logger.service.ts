import {string} from "prop-types";

export class LoggerService {
    constructor() {

    }


    debug(data: string, params? :any) {
        console.log(data, params);
    }

    info(data: string, params? :any) {
        console.log(data, params);
    }

    error(message:string , err:any) {
        console.error(message, err || '');
    }
}