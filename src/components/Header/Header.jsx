import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"; // Import the CSS file
import logoImg from "../../images/logo.png";

export default function Header() {
    return (
        <header className="header-container">
            <nav className="navbar">
                <div className="navbar-inner">
                    <Link to="/" className="logo-link">
                        <img
                            src={logoImg}
                            className="logo"
                            alt="Logo"
                        />
                    </Link>
                    
                    <div className="menu" id="mobile-menu-2">
                        <ul className="menu-list">
                            <li>
                                <NavLink className="menu-item menu-item-home" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item menu-item-books" to="/books">
                                    Books
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item menu-item-about" to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="auth-links">
                        <Link to="/login" className="login-link">
                            Log in
                        </Link>
                        <Link to="/signup" className="get-started-link">
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
