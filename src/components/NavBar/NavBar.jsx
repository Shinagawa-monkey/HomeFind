import "./NavBar.scss";
import menuIcon from "../../assets/menu.png"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuClick() {
        setIsMenuOpen((open) => !open);
    }

    const user = true;

    return (
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                    <img src="/logo.svg" alt="HomeFind company logo - stylized house symbol" />
                    <span>HomeFind</span>
                </Link>
                <Link to="/">Home</Link >
                <Link to="/about">About</Link >
                <Link to="/contact">Contact</Link >
                <Link to="/agents">Agents</Link >
            </div>
            <div className="right">
                {user ?
                    <div className="user">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Profile Picture" />
                        <span>John Doe</span>
                        <Link to="/profile" className="profileNav">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                    :
                    <>
                        <Link to="/signin">Sign in</Link>
                        <Link to="/signup" className="register">Sign up</Link>
                    </>
                }
                <div className="menuIcon">
                    <img src={menuIcon} alt="Toggle Navigation icon" onClick={handleMenuClick} />
                </div>
                <div className={isMenuOpen ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/agents">Agents</Link>
                    <Link to="/signin">Sign in</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </nav>
    )
}