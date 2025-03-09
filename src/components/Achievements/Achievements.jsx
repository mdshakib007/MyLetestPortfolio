import React from 'react';
import achievements from '../../data/achievements.js'
import Achievement from '../Achievemnt/Achievement.jsx';

const Achievements = () => {
    
    return (
        <section id='achievements' className='container mx-auto mt-24 items-center px-6'>
            <h1 className='text-4xl md:text-6xl mb-5'>Achievements</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    achievements.map((achievement, idx) => (
                        <Achievement key={idx} achievement={achievement}/>
                    ))
                }
            </div>
        </section>
    );
};

export default Achievements;