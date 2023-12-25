import { useEffect, useState } from "react";
import TodoResult from "../../models/TodoResult";
import TodoApiService from "../../service/TodoApiService";
import TodoList from "../TodoList/TodoList";

const Home: React.FunctionComponent = () => {

    const [todoResult, setTodoResult] = useState<TodoResult>();
    const [pageNumber, setTodoPageNumber] = useState<number>(1);
    useEffect(() => {
        const apiService: TodoApiService = new TodoApiService();
        apiService.getAllTodos(100, pageNumber)
            .then(r => setTodoResult(r.data))
            .catch(error => console.log(error));

    }, []);

    return (<div className="grid grid-cols-1 divide-y">{todoResult && todoResult.todos.length > 0 ? todoResult.todos.map(x =>
        (<TodoList key={x.id} todoList={x} />)
    ) : "No data found.."}</div>);
}

export default Home;