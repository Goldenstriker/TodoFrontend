import React from "react";
import { sidebarLinks } from "../../../constants";
import { Link } from "react-router-dom";

export default function Footer() {
    return (<section className="fixed bottom-0 z-10 w-full bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 md:hidden">
        <div className="flex items-center justify-between gap-3 xs:gap-5">
            {sidebarLinks.map((link) => {

                return (
                    <Link
                        to={link.route}
                        key={link.label}
                        className="relative flex flex-col items-center gap-2 p-2 sm:flex-1 sm:px-2 sm:py-2.5"
                    >
                        <img
                            src={link.imgURL}
                            alt={link.label}
                            width={24}
                            height={24}
                        />
                        <p className="text-white max-sm:hidden">
                            {link.label.split(/\s+/)[0]}
                        </p>
                    </Link>
                )
            }
            )}
        </div>
    </section>);
}