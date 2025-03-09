import React from 'react';
import Project from '../Project/Project';
import projects from '../../data/projects.js'

const Projects = () => {
    return (
        <section id='projects' className='container mx-auto mt-24 items-center px-6'>
            <h1 className='text-4xl md:text-6xl mb-5'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    projects.map((project, idx) => (
                        <Project key={idx} project={project} />
                    ))
                }
            </div>
            <div className='flex justify-center items-center'>
                <a
                    className='btn btn-wide btn-outline hover:bg-yellow-500 hover:text-black hover:shadow-lg shadow-black mt-10'
                    href='https://github.com/mdshakib007?tab=repositories' target='_blank'>
                    More Projects
                </a>
            </div>
        </section>
    );
};

export default Projects;