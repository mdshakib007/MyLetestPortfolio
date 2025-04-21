import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import navItems from '../../data/navItems';
import { HashLink } from 'react-router-hash-link';
import Headroom from 'react-headroom';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeRoute, setActiveRoute] = useState('');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (item) => {
        setActiveRoute(item);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            if (hash) {
                const active = navItems.find(
                    (item) => item.toLowerCase().replace(/\s+/g, "-") === hash
                );
                if (active) {
                    setActiveRoute(active);
                }
            }
        };

        window.addEventListener("hashchange", handleHashChange);
        handleHashChange();

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <Headroom>
            <nav className="w-full bg-gray-900 text-white shadow-lg shadow-black z-50">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    {/* Logo / Profile */}
                    <HashLink smooth to={`/#`} onClick={() => handleNavClick('')}>
                        <div className="flex items-center cursor-pointer">
                            <img src="/shakib.jpeg" alt="Shakib" className="h-14 w-14 rounded-full mr-3" />
                            <span className="text-xl font-semibold">MD Shakib Ahmed</span>
                        </div>
                    </HashLink>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex space-x-5 flex-wrap">
                        {navItems.map((item) => (
                            <li key={item}>
                                {item === "AlgoAspire" ? (
                                    <a
                                        href="https://youtube.com/@AlgoAspire/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => handleNavClick(item)}
                                        className={`hover:text-yellow-500 transition duration-300 flex gap-2 items-center ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                            }`}
                                    >
                                        {item} <FaExternalLinkAlt />
                                    </a>
                                ) : item === "Resume" ? (
                                    <a
                                        href='https://drive.google.com/file/d/1hGNDn0s7M8QvMDP2qBaGRP2F0RIXtKYO/view?usp=sharing'
                                        target='_blank'
                                        onClick={() => handleNavClick(item)}
                                        className={`hover:text-yellow-500 transition duration-300 flex gap-2 items-center ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                            }`}
                                    >
                                        {item} <FaExternalLinkAlt />
                                    </a>
                                ) : item === "Blogs" ? (
                                    <HashLink
                                        smooth
                                        to={`/posts#`}
                                        onClick={() => handleNavClick(item)}
                                        className={`hover:text-yellow-500 transition duration-300 ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                            }`}
                                    >
                                        {item}
                                    </HashLink>
                                ) : (
                                    <HashLink
                                        smooth
                                        to={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                        onClick={() => handleNavClick(item)}
                                        className={`hover:text-yellow-500 transition duration-300 ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                            }`}
                                    >
                                        {item}
                                    </HashLink>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Icon */}
                    <div className="lg:hidden">
                        {isOpen ? (
                            <FaTimes className="text-2xl cursor-pointer" onClick={handleToggle} />
                        ) : (
                            <FaBars className="text-2xl cursor-pointer" onClick={handleToggle} />
                        )}
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`lg:hidden bg-gray-900 container mx-auto px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[30rem]' : 'max-h-0'
                        }`}
                >
                    <ul className="flex flex-col space-y-4 p-4">
                        {navItems.map((item) => (
                            <li key={item}>
                                {item === "AlgoAspire" ? (
                                    <a
                                        href="https://youtube.com/@AlgoAspire/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => handleNavClick(item)}
                                        className={`hover:text-yellow-500 transition duration-300 flex gap-2 items-center ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                            }`}
                                    >
                                        {item} <FaExternalLinkAlt />
                                    </a>
                                ) : item === "Resume" ? (
                                    <a
                                        href='https://drive.google.com/file/d/1hGNDn0s7M8QvMDP2qBaGRP2F0RIXtKYO/view?usp=sharing'
                                        target='_blank'
                                        onClick={() => handleNavClick(item)}
                                        className={`hover:text-yellow-500 transition duration-300 flex gap-2 items-center ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                            }`}
                                    >
                                        {item} <FaExternalLinkAlt />
                                    </a>
                                ) : item === "Blogs" ? (
                                    <HashLink
                                        smooth
                                        to={`/posts#`}
                                        onClick={() => handleNavClick(item)}
                                        className={`hover:text-yellow-500 transition duration-300 ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                            }`}
                                    >
                                        {item}
                                    </HashLink>
                                ) : (
                                    <HashLink
                                        smooth
                                        to={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                        onClick={() => handleNavClick(item)}
                                        className={`hover:text-yellow-500 transition duration-300 ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                            }`}
                                    >
                                        {item}
                                    </HashLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </Headroom>
    );
};

export default Nav;
