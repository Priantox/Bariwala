import './Navbar.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'boxicons';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { 
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`nav ${!isHomePage ? "nav_other" : ""} ${isScrolled ? "active" : ""}`}>
                <div className="nav-logo">
                    <Link to="/">Bariwala</Link>
                </div>
                <ul className="nav-menu">
                    <li>
                        <Link to="/dashboard" className={isHomePage ? "home-link" : "other-link"}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/addproperty" className={isHomePage ? "home-link" : "other-link"}>Add Property</Link>
                    </li>
                    <li>
                        <Link to="/about" className={isHomePage ? "home-link" : "other-link"}>About</Link>
                    </li>
                    <li>
                        <Link to="/explore" className={isHomePage ? "home-link" : "other-link"}>Explore</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={isHomePage ? "home-link" : "other-link"}>Contact</Link>
                    </li>
                    <box-icon name='bell' type='solid' animation='tada' rotate='90' color='#ffffff'></box-icon>
                    <li className="nav-contact">
                        <Link to="/signin">Sign In</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;
