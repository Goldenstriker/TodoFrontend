import Todo from "./Todo";

export default interface TodoResult {
    todos: Todo[];
    count: number;
    currentPage: number;
}