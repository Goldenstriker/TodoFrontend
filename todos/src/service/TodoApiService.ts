import { AxiosResponse } from "axios";
import AxiosHelper from "./AxiosHelper";
import TodoList from "../models/TodoResult";

export default class TodoApiService {

    private hostUrl: string = "https://localhost:44377/api";

    public getAllTodos(pageSize: number, pageNumber: number): Promise<AxiosResponse<TodoList>> {
        const axios = AxiosHelper.getAxiosInstance();
        return axios.get<TodoList>(`${this.hostUrl}/todolists?pageSize=${pageSize}&pageNumber=${pageNumber}`);
    }
}