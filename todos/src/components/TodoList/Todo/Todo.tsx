import React from "react";
import ITodoProps from "./ITodoProps";

const Todo: React.FunctionComponent<ITodoProps> = (props) => {
    return (<div className="p-1 flex flex-row">
        <div>{props.todoItem.title}</div>
    </div>);
}

export default Todo;