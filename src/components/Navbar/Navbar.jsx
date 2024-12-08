import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import logoImg from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService"; // Assuming ApiService handles auth logic

export default function Navbar() {
    const navigate = useNavigate();
    const isAuthenticated = ApiService.isAuthenticated(); // Check if the user is authenticated
    const isAdmin = ApiService.isAdmin(); // Check if the user is an admin

    const handleLogoutClick = () => {
        const isLogout = window.confirm('Are you sure you want to logout this user?');
        if (isLogout) {
            ApiService.logout(); // Assuming this will handle logout logic
            navigate('/login'); // Redirect to login after logout
        }
    };

    return (
        <header className="header-container">
            <nav className="navbar">
                <div className="navbar-inner">
                    <Link to="/" className="logo-link">
                        <img src={logoImg} className="logo" alt="Logo" />
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

                            {/* Display Reading List and Profile for logged-in users */}
                            {isAuthenticated && (
                                <>
                                    <li>
                                        <NavLink className="menu-item" to="/reading-list">
                                            Reading List
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="menu-item" to="/profile">
                                            Profile
                                        </NavLink>
                                    </li>
                                </>
                            )}

                            {/* Admin Route */}
                            {isAdmin && (
                                <li>
                                    <NavLink className="menu-item" to="/admin">
                                        Admin
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    
                    <div className="auth-links">
                        {
                            isAuthenticated ? (
                                <button onClick={handleLogoutClick} className="get-started-link">LogOut</button>
                            ) : (
                                <>
                                    <Link to="/login" className="login-link">Log in</Link>
                                    <Link to="/signup" className="get-started-link">Get started</Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
}
