import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/MenuItem/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="w-4/5 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;