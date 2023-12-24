import React from "react";
import { ITodoListProps } from "./ITodoListProps";
import Clock from "../Icon/Clock";

const TodoList: React.FunctionComponent<ITodoListProps> = (props: ITodoListProps) => {
    const { id, description, title, todoItems } = props.todoList;

    const isTodoOverDue = todoItems.some(x => x.dueDate != undefined && (new Date(x.dueDate) < new Date()));

    return (
        <div className="p-2 flex flex-col">
            <div className="flex flex-row">
                <div className={`text-lg ${isTodoOverDue ? 'text-rose-600' : 'text-textBlackColor'} font-bold`}>
                    {title}
                </div>
                <div className="w-1">
                    {isTodoOverDue ? (<Clock />) : ""}
                </div>
            </div>

            <p className="italic text-sm">
                {description}
            </p>
        </div>);
}


export default TodoList;