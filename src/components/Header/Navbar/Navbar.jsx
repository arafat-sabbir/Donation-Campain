import { Link, NavLink } from "react-router-dom";
const logo = "https://i.ibb.co/7gNhvxS/Logo.png"
const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-base-100 container mx-auto my-10">
                <div className="navbar-start">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-end gap-10">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : "font-bold"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : "font-bold"
                        }
                    >
                        Donation
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : "font-bold"
                        }
                    >
                        Statistics
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Navbar;