import React from "react";
import { ITodoListProps } from "./ITodoListProps";
import Clock from "../Icon/Clock";

const TodoList: React.FunctionComponent<ITodoListProps> = (props: ITodoListProps) => {
    const { id, description, title, todoItems } = props.todoList;

    const isTodoOverDue = todoItems.some(x => x.dueDate != undefined && (new Date(x.dueDate) < new Date()));

    return (
        <div className="p-2 flex flex-col">
            <div className="flex flex-row gap-1 items-baseline">
                <div className="text-lg text-textBlackColor font-bold">
                    {title}
                </div>
                {isTodoOverDue ? (<Clock className={`${isTodoOverDue ? 'text-rose-600' : 'text-textBlackColor'} w-3 h-3`} />) : ""}
            </div>

            <p className="italic text-sm">
                {description}
            </p>
        </div>);
}


export default TodoList;