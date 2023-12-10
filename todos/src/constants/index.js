import search from "../assets/images/search.svg";
import create from "../assets/images/create.svg";
import user from "../assets/images/user.svg";
import home from "../assets/images/home.svg";

export const sidebarLinks = [
    {
        imgURL: home,
        route: "/",
        label: "Home",
    },
    {
        imgURL: search,
        route: "/search",
        label: "Search",
    },
    {
        imgURL: create,
        route: "/create-todo",
        label: "Create Todo List",
    },
    {
        imgURL: user,
        route: "/profile",
        label: "Profile",
    },
];