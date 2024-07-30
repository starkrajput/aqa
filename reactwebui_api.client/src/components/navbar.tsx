import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsScrollingUp(false);
        } else {
            setIsScrollingUp(true);
        }

        setLastScrollY(currentScrollY);
        setIsAtTop(currentScrollY === 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${!isScrollingUp ? 'hidden' : ''} ${!isAtTop ? 'scrolled' : ''}`}>
            <div className="navbar-logo">RSV Technologies</div>
            <div className="navbar-menu-icon" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <li className="dropdown">
                    <a href="#">Industry</a>
                    <div className="dropdown-container">
                        <ul className="dropdown-menu">
                            <li>Artificial Intelligence Solutions</li>
                            <li>Enterprise Solutions</li>
                            <li>Machine Learning Solutions</li>
                            <li>Mobile Solutions</li>
                            <li>IIoT and IoT Solutions</li>
                            <li>Managed Services</li>
                            <li>Cloud Integration Solutions</li>
                        </ul>
                        <ul className="dropdown-menu">
                            <li>Web Solutions</li>
                            <li>Saas Development</li>
                            <li>Location-based Services</li>
                            <li>Embedded Solutions</li>
                            <li>Salesforce Development</li>
                            <li>Staff Augmentation Services</li>
                            <li>Ondemand Services</li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#">Resources</a>
                    <div className="dropdown-container">
                        <ul className="dropdown-menu">
                            <li>Web apps</li>
                            <li>mobile apps</li>
                            <li>web solution</li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#">Technology</a>
                    <div className="dropdown-container">
                        <ul className="dropdown-menu">
                            <li>Healthcare</li>
                            <li>Management</li>
                            <li>Business</li>
                            <li>Science</li>
                            <li>Transport</li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Services</a></li>
            </ul>
        </nav>
    );
};


export default Navbar;