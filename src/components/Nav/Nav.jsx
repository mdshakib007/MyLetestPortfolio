import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import navItems from '../../data/navItems'

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

    const reloadPage = () => {
        window.location.href = "#";
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
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg shadow-black z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo / Profile */}
                <div className="flex items-center cursor-pointer" onClick={reloadPage}>
                    <img src="shakib.jpeg" alt="Shakib" className="h-14 w-14 rounded-full mr-3" />
                    <span className="text-xl font-semibold">MD Shakib Ahmed</span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item}>
                            {item === "AlgoAspire" ? (
                                <a
                                    href="https://youtube.com/@AlgoAspire/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => handleNavClick(item)}
                                    className={`hover:text-yellow-500 transition duration-300 ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                        }`}
                                >
                                    {`${item} ↗`}
                                </a>
                            ) : (
                                <a
                                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    onClick={() => handleNavClick(item)}
                                    className={`hover:text-yellow-500 transition duration-300 ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                        }`}
                                >
                                    {item}
                                </a>
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
                className={`lg:hidden bg-gray-900 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
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
                                    className={`hover:text-yellow-500 transition duration-300 ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                        }`}
                                >
                                    {`${item} ↗`}
                                </a>
                            ) : (
                                <a
                                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    onClick={() => handleNavClick(item)}
                                    className={`hover:text-yellow-500 transition duration-300 ${activeRoute === item ? "border-b-2 border-yellow-500 text-yellow-500" : ""
                                        }`}
                                >
                                    {item}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
