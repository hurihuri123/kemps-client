import axios from 'axios';

interface IHttp {

    get(url: string, queryParams?: object, headers?: object): Promise<any>;

    post(url: string, body?: object, headers?: object): Promise<any>;

    put(url: string, body?: object, headers?: object): Promise<any>;

    del(url: string, body?: object, headers?: object): Promise<any>;
}

export class HttpService implements IHttp {

    get(url: string, queryParams?: object, headers?: any): Promise<any> {
        return axios.get(url, {
            params: queryParams,
            withCredentials: true,
            headers
        });
    }

    post(url: string, body?: any, headers?: any): Promise<any> {
        return axios.post(url, body, {
            withCredentials: true,
            headers,
        })
    }

    put(url: string, body?: any, headers?: any): Promise<any> {
        return axios.put(url, body, {
            withCredentials: true,
            headers
        })
    }

    del(url: string, body?: any, headers?: any): Promise<any> {
        return axios.delete(url, {
            withCredentials: true,
            headers
        })
    }

}

export default new HttpService();