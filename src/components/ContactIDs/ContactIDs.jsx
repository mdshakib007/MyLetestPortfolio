import React from 'react';
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";
import { FaGithub, FaLinkedin, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";

const ContactIDs = () => {
    return (
        <ul className="flex gap-5 flex-wrap mt-10 text-4xl items-center justify-center">
            <li>
                <a href="https://youtube.com/@AlgoAspire/" target="_blank" className="hover:text-yellow-500 tooltip tooltip-warning" data-tip="AlgoAspire">
                    <img src="AlgoAspire-icon.png" alt="AA" className="h-14 w-14 rounded-full" />
                </a>
            </li>
            <li>
                <a href="https://discord.gg/PRM5vGcSH9" target="_blank" className="hover:text-yellow-500 tooltip tooltip-warning" data-tip="AlgoAspire Community">
                    <FaDiscord />
                </a>
            </li>
            <li>
                <a href="https://codeforces.com/profile/mdshakib007/" target="_blank" className="hover:text-yellow-500 tooltip tooltip-warning" data-tip="Codeforces">
                    <SiCodeforces />
                </a>
            </li>
            <li>
                <a href="https://leetcode.com/u/mdshakib007/" target="_blank" className="hover:text-yellow-500 tooltip tooltip-warning" data-tip="LeetCode">
                    <SiLeetcode />
                </a>
            </li>
            <li>
                <a href="https://www.codechef.com/users/mdshakib007/" target="_blank" className="hover:text-yellow-500 tooltip tooltip-warning" data-tip="CodeChef">
                    <SiCodechef />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/mdshakib00777/" target="_blank" className="hover:text-yellow-500 tooltip tooltip-warning" data-tip="Linkedin">
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="https://github.com/mdshakib007/" target="_blank" className="hover:text-yellow-500 tooltip tooltip-warning" data-tip="Github">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="https://discord.com/users/1203534285747785738" target="_blank" className="hover:text-yellow-500 tooltip tooltip-warning" data-tip="Discord ID">
                    <FaDiscord />
                </a>
            </li>
            <li>
                <a href="https://wa.me/8801608897980" target="_blank" className="hover:text-yellow-500 tooltip tooltip-warning" data-tip="Whatsapp Account">
                    <IoLogoWhatsapp />
                </a>
            </li>
            <li>
                <a href="https://t.me/mdshakib_007" target="_blank" className="hover:text-yellow-500 tooltip tooltip-warning" data-tip="Telegram ID">
                    <FaTelegramPlane />
                </a>
            </li>
            <li>
                <a href="mailto:shakibahmed.528874@gmail.com" className="hover:text-yellow-500 tooltip tooltip-warning" data-tip="Personal Email">
                    <IoMdMail />
                </a>
            </li>
        </ul>
    );
};

export default ContactIDs;