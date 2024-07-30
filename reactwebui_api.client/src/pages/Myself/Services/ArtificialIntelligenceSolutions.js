import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../../components/navbar';
import '../Services/style/style.css';
//Common Section 
const Section = ({ title, content }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once when the section comes into view
        threshold: 0.2, // Trigger when 20% of the section is visible
    });
    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);
    return (_jsx("section", { ref: ref, className: `transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} bg-white py-10`, children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: title }), _jsx("div", { className: "content", children: content })] }) }));
};
const ArtificialIntelligenceSolutions = () => {
    return (_jsx("div", { children: _jsx(Section, { title: "Artificial Intelligence Solutions", content: _jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx("p", { children: "Artificial Intelligence (AI) Solutions are transforming industries by providing powerful tools for automation, data analysis, and decision-making. Our AI solutions are designed to help businesses harness the power of AI to improve efficiency, reduce costs, and drive innovation." })] }) }) }));
};
export default ArtificialIntelligenceSolutions;
