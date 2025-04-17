import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Achievements from '../Achievements/Achievements';
import RecentBlogs from '../RecentBlogs/RecentBlogs';
import ContactMe from '../ContactMe/ContactMe';
import Education from '../Education/Education';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import TalksAndFeatures from '../TalksAndFeatures/TalksAndFeatures';


const Home = () => {

    return (
        <>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Experiences></Experiences>
            <Achievements></Achievements>
            <Projects></Projects>
            <RecentBlogs></RecentBlogs>
            <TalksAndFeatures></TalksAndFeatures>
            <ContactMe></ContactMe>
        </>
    );
};

export default Home;
