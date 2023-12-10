import React from "react";
import ITodoProps from "./ITodoProps";
import Image from "../../Image/Image"
import { ImageIconEnum } from "../../Image/ImageIconEnum";

const Todo: React.FunctionComponent<ITodoProps> = (props) => {
    return (<div className="p-1 flex flex-row">
        <Image className="w-[20px] h-[20px] text-paynes-gray p-0.5" imageIcon={props.todoItem.completed ? ImageIconEnum.CheckedIcon : ImageIconEnum.PendingIcon} />
        <div>{props.todoItem.todo}</div>
    </div>);
}

export default Todo;