import { AxiosResponse } from "axios";
import AxiosHelper from "./AxiosHelper";
import TodoResult from "../models/TodoResult";
import Todo from "../models/Todo";

export default class TodoApiService {

    private hostUrl: string = "https://localhost:44377/api";

    public getAllTodos(pageSize: number, pageNumber: number): Promise<AxiosResponse<TodoResult>> {
        const axios = AxiosHelper.getAxiosInstance();
        return axios.get<TodoResult>(`${this.hostUrl}/todolists?pageSize=${pageSize}&pageNumber=${pageNumber}`);
    }

    public getTodoListById(todoListId: string): Promise<AxiosResponse<Todo>> {
        const axios = AxiosHelper.getAxiosInstance();
        return axios.get<Todo>(`${this.hostUrl}/todolists/${todoListId}`);
    }
}