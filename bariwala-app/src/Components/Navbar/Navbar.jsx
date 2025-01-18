import "./Navbar.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "boxicons";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 


  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
      const userData = JSON.parse(localStorage.getItem("userData"));
      setUserName(userData?.name || "User");
    }
  }, []);


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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target.getAttribute("name") !== "bell"
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`nav ${!isHomePage ? "nav_other" : ""} ${
          isScrolled ? "active" : ""
        }`}
      >
        <div className="nav-logo">
          <Link to="/">Bariwala</Link>
        </div>
        <ul className="nav-menu">
          <li>
            <Link
              to="/profile"
              className={isHomePage ? "home-link" : "other-link"}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={isHomePage ? "home-link" : "other-link"}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/addproperty"
              className={isHomePage ? "home-link" : "other-link"}
            >
              Add Property
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isHomePage ? "home-link" : "other-link"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className={isHomePage ? "home-link" : "other-link"}
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isHomePage ? "home-link" : "other-link"}
            >
              Contact
            </Link>
          </li>

          <div className="relative">
            <box-icon
              name="bell"
              type="solid"
              animation="tada"
              rotate="90"
              color="#ffffff"
              onClick={toggleDropdown}
              className="cursor-pointer"
            ></box-icon>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-64 bg-gray-200 shadow-lg rounded-lg z-10"
              >
                <div className="bg-white px-4 py-2 rounded-t-lg flex justify-between items-center">
                  <span className="font-bold text-lg">Notifications</span>
                </div>
                <div className="bg-gray-200">
                  <div className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                    <p className="text-sm font-semibold">Notification 1</p>
                  </div>
                  <div className="border-t border-gray-400"></div>
                  <div className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                    <p className="text-sm font-semibold">Notification 2</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {isLoggedIn ? (
            <li className="nav-profile">
              <div className="relative">
                <img
                  src="/path/to/profile-image.png"
                  alt="Profile"
                  className="rounded-full w-8 h-8 cursor-pointer"
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10"
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </li>
          ) : (
            <li className="nav-contact">
              <Link to="/signin">Sign In</Link>
            </li>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
