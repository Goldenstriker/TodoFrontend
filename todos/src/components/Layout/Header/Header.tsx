import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo.png";
import logout from "../../../assets/images/logout.svg";
import user from "../../../assets/images/user.svg";

export default function Header() {
    return (
        <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-ulcl-blue px-6 py-3">
            <Link to="/" className="flex item-center gap-4">
                <img width={28} height={28} alt="logo" src={logo} />
                <p className="text-white font-bold max-xs:hidden">Threads</p>
            </Link>

            <div className="flex flex-row items-center gap-2">
                <div className="text-white block md:hidden">
                    <img src={logout} alt="logout" width={24} height={24} />
                </div>
            </div>
        </nav>
    );
}