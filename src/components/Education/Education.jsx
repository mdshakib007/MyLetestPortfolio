import React, { useRef } from 'react';
import { FaQuestion } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section id='education' className='container mx-auto mt-24 items-center px-6'>
            <h1 className='text-4xl md:text-6xl mb-5'>Education</h1>
            <div
                ref={ref}
                className='relative md:flex md:items-center gap-5 border-y border-gray-700 hover:bg-gray-800 overflow-hidden'
            >
                <img src="/mpi.png" alt="MPI" className='w-28 md:w-40 p-2' />
                <div className='space-y-1 pb-3 pt-1'>
                    <div className="flex items-center gap-2 flex-wrap">
                        <h2 className='text-yellow-500 text-3xl md:text-4xl mb-2'>
                            Mymensingh Polytechnic Institute
                        </h2>
                        <p className='text-xl font-bold text-gray-400'>
                            (Previously HPI)
                            <span
                                className='tooltip tooltip-bottom cursor-help align-super'
                                data-tip="After 2 years of study, I transferred from Habiganj Polytechnic Institute."
                            >
                                <FaQuestion />
                            </span>
                        </p>
                    </div>
                    <p className='font-bold text-lg'>Diploma in Computer Science</p>
                    <p>2022 - 2025 <span className='font-bold'>(4 Years)</span></p>
                    <p>CGPA: <span className='font-bold'>3.52 / 4.00</span></p>
                    <p>Mymensingh, Bangladesh</p>
                </div>

                {/* Animated bottom border */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="absolute bottom-0 left-0 h-1 bg-yellow-500"
                />
            </div>
        </section>
    );
};

export default Education;
