import { IIconProps } from "./IIconProps";

export default function Clock(props: IIconProps) {
    return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={props.strokeColor ? props.strokeColor : "currentColor"} className={props.className} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg >
    );
}