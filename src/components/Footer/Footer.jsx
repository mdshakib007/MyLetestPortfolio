import React from 'react';
import navItems from '../../data/navItems';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';


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
                                    className="hover:text-yellow-500 transition duration-300 flex gap-2 items-center"
                                >
                                    {item} <FaExternalLinkAlt />
                                </a>
                            ) : item === "Resume" ? (
                                <a
                                    href='https://drive.google.com/file/d/1hGNDn0s7M8QvMDP2qBaGRP2F0RIXtKYO/view?usp=sharing'
                                    target='_blank'
                                    className="hover:text-yellow-500 transition duration-300 flex gap-2 items-center"
                                >
                                    {item} <FaExternalLinkAlt />
                                </a>
                            ) : (
                                <HashLink
                                    to={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="hover:text-yellow-500 transition duration-300"
                                >
                                    {item}
                                </HashLink>
                            )}
                        </div>
                    ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-4 text-2xl">
                    <a
                        href="https://wa.me/8801608897980"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-500 transition duration-300 tooltip tooltip-warning"
                        data-tip="WhatsApp"
                    >
                        <IoLogoWhatsapp />
                    </a>
                    <a
                        href="https://github.com/mdshakib007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-500 transition duration-300 tooltip tooltip-warning"
                        data-tip="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mdshakib00777/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-500 transition duration-300 tooltip tooltip-warning"
                        data-tip="LinkedIn"
                    >
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
