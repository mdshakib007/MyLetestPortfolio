import React from 'react';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import experiences from '../../data/experiences.js'

const Experiences = () => {

    return (
        <section id='experiences' className='container mx-auto mt-24 items-center px-6'>
            <h1 className='text-4xl md:text-6xl mb-5'>Experiences</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    experiences.map((exp, idx) => (
                        <ExperienceCard key={idx} experience={exp} />
                    ))
                }
            </div>
        </section>
    );
};

export default Experiences;