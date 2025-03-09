import React from 'react';
import talks from '../../data/talks.js';
import TalkAndFeature from '../TalkAndFeature/TalkAndFeature.jsx';


const TalksAndFeatures = () => {
    return (
        <section id='talks' className='container mx-auto mt-24 items-center px-6'>
            <h1 className='text-4xl md:text-6xl mb-5'>Talks & Features</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    talks.map((talk, idx) => (
                        <TalkAndFeature key={idx} talk={talk}/>
                    ))
                }
            </div>
        </section>
    );
};

export default TalksAndFeatures;