import Axios, { AxiosError } from 'axios';
import { request } from 'http';
export default class AxiosHelper {
    static getAxiosInstance() {
        Axios.interceptors.response.use(
            response => response,
            (error: AxiosError | any) => {
                if (error && error.response) {
                    console.log(error, error.response);
                }
                return Promise.reject(error);
            }
        );
        Axios.interceptors.request.use(
            request => request,
            (error: AxiosError | any) => {
                console.log(error);
            }
        );
        return Axios;
    }
}