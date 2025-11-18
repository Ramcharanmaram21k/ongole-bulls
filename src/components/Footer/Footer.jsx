import React from "react";
import "./Footer.css";
import logo from "../../assets/logo4.png";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section company">
                    <img
                        src={logo}
                        alt="Ongolebulls Logo"
                        className="footer-logo"
                    />
                    <p>
                        Ongolebulls Pvt. Ltd. Established in 2021, the company operates
                        under CIN U65990TG2021PTC154027 and is led by experienced
                        professionals.
                    </p>
                </div>

                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <p>
                        Email:{" "}
                        <a href="mailto:info@ongolebullsinvest.com">
                            info@ongolebullsinvest.com
                        </a>
                    </p>
                    <p>
                        Phone: <a href="tel:+919281111730">+91-9281111730</a>
                    </p>
                    <p>Follow Us:</p>
                    <div className="social-icons">
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <FaInstagram />
                        <FaYoutube />
                        <FaTwitter />
                    </div>
                </div>

                <div className="footer-section subscribe">
                    <h4>Subscribe to Updates</h4>
                    <div className="subscribe-box">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © 2025 OngoleBulls Invest Pvt Ltd. All rights reserved.
                </p>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
