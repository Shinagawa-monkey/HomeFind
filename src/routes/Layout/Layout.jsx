import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
// import Home from "../Home/Home";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="layout">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
                {/* <Home /> */}
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}