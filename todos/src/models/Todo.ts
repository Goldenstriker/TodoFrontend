import { TodoItem } from "./TodoItem";

export default interface Todo {
    id: string;
    title: string;
    description: string;
    todoItems: TodoItem[];
}