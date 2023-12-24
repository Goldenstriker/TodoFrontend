import React from "react";
import ILayoutProps from "./ILayoutProps";
import LeftSidebar from "./Sidebar/LeftSidebar/LeftSidebar";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import RightSidebar from "./Sidebar/RightSidebar/RightSidebar";

const Layout: React.FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
    return (<div className="container max-w-full h-screen flex flex-col">
        <Header />
        <main className="flex flex-row">
            <LeftSidebar />
            <Content children={props.children} />
            <RightSidebar />
        </main>
        <Footer />
    </div>);
}

export default Layout;