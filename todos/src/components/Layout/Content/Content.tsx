import React from "react";
import IContentProps from "./IContentProps";

const Content: React.FunctionComponent<IContentProps> = (props: IContentProps) => {
    return (<section className="flex min-h-screen flex-1 flex-col items-center px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
        <div className="w-full max-w-4xl">
            {props.children}
        </div>
    </section>);
}

export default Content;