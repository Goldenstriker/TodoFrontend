import React from "react";
import ITodoProps from "./ITodoProps";

const Todo: React.FunctionComponent<ITodoProps> = (props) => {
    return (<div>{props.todoItem.title}</div>);
}

export default Todo;