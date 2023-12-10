import axios, { AxiosResponse } from "axios";
import TodoList from "../models/TodoResult";

export default class TodoApiService {
    public getAllTodos () : Promise<AxiosResponse<TodoList>> { 
         return axios.get<TodoList>("https://dummyjson.com/todos");
    }
}