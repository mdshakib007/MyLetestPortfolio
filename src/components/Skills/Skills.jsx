import React from 'react';

const Skills = () => {
    return (
        <section id='skills' className='container mx-auto flex flex-col-reverse md:flex-row justify-between mt-24 items-center'>
            <img src="skills.svg" alt="" className='mx-6 h-64 lg:h-96'/>
            <div className='px-6'>
                <h1 className='text-4xl md:text-6xl mb-5'>Skills</h1>
                <p className='space-x-3 text-lg'>
                    <span className='font-bold text-yellow-500'>Languages: </span>C ┊ C++ ┊ Python ┊ JavaScript <br />
                    <span className='font-bold text-yellow-500'>Frontend: </span>HTML ┊ CSS ┊ Bootstrap ┊ Tailwindcss ┊ React <br />
                    <span className='font-bold text-yellow-500'>Backend: </span>Django ┊ Django REST Framework ┊ MySQL ┊ Postgresql ┊ SQLite <br />
                    <span className='font-bold text-yellow-500'>Data Science: </span>Pandas ┊ Numpy ┊ Jupyter Notebook <br />
                    <span className='font-bold text-yellow-500'>Others: </span>DSA ┊ CP ┊ Firebase ┊ Git ┊ Github ┊ Linux(Ubuntu) ┊ Vercel ┊ Markdown ┊ Supabase <br />
                </p>
                <div className='mt-5 space-y-2'>
                    <p className='font-bold text-yellow-500'>Proficient in:</p>
                    <p>⚡ C++</p>
                    <p>⚡ Python</p>
                    <p>⚡ Django</p>
                    <p>⚡ Django REST Framework</p>
                    <p>⚡ Backend Development</p>
                    <p>⚡ Data Structure & Algorithm</p>
                    <p>⚡ Competitive Programming</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;