import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar/Navbar";
import Banner from "../../components/Header/Banner/banner";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;