import React, { useState } from "react";
import logo from "../../assets/logo4.png";
import {useNavigate, Link} from 'react-router-dom'
import "./Header.css";

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const navigate = useNavigate();

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
        setOpenDropdown(null);
    };

    const handleOpen = (event) => {
        navigate('/ContactForm')
    }

    return (
        <>
            <nav className="navbar-custom">
                <div className="navbar-container">
                    {/* Logo */}
                    <Link to="/" className="logo-link">
                        <img src={logo} alt="OngoleBulls" className="logo-img" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="desktop-menu">
                        <ul className="nav-links">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">
                                    Services <span className="icon-down">▾</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Wealth Management</a></li>
                                    <li><a href="#">Investment Management</a></li>
                                    <li><a href="#">Mutual Fund</a></li>
                                    <li><a href="#">PMS</a></li>
                                    <li><a href="#">HNI & Family Office Services</a></li>
                                    <li><a href="#">Stock Market & Bond Investments</a></li>
                                    <li><a href="#">Tax Optimization & Estate Planning</a></li>
                                </ul>
                            </li>



                                    <Link to="/Aboutus" className="nav-link">About us</Link>





                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">
                                    Resources <span className="icon-down">▾</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Guides</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="/contactForm" className="nav-link">Contact Us!</Link>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">Careers</a>
                            </li>
                        </ul>

                        <a href="#" className="btn-login">Login</a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar ${sidebarOpen ? "active" : ""}`}>
                <div className="sidebar-top">
                    <Link to="/" className="sidebar-logo" onClick={closeSidebar}>
                        <img src={logo} alt="OngoleBulls" />
                    </Link>
                    <button className="close-btn" onClick={closeSidebar}>✕</button>
                </div>

                <ul className="mobile-menu">
                    <li>
                        <Link to="/" onClick={closeSidebar}>Home</Link>
                    </li>

                    <li className="mobile-dropdown">
                        <button onClick={() => toggleDropdown('services')} className="dropdown-btn">
                            Services
                            <span className={`arrow-icon ${openDropdown === 'services' ? 'rotate' : ''}`}>▾</span>
                        </button>
                        <ul className={`dropdown-list ${openDropdown === 'services' ? 'show' : ''}`}>
                            <li><a href="#" onClick={closeSidebar}>Wealth Management</a></li>
                            <li><a href="#" onClick={closeSidebar}>Investment Management</a></li>
                            <li><a href="#" onClick={closeSidebar}>Mutual Fund</a></li>
                            <li><a href="#" onClick={closeSidebar}>PMS</a></li>
                            <li><a href="#" onClick={closeSidebar}>HNI & Family Office Services</a></li>
                            <li><a href="#" onClick={closeSidebar}>Stock Market & Bond Investments</a></li>
                            <li><a href="#" onClick={closeSidebar}>Tax Optimization & Estate Planning</a></li>
                        </ul>
                    </li>

                    <li className="mobile-dropdown">
                        <button onClick={() => toggleDropdown('about')} className="dropdown-btn">
                            About Us
                            <span className={`arrow-icon ${openDropdown === 'about' ? 'rotate' : ''}`}>▾</span>
                        </button>
                        <ul className={`dropdown-list ${openDropdown === 'about' ? 'show' : ''}`}>
                            <li><a href="#" onClick={closeSidebar}>Who We Are</a></li>
                            <li><a href="#" onClick={closeSidebar}>Our Team</a></li>
                            <li><a href="#" onClick={closeSidebar}>Careers</a></li>
                        </ul>
                    </li>

                    <li className="mobile-dropdown">
                        <button onClick={() => toggleDropdown('resources')} className="dropdown-btn">
                            Resources
                            <span className={`arrow-icon ${openDropdown === 'resources' ? 'rotate' : ''}`}>▾</span>
                        </button>
                        <ul className={`dropdown-list ${openDropdown === 'resources' ? 'show' : ''}`}>
                            <li><a href="#" onClick={closeSidebar}>Blog</a></li>
                            <li><a href="#" onClick={closeSidebar}>Guides</a></li>
                            <li><a href="#" onClick={closeSidebar}>FAQs</a></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/contactForm" onClick={closeSidebar}>Contact Us!</Link>
                    </li>

                    <li>
                        <a href="#" onClick={closeSidebar}>Careers</a>
                    </li>

                    <li className="login-item">
                        <a href="#" className="btn-login-mobile" onClick={closeSidebar}>Login</a>
                    </li>
                </ul>
            </div>

            {/* Overlay */}
            {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
        </>
    );
}

export default Header;
