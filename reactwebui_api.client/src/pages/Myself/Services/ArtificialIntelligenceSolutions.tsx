import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar  from '../../../components/navbar';
import '../Services/style/style.css';
//Common Section 
const Section: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once when the section comes into view
        threshold: 0.2,    // Trigger when 20% of the section is visible
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <section
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} bg-white py-10`}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
                <div className="content">
                    {content}
                </div>
            </div>
        </section>
    );
};

const ArtificialIntelligenceSolutions: React.FC = () => {
    return (
        <div>
            <Section
                title="Artificial Intelligence Solutions"
                content={
                    <>
                        <Navbar />
                        <p>
                            Artificial Intelligence (AI) Solutions are transforming industries by providing powerful tools for automation, data analysis, and decision-making. Our AI solutions are designed to help businesses harness the power of AI to improve efficiency, reduce costs, and drive innovation.
                        </p>
                    </>
                }
            />
            
        </div>
    );
};

export default ArtificialIntelligenceSolutions;