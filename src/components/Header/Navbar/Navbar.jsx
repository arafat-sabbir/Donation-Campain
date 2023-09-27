import { Link, NavLink } from "react-router-dom";
const logo = "https://i.ibb.co/7gNhvxS/Logo.png"
const Navbar = () => {
    return (
        <div>

            <div className=" navbar bg-base-100 container mx-auto my-10 flex-col lg:flex-row space-y-8 lg:space-y-0">
                <div className="navbar-start">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-end ml-12 md:ml-0 md:mr-40 lg:mr-0  gap-10">
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