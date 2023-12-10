import Todo from "./Todo";

export default interface TodoResult{
    todos: Todo[];
    total : number;
    skip: number;
    limit: number;
}