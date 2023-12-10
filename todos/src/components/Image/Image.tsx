import React from "react";
import IImageProps from "./IImageProps";
import { getImageSrc } from "./ImageIconEnum";

const Image: React.FunctionComponent<IImageProps> = (props) => {
    return (<img className={props.className} src={getImageSrc(props.imageIcon)} />)
}

export default Image;