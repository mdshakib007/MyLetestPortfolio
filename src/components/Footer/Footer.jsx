import React from 'react';
import navItems from '../../data/navItems';
import { FaFacebook, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center">
                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center space-x-4 mb-4">
                    {navItems.map((item) => (
                        <div key={item} className="px-2">
                            {item === "AlgoAspire" ? (
                                <a
                                    href="https://youtube.com/@AlgoAspire/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-yellow-500 transition duration-300"
                                >
                                    {`${item} ↗`}
                                </a>
                            ) : (
                                <a
                                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="hover:text-yellow-500 transition duration-300"
                                >
                                    {item}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Optional Social Links */}
                <div className="flex justify-center space-x-6 mb-4 text-2xl">
                    <a href="https://wa.me/8801608897980" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
                        <IoLogoWhatsapp />
                    </a>
                    <a href="https://github.com/mdshakib007" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mdshakib00777/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
                        <FaLinkedin />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} MD Shakib Ahmed. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
