import React from "react";
import { sidebarLinks } from "../../../../constants";
import { Link } from "react-router-dom";
import logout from "../../../../assets/images/logout.svg";

export default function LeftSidebar() {
    return (
        <section className="custom-scrollbar bg-ulcl-blue sticky left-0 top-0 z-20 h-screen w-fit flex-col justify-between overflow-auto border-r-dark-4 pb-5 pt-28 max-md:hidden">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => {

                    return (
                        <Link
                            to={link.route}
                            key={link.label}
                            className="relative flex justify-start gap-4 rounded-lg p-4"
                        >
                            <img
                                src={link.imgURL}
                                alt={link.label}
                                width={24}
                                height={24}
                            />
                            <p className="text-white font-bold max-lg:hidden">{link.label}</p>
                        </Link>
                    )
                }
                )}
            </div>
            <div className="mt-10 px-6 fixed bottom-0">
                <div className="flex gap-4 p-4 cursor-pointer">
                    <img src={logout} alt="logout" width={24} height={24} />
                    <p className="text-white font-bold max-lg:hidden">Logout</p>
                </div>
            </div>
        </section>
    );
}