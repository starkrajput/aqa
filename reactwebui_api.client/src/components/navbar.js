import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css';
const Navbar = () => {
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
        }
        else {
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
    return (_jsxs("nav", { className: `navbar ${!isScrollingUp ? 'hidden' : ''} ${!isAtTop ? 'scrolled' : ''}`, children: [_jsx("div", { className: "navbar-logo", children: "RSV Technologies" }), _jsx("div", { className: "navbar-menu-icon", onClick: toggleMenu, children: "\u2630" }), _jsxs("ul", { className: `navbar-menu ${isOpen ? 'open' : ''}`, children: [_jsxs("li", { className: "dropdown", children: [_jsx("a", { href: "#", children: "Industry" }), _jsxs("div", { className: "dropdown-container", children: [_jsxs("ul", { className: "dropdown-menu", children: [_jsx("li", { children: "Artificial Intelligence Solutions" }), _jsx("li", { children: "Enterprise Solutions" }), _jsx("li", { children: "Machine Learning Solutions" }), _jsx("li", { children: "Mobile Solutions" }), _jsx("li", { children: "IIoT and IoT Solutions" }), _jsx("li", { children: "Managed Services" }), _jsx("li", { children: "Cloud Integration Solutions" })] }), _jsxs("ul", { className: "dropdown-menu", children: [_jsx("li", { children: "Web Solutions" }), _jsx("li", { children: "Saas Development" }), _jsx("li", { children: "Location-based Services" }), _jsx("li", { children: "Embedded Solutions" }), _jsx("li", { children: "Salesforce Development" }), _jsx("li", { children: "Staff Augmentation Services" }), _jsx("li", { children: "Ondemand Services" })] })] })] }), _jsxs("li", { className: "dropdown", children: [_jsx("a", { href: "#", children: "Resources" }), _jsx("div", { className: "dropdown-container", children: _jsxs("ul", { className: "dropdown-menu", children: [_jsx("li", { children: "Web apps" }), _jsx("li", { children: "mobile apps" }), _jsx("li", { children: "web solution" })] }) })] }), _jsxs("li", { className: "dropdown", children: [_jsx("a", { href: "#", children: "Technology" }), _jsx("div", { className: "dropdown-container", children: _jsxs("ul", { className: "dropdown-menu", children: [_jsx("li", { children: "Healthcare" }), _jsx("li", { children: "Management" }), _jsx("li", { children: "Business" }), _jsx("li", { children: "Science" }), _jsx("li", { children: "Transport" })] }) })] }), _jsx("li", { children: _jsx("a", { href: "#", children: "Services" }) })] })] }));
};
export default Navbar;
