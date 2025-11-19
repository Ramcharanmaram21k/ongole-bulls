

import React from 'react';
import './AboutUs.css';
import teamImage from '../../assets/about-us.jpg';
import visionImage from '../../assets/vision-aboutUs.avif';
import missionImage from '../../assets/mission-aboutUs.avif';

function AboutUs() {
    return (
        <div className="about-us-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-overlay">
                    <h1 className="hero-title">About Us!</h1>
                    <p className="hero-subtitle">Building Your Financial Future with Trust & Expertise</p>
                </div>
            </section>

            {/* Main About Section */}
            <section className="about-intro">
                <div className="about-container">
                    <div className="intro-image">
                        <img src={teamImage} alt="Our Team" />
                    </div>
                    <div className="intro-content">
                        <p className="intro-text">
                            At OngoleBulls Invest Pvt Ltd, we are passionate about transforming lives through financial empowerment.
                            Our team of seasoned experts works closely with clients to understand their unique financial goals and challenges.
                            From comprehensive wealth management to tailored investment planning, we are dedicated to delivering innovative
                            and effective solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="values-section">
                <div className="values-container">
                    <h2 className="section-title">Our Values</h2>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Integrity</h3>
                            <p>We adhere to the highest standards of ethics and remain transparent in all interactions.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <h3>Excellence</h3>
                            <p>We strive for excellence in everything we do, delivering superior results for our clients.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3>Innovation</h3>
                            <p>We embrace innovation to provide cutting-edge financial solutions for our clients.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="vision-mission-section">
                <div className="vision-mission-container">
                    {/* Vision Card */}
                    <div className="vm-card vision-card">
                        <div className="vm-content">
                            <h2>Vision</h2>
                            <div className="vm-image">
                                <img src={visionImage} alt="Our Vision" />
                            </div>
                            <p>
                                Our vision is to become a global leader in financial services by consistently
                                exceeding client expectations and empowering individuals with financial
                                independence.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="vm-card mission-card">
                        <div className="vm-content">
                            <h2>Mission</h2>
                            <div className="vm-image">
                                <img src={missionImage} alt="Our Mission" />
                            </div>
                            <p>
                                Our mission is to provide personalized, transparent, and cutting-edge financial
                                solutions that create measurable value for our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}

        </div>
    );
}

export default AboutUs;
