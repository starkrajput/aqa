import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../root/css/HomeView.css';
import pic11 from '../assets/pic11.jpg';
import pic12 from '../assets/pic12.jpg';
import pic13 from '../assets/pic13.jpg';
import pic14 from '../assets/pic14.jpg';
import pic15 from '../assets/pic1.jpg';
import pic16 from '../assets/pic2.jpg';
import india from '../assets/india.png';
import usa from '../assets/usa.png';
import fb from '../assets/fb.png';
import ig from '../assets/ig.png';
import ld from '../assets/ld.png';
import x from '../assets/x.png';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic4 from '../assets/pic4.jpg';
/*import companyLogo from './OIP.jpg';
import usaFlag from './OIP.jpg';
import indiaFlag from './OIP.jpg';
import phoneIcon from './OIP.jpg';
import emailIcon from './OIP.jpg';*/
import pic21 from '../assets/pic21.jpg';
import pic22 from '../assets/pic22.jpg';
import pic23 from '../assets/pic23.jpg';
import Navbar from '../components/navbar';
import Vedio1 from '../assets/V22.mp4';
import Vedio2 from '../assets/V1.mp4';
import Vedio3 from '../assets/V3.mp4';
import Vedio4 from '../assets/V4.mp4';
const HomeView = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videos = [
        {
            src: Vedio1,
            heading: "AI - ML Solutions",
            description: "Enable peak performance and automation for your systems and operations with our AI solutions.",
            buttonText: "Learn More"
        },
        {
            src: Vedio2,
            heading: "Digital Transformation",
            description: "Leverage our decades of experience transforming businesses of all shapes and sizes.",
            buttonText: "Learn More"
        },
        {
            src: Vedio3,
            heading: " Software Consulting",
            description: "Consult with the experts to get an optimal product for your business requirements.",
            buttonText: "Learn More"
        },
        {
            src: Vedio4,
            heading: "Enterprise Mobility",
            description: "We build solutions that can be accessed from the device of your choice anywhere and anytime.",
            buttonText: "Learn More"
        }
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % videos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [videos.length]);
    return (_jsxs("div", { className: "banner", children: [_jsx(Navbar, {}), _jsx(Carousel, { selectedItem: currentIndex, autoPlay: true, interval: 3000, infiniteLoop: true, showThumbs: false, showStatus: false, showArrows: false, stopOnHover: false, onChange: (index) => setCurrentIndex(index), children: videos.map((video, index) => (_jsxs("div", { className: "carousel-item", children: [_jsx("video", { src: video.src, autoPlay: true, loop: true, muted: true, playsInline: true, className: "carousel-video" }), _jsxs("div", { className: "carousel-content", children: [_jsx("h1", { children: video.heading }), _jsx("p", { children: video.description }), _jsx("button", { children: video.buttonText })] })] }, index))) }), _jsx("div", { className: "words-container", children: ['Artificial Intelligence', 'Digital Transformation', 'Software Consulting', 'Enterprise Mobility'].map((word, index) => (_jsxs("div", { className: `word ${currentIndex === index ? 'active' : ''}`, children: [_jsx("span", { children: word }), _jsx("div", { className: `loading-bar ${currentIndex === index ? 'active' : ''}` })] }, index))) })] }));
};
// Section Part 2 Code: 
const Section2 = () => {
    const images = [
        { src: pic11, heading: 'Machine Learning Services' },
        { src: pic12, heading: 'Natural Language Processing(NLP)' },
        { src: pic13, heading: 'Robotic Process Automation' },
        { src: pic14, heading: 'Computatioal Vision' },
        { src: pic15, heading: 'Conversational AI' },
        { src: pic16, heading: 'Recommendation Engine' }
    ];
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const containers = entry.target.querySelectorAll('.staircase-image-container');
                    containers.forEach((container, index) => {
                        container.classList.add('animate');
                        container.style.animationDelay = `${(containers.length - index - 1) * 0.2}s`;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (_jsx("div", { className: "section-2", children: _jsxs("div", { className: "staircase", children: [_jsx("div", { className: "staircase-level", children: _jsxs("div", { className: "staircase-image-container", children: [_jsx("div", { className: "staircase-heading", children: images[0].heading }), _jsx("img", { src: images[0].src, alt: "Image 1", className: "staircase-image" })] }) }), _jsxs("div", { className: "staircase-level", children: [_jsxs("div", { className: "staircase-image-container", children: [_jsx("div", { className: "staircase-heading", children: images[1].heading }), _jsx("img", { src: images[1].src, alt: "Image 2", className: "staircase-image" })] }), _jsxs("div", { className: "staircase-image-container", children: [_jsx("div", { className: "staircase-heading", children: images[2].heading }), _jsx("img", { src: images[2].src, alt: "Image 3", className: "staircase-image" })] }), _jsxs("div", { className: "section-2-content", children: [_jsx("h2", { children: "Next Gen AI Solution We Offer" }), _jsx("p", { children: "Our decades of expertise and experience channeled towards building the perfect AI solution." })] })] }), _jsxs("div", { className: "staircase-level", children: [_jsxs("div", { className: "staircase-image-container", children: [_jsx("div", { className: "staircase-heading", children: images[3].heading }), _jsx("img", { src: images[3].src, alt: "Image 4", className: "staircase-image" })] }), _jsxs("div", { className: "staircase-image-container", children: [_jsx("div", { className: "staircase-heading", children: images[4].heading }), _jsx("img", { src: images[4].src, alt: "Image 5", className: "staircase-image" })] }), _jsxs("div", { className: "staircase-image-container", children: [_jsx("div", { className: "staircase-heading", children: images[5].heading }), _jsx("img", { src: images[5].src, alt: "Image 6", className: "staircase-image" })] })] })] }) }));
};
/*Section 3 Code Part*/
const Section3 = () => {
    const images = [
        { src: pic1, heading: 'HealthTrack Pro', description: 'HealthTrack Pro is a comprehensive healthcare management platform designed to streamline patient care, track health metrics, and ensure regulatory compliance. It offers advanced features for managing patient records, scheduling appointments, and generating health reports.' },
        { src: pic21, heading: 'EstateVision 360', description: 'EstateVision 360 provides an all-in-one solution for real estate professionals. It includes tools for managing property listings, client interactions, and market analytics, helping users to enhance their business operations and client relationships.' },
        { src: pic22, heading: 'FinSecure Solutions', description: 'FinSecure Solutions offers robust financial management features to track investments, manage expenses, and ensure data security. It’s ideal for both individuals and businesses seeking to optimize their financial planning and operations.' },
        { src: pic4, heading: 'EduSmart LMS', description: 'EduSmart LMS is an advanced learning management system that supports educational institutions with course management, student tracking, and online learning capabilities. It helps educators deliver engaging content and monitor student progress effectively.' },
        { src: pic23, heading: 'RetailBoost Suite', description: 'RetailBoost Suite is a powerful tool for retail businesses, offering features to manage inventory, track sales, and engage customers. It helps retailers streamline their operations and boost sales through enhanced analytics and customer insights.' },
        { src: pic1, heading: 'TravelEase App', description: 'TravelEase App simplifies travel planning with features for booking, itinerary management, and real-time updates. It’s designed to enhance the travel experience by providing users with all the tools they need in one place.' },
        { src: pic2, heading: 'LegalGuard Pro', description: 'LegalGuard Pro provides comprehensive solutions for law firms, including document management, case tracking, and compliance tools. It helps legal professionals manage their cases and documents efficiently, ensuring adherence to legal standards.' },
        { src: pic21, heading: 'RealEstate Insight', description: 'RealEstate Insight offers data-driven analytics and insights for real estate professionals. It helps users make informed decisions with features like market analysis, property valuation, and client relationship management.' },
        { src: pic22, heading: 'TelecomFusion', description: 'TelecomFusion is designed for managing telecom operations, including network monitoring, billing, and customer service. It provides tools for optimizing telecom services and improving customer satisfaction.' },
        { src: pic23, heading: 'LogiTrack Pro', description: 'LogiTrack Pro is an advanced logistics management tool that helps businesses manage their supply chains, track shipments, and optimize delivery routes. It enhances operational efficiency and reduces transportation costs.' },
        { src: pic11, heading: 'HealthMonitor Plus', description: 'HealthMonitor Plus integrates with wearable devices to track vital signs and health trends. It provides users with real-time health data and insights to support personal wellness and medical management.' },
        { src: pic12, heading: 'BuildMaster', description: 'BuildMaster is a comprehensive construction management software that supports project planning, resource allocation, and progress tracking. It helps construction professionals manage projects efficiently and stay on schedule.' },
        { src: pic13, heading: 'RetailConnect', description: 'RetailConnect is a retail management system that focuses on enhancing customer experiences through personalized promotions and efficient store operations. It helps retailers drive sales and improve customer satisfaction.' },
        { src: pic14, heading: 'FinanceWizard', description: 'FinanceWizard provides robust financial management features for both personal and corporate finance. It includes budgeting, forecasting, and reporting tools to help users manage their finances effectively.' },
        { src: pic15, heading: 'TravelMate Solutions', description: 'TravelMate Solutions offers a complete travel management experience with booking, itinerary management, and travel assistance services. It’s designed to streamline the travel process and provide users with a seamless experience.' }
    ];
    // Generate unique descriptions
    const cards = images.map((image) => ({
        image: image.src,
        header: image.heading,
        description: image.description
    }));
    return (_jsx("div", { className: "section3", children: _jsx(Carousel, { infiniteLoop: true, showThumbs: false, showStatus: false, showArrows: false, showIndicators: false, autoPlay: true, interval: 900, centerMode: true, centerSlidePercentage: 20, className: "carousel", stopOnHover: false, swipeable: true, renderItem: (item, options) => {
                const isSelected = options.isSelected;
                const cardStyle = isSelected ? { transform: 'scale(1)', transition: 'transform 0.5s ease-in-out' } : { transform: 'scale(0.8)', transition: 'transform 0.5s ease-in-out' };
                return (_jsxs("div", { className: "carousel-card", style: { maxWidth: '300px', margin: '-35px', padding: '10px', ...cardStyle, perspective: '1200px' }, children: [_jsx("img", { src: item.props.src, alt: item.props.alt, className: "card-image", style: { borderRadius: '10px', width: '100%' } }), _jsxs("div", { className: "card-content", style: { textAlign: 'center', padding: '10px' }, children: [_jsx("h3", { className: "card-header", children: item.props.children[0] }), _jsx("p", { className: "card-description", children: item.props.children[1] })] })] }, options.key));
            }, children: cards.map((card, index) => (_jsxs("div", { children: [_jsx("img", { src: card.image, alt: card.header, style: { borderRadius: '5px' } }), _jsx("h3", { children: card.header }), _jsxs("h5", { children: [card.description, " "] })] }, index))) }) }));
};
/*Section 4*/
const Section4 = () => {
    const [isMobileView, setIsMobileView] = useState({
        isSmall: window.innerWidth <= 480,
        isMedium: window.innerWidth <= 768,
        isMedium2: window.innerWidth <= 780,
        isMedium3: window.innerWidth <= 805,
        isMedium4: window.innerWidth <= 830,
        isMedium5: window.innerWidth <= 880,
        isMedium6: window.innerWidth <= 950,
        isMedium7: window.innerWidth <= 970,
        isLarge: window.innerWidth <= 1024,
        isXLarge: window.innerWidth <= 1168,
        isFullSize: window.innerWidth > 1168
    });
    const getWidth = () => {
        if (isMobileView.isSmall) {
            return '30.5%';
        }
        else if (isMobileView.isMedium) {
            return '36%';
        }
        else if (isMobileView.isMedium2) {
            return '45%';
        }
        else if (isMobileView.isMedium3) {
            return '55%';
        }
        else if (isMobileView.isMedium4) {
            return '55%';
        }
        else if (isMobileView.isMedium5) {
            return '55%';
        }
        else if (isMobileView.isMedium6) {
            return '66%';
        }
        else if (isMobileView.isMedium7) {
            return '75%';
        }
        else if (isMobileView.isLarge) {
            return '11%';
        }
        else if (isMobileView.isXLarge) {
            return '75%';
        }
        else {
            return '100%';
        }
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView({
                isSmall: window.innerWidth <= 480,
                isMedium: window.innerWidth <= 768,
                isMedium2: window.innerWidth <= 780,
                isMedium3: window.innerWidth <= 805,
                isMedium4: window.innerWidth <= 830,
                isMedium5: window.innerWidth <= 880,
                isMedium6: window.innerWidth <= 950,
                isMedium7: window.innerWidth <= 970,
                isLarge: window.innerWidth <= 1024,
                isXLarge: window.innerWidth <= 1168,
                isFullSize: window.innerWidth > 1168
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // Inline styles
    const containerStyle = {
        display: 'flex',
        flexDirection: isMobileView.isSmall || isMobileView.isMedium || isMobileView.isLarge || isMobileView.isXLarge ? 'column' : 'row',
        alignItems: isMobileView.isSmall || isMobileView.isMedium || isMobileView.isLarge || isMobileView.isXLarge ? 'center' : 'flex-start',
        backgroundColor: '#f5f5f5',
        width: isMobileView.isFullSize ? '100%' : getWidth(),
        transition: 'all 0.3s ease-in-out',
        margin: isMobileView.isSmall || isMobileView.isMedium || isMobileView.isLarge || isMobileView.isXLarge ? '0 130px 0 0' : 'auto',
    };
    const imageStyle = {
        flex: 1,
        width: isMobileView ? '90%' : '50%',
        height: isMobileView.isLarge ? 'auto' : '360px',
        maxHeight: '360px',
        maxWidth: ' 800px',
        objectFit: 'cover',
        margin: isMobileView ? '0 0 20px 0' : '0 20px 0 0',
        boxShadow: isMobileView ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
    };
    const contentStyle = {
        flex: 1,
        width: isMobileView ? '90%' : '50%',
        padding: '20px',
        margin: isMobileView ? '0 0 30px' : '0 20px',
        color: '#0033a0',
        transition: 'transform 0.3s ease-in-out',
        transform: isMobileView ? 'translateY(5px)' : 'translateY(0)',
    };
    const headingStyle = {
        fontSize: '24px',
        marginBottom: '10px',
        width: '100%',
    };
    const borderStyle = {
        borderBottom: '2px solid',
        borderImage: 'linear-gradient(to right, #00f, #0077ff)',
        borderImageSlice: 1,
        marginBottom: '10px',
    };
    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#0033a0',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
    };
    // 3D Box styles
    const boxContainerStyle = {
        width: isMobileView ? '90%' : '72%',
        margin: isMobileView ? '20px auto' : '0 150px 150px',
        padding: '20px',
        backgroundImage: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobileView ? 'center' : 'flex-start',
        flexWrap: 'wrap',
        height: '160px',
        position: 'absolute',
        top: '2330px',
        left: '70px',
        visibility: isMobileView ? 'hidden' : 'visible',
    };
    const boxImageStyle = {
        width: '150px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '10px',
        margin: '5px',
    };
    return (_jsxs("div", { children: [_jsxs("div", { style: boxContainerStyle, children: [_jsx("img", { src: "https://cdn.unitycms.io/images/0JAaiuOkaGf9F2uD2jIjnq.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=Tesz3k0S7AI", alt: "Image 1", style: boxImageStyle }), _jsx("img", { src: "https://cdn.unitycms.io/images/0JAaiuOkaGf9F2uD2jIjnq.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=Tesz3k0S7AI", alt: "Image 2", style: boxImageStyle }), _jsx("img", { src: "https://cdn.unitycms.io/images/0JAaiuOkaGf9F2uD2jIjnq.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=Tesz3k0S7AI", alt: "Image 3", style: boxImageStyle }), _jsx("img", { src: "https://cdn.unitycms.io/images/0JAaiuOkaGf9F2uD2jIjnq.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=Tesz3k0S7AI", alt: "Image 4", style: boxImageStyle })] }), _jsxs("div", { style: containerStyle, children: [_jsx("img", { src: pic11, alt: "Photo", style: imageStyle }), _jsxs("div", { style: contentStyle, children: [_jsx("h2", { style: headingStyle, children: "Join Our Crew, Come Build the Future With RSV" }), _jsx("div", { style: borderStyle }), _jsxs("p", { children: ["At RSV Technologies, our greatest assets are our employees. Come join a diverse community of talented individuals who work together to deliver excellence and bring software solutions to life.", _jsx("br", {}), _jsx("br", {}), "We provide a workplace that is collaborative, and fosters productivity and teamwork. The leadership provides learning and growth opportunities for every individual to thrive professionally. Come join our talented group of testing experts and grow your career with us!!"] }), _jsx("a", { href: "/careers", style: buttonStyle, children: "Explore Careers" })] })] })] }));
};
/*const [isMobileView, setIsMobileView] = useState({
    isSmall: window.innerWidth <= 480,
    isMedium: window.innerWidth <= 768,
    isLarge: window.innerWidth <= 1024,
    isXLarge: window.innerWidth <= 1168
});

useEffect(() => {
    const handleResize = () => {
        setIsMobileView({
            isSmall: window.innerWidth <= 480,
            isMedium: window.innerWidth <= 768,
            isLarge: window.innerWidth <= 1024,
            isXLarge: window.innerWidth <= 1168
        });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);
*/
/*Contact us*/
const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 868);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/{form-id}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Form submitted successfully');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            }
            else {
                console.error('Failed to submit form');
            }
        }
        catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    const containerStyle = {
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        width: '95%',
        alignContent: 'flex-start',
        margin: '50px auto 0 10px', // Center container
        flexWrap: 'wrap',
    };
    const formContainerStyle = {
        flex: isMobileView ? '1' : '2',
        padding: '20px',
        backgroundImage: 'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        width: '30%', // Full width on mobile
        maxWidth: '900px', // Max width for larger screens
        background: 'skyblue',
        margin: isMobileView ? '0 0 0px ' : '30px',
    };
    const infoContainerStyle = {
        flex: isMobileView ? '1' : '1',
        padding: '20px',
        backgroundColor: '#e9ecef',
        borderRadius: '8px',
        width: '100%', // Full width on mobile
        maxWidth: isMobileView ? '400px' : '400px', // Max width for larger screens
        background: 'white',
        margin: isMobileView ? '20px 0 30px' : '0 60px 30px',
    };
    const headingStyle = {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#0033a0',
    };
    const paragraphStyle = {
        fontSize: '16px',
        marginBottom: '20px',
    };
    const inputStyle = {
        width: '100%', // Full width on mobile
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };
    const textareaStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        height: '100px',
    };
    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#0033a0',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
    };
    const linkStyle = {
        color: '#0033a0',
        textDecoration: 'none',
    };
    return (_jsxs("div", { style: containerStyle, children: [_jsxs("div", { style: formContainerStyle, children: [_jsx("h2", { style: headingStyle, children: "Contact Us" }), _jsx("p", { style: paragraphStyle, children: "RSV Technologies is dedicated to providing high-caliber offshore software product engineering services overseen by a local management team with a proven record of success." }), _jsxs("form", { onSubmit: handleSubmit, action: "https://formspree.io/f/{form-id}", method: "POST", children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx("input", { type: "text", name: "firstName", placeholder: "First Name", value: formData.firstName, onChange: handleChange, style: inputStyle, required: true }), _jsx("input", { type: "text", name: "lastName", placeholder: "Last Name", value: formData.lastName, onChange: handleChange, style: inputStyle, required: true })] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx("input", { type: "email", name: "email", placeholder: "Email", value: formData.email, onChange: handleChange, style: inputStyle, required: true }), _jsx("input", { type: "tel", name: "phone", placeholder: "Phone", value: formData.phone, onChange: handleChange, style: inputStyle })] }), _jsx("textarea", { name: "message", placeholder: "Message", value: formData.message, onChange: handleChange, style: textareaStyle, required: true }), _jsx("button", { type: "submit", style: buttonStyle, children: "Send" })] })] }), _jsxs("div", { style: infoContainerStyle, children: [_jsx("h2", { style: headingStyle, children: "Don't Want To Fill a Form?" }), _jsx("p", { style: paragraphStyle, children: "Email Us" }), _jsx("h3", { style: headingStyle, children: "Sales Inquiry" }), _jsx("a", { href: "mailto:sales@rsvtechnologies.com", style: linkStyle, children: "sales@rsvtechnologies.com" }), _jsx("h3", { style: headingStyle, children: "Career" }), _jsx("a", { href: "mailto:hiring@rsvtechnologies.com", style: linkStyle, children: "hiring@rsvtechnologies.com" }), _jsx("p", { children: _jsx("a", { href: "/careers", style: buttonStyle, children: "See Current Openings" }) })] })] }));
};
/*Footer*/
const Footer = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const footerContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '20px',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
    };
    const headerStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        alignItems: isMobileView ? 'center' : 'flex-start',
        justifyContent: 'space-between',
        paddingBottom: '20px',
        borderBottom: '2px solid #0033a0',
        marginBottom: '20px',
    };
    const columnStyle = {
        width: isMobileView ? '100%' : '43%',
        margin: isMobileView ? '10px 0' : '0 0 0 40px',
        padding: '20px',
        textAlign: isMobileView ? 'left' : 'left',
    };
    const columnHeadingStyle = {
        fontWeight: 'bold',
        marginBottom: '10px',
    };
    const listStyle = {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        width: '170px',
    };
    const listItemStyle = {
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isMobileView ? 'flex-start' : 'flex-start',
    };
    const footerBottomStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        justifyContent: isMobileView ? 'center' : 'space-between',
        alignItems: isMobileView ? 'flex-start' : 'center',
        padding: '10px 0',
        borderTop: '2px solid #0033a0',
        textAlign: isMobileView ? 'left' : 'left',
    };
    /* const socialIconsStyle: React.CSSProperties = {
         display: 'flex',
         gap: '10px',
         marginBottom: isMobileView ? '10px' : '0',
     };*/
    const socialIconStyle = {
        width: '40x',
        height: '40px',
    };
    const MobileAli = {
        display: isMobileView ? 'flex' : 'flex',
        flexDirection: isMobileView ? 'row' : 'row',
        width: isMobileView ? '400px' : '',
    };
    return (_jsxs("div", { style: footerContainerStyle, children: [_jsx("div", { style: headerStyle }), _jsxs("div", { style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: isMobileView ? 'column' : 'row',
                    justifyContent: isMobileView ? 'center' : 'space-between',
                    paddingBottom: '20px',
                    backgroundColor: 'black',
                }, children: [_jsxs("div", { style: MobileAli, children: [_jsxs("div", { style: columnStyle, children: [_jsx("h3", { style: columnHeadingStyle, children: "Locations" }), _jsxs("ul", { style: listStyle, children: [_jsxs("li", { style: listItemStyle, children: [_jsx("img", { src: usa, alt: "USA Flag", style: { width: '20px', verticalAlign: 'middle' } }), " USA"] }), _jsx("li", { style: listItemStyle, children: "San Jose" }), _jsx("li", { style: listItemStyle, children: "Denver" }), _jsx("li", { style: listItemStyle, children: "Seattle" }), _jsxs("li", { style: listItemStyle, children: [_jsx("img", { src: india, alt: "India Flag", style: { width: '20px', verticalAlign: 'middle' } }), " India"] }), _jsx("li", { style: listItemStyle, children: "Noida" }), _jsx("li", { style: listItemStyle, children: "Banglore" }), "       "] })] }), _jsxs("div", { style: columnStyle, children: [_jsx("h3", { style: columnHeadingStyle, children: "Services" }), _jsxs("ul", { style: listStyle, children: [_jsx("li", { style: listItemStyle, children: "Embedded Engineering" }), _jsx("li", { style: listItemStyle, children: "Staff Augmentation" }), _jsx("li", { style: listItemStyle, children: "DevOps Consulting" }), _jsx("li", { style: listItemStyle, children: "Mobile App Development" }), _jsx("li", { style: listItemStyle, children: "MVP Development" }), _jsx("li", { style: listItemStyle, children: "SaaS Development" }), _jsx("li", { style: listItemStyle, children: "IOT & IIOT" }), _jsx("li", { style: listItemStyle, children: "Software Testing" }), _jsx("li", { style: listItemStyle, children: "Hire Developers" }), _jsx("li", { style: listItemStyle, children: "Predictive Analytics" })] })] })] }), _jsxs("div", { style: MobileAli, children: [_jsxs("div", { style: columnStyle, children: [_jsx("h3", { style: columnHeadingStyle, children: "Industries" }), _jsxs("ul", { style: listStyle, children: [_jsx("li", { style: listItemStyle, children: "Transportation & Logistics" }), _jsx("li", { style: listItemStyle, children: "Banking & Finance" }), _jsx("li", { style: listItemStyle, children: "Retail & eCommerce" }), _jsx("li", { style: listItemStyle, children: "Healthcare" }), _jsx("li", { style: listItemStyle, children: "Telecommunications" }), _jsx("li", { style: listItemStyle, children: "Travel & Hospitality" }), _jsx("li", { style: listItemStyle, children: "Legal" }), _jsx("li", { style: listItemStyle, children: "Real-Estate" }), _jsx("li", { style: listItemStyle, children: "Education & eLearning" }), _jsx("li", { style: listItemStyle, children: "Media & Entertainment" })] })] }), _jsxs("div", { style: columnStyle, children: [_jsx("h3", { style: columnHeadingStyle, children: "Resources" }), _jsxs("ul", { style: listStyle, children: [_jsx("li", { style: listItemStyle, children: "About" }), _jsx("li", { style: listItemStyle, children: "Blogs" }), _jsx("li", { style: listItemStyle, children: "Case Studies" }), _jsx("li", { style: listItemStyle, children: "Portfolios" }), _jsx("li", { style: listItemStyle, children: "Infographics" }), _jsx("li", { style: listItemStyle, children: "Careers" }), _jsx("li", { style: listItemStyle, children: "Refer & Earn" }), _jsx("li", { style: listItemStyle, children: "Submit RFP" })] })] })] }), _jsxs("div", { style: columnStyle, children: [_jsx("h3", { style: columnHeadingStyle, children: "Rids" }), _jsx("ul", { style: listStyle })] })] }), _jsxs("div", { style: footerBottomStyle, children: [_jsxs("div", { style: { display: 'flex', gap: '20px', justifyContent: 'flex-start', flexDirection: isMobileView ? 'row' : 'row' }, children: [_jsx("img", { src: fb, alt: "Social Media Icons", style: socialIconStyle }), _jsx("img", { src: ig, alt: "Social Media Icons", style: socialIconStyle }), _jsx("img", { src: ld, alt: "Social Media Icons", style: socialIconStyle }), _jsx("img", { src: x, alt: "Social Media Icons", style: socialIconStyle })] }), _jsxs("div", { style: { textAlign: isMobileView ? 'center' : 'left', marginRight: isMobileView ? '0' : '150px' }, children: [_jsx("p", { children: "2024 \u00A9 RSV Inc. All rights reserved." }), _jsxs("p", { children: [_jsx("a", { href: "/privacy", style: { textDecoration: 'none', color: '#0033a0' }, children: "Privacy Statement" }), " |", _jsx("a", { href: "/terms", style: { textDecoration: 'none', color: '#0033a0' }, children: " Terms & Conditions" })] })] })] })] }));
};
const App = () => {
    return (_jsxs("div", { children: [_jsx(HomeView, {}), _jsx(Section2, {}), _jsx(Section3, {}), _jsx(Section4, {}), _jsx(ContactUs, {}), _jsx(Footer, {})] }));
};
export default App;
