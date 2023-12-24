import React, { useEffect, useState } from "react";
import TodoApiService from "../../service/TodoApiService";
import TodoResult from "../../models/TodoResult";
import Todo from "./Todo/Todo";

const TodoList: React.FunctionComponent = (props: any) => {
    const [todoList, setTodoList] = useState<TodoResult>();
    const [pageNumber, setTodoPageNumber] = useState<number>(1);
    useEffect(() => {
        const apiService: TodoApiService = new TodoApiService();
        try {
            apiService.getAllTodos(10, pageNumber)
                .then(r => setTodoList(r.data));
        }
        catch (e) {
            console.log(e);
        }

    }, []);

    return (<div className="flex flex-col">
        {todoList && todoList.todos.length > 0 && todoList.todos.map(item => (<Todo todoItem={item} />))}
    </div>)
}


export default TodoList;