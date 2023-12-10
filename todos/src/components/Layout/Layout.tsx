import React from "react";
import ILayoutProps from "./ILayoutProps";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const Layout: React.FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
    return (<div className="container max-w-full h-screen flex flex-col">
        <Header />
        <main className="flex flex-row">
            <Sidebar />
            <Content children={props.children} />
        </main>
        <Footer />
    </div>);
}

export default Layout;