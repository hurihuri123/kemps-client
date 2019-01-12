class LoggerService {
    // ...variable syntax is used to parse all params to one array
    static debug(message?: any, ...optionalParams: any[]): void {
        console.log(message, ...optionalParams);
    }

    static info(message?: any, ...optionalParams: any[]): void {
        console.log(message, ...optionalParams);
    }

    static error(message?: any, ...optionalParams: any[]) {
        console.error(message, ...optionalParams);
    }
}

export default LoggerService;