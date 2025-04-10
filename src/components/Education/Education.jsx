import React from 'react';

const Education = () => {
    return (
        <section id='education' className='container mx-auto mt-24 items-center px-6'>
            <h1 className='text-4xl md:text-6xl mb-5'>Education</h1>
            <div className='md:flex md:items-center gap-5 border-y border-gray-700 hover:bg-gray-800'>
                <img src="/mpi.png" alt="MPI" className='w-28 md:w-40 p-2' />
                <div className='space-y-1 py-1'>
                    <h2 className='text-yellow-500 text-3xl md:text-4xl mb-2'>Mymensingh Polytechnic Institute <span className='text-xl font-bold tooltip text-gray-400'
                         data-tip="After 2 years of study, I transferred from Habiganj Polytechnic Institute."
                         > (Previously HPI)</span>
                    </h2>
                    <p className='font-bold text-lg'>Diploma in Computer Science</p>
                    <p>January 2022 - December 2025</p>
                    <p>Mymensingh, Bangladesh</p>
                </div>
            </div>
        </section>
    );
};

export default Education;