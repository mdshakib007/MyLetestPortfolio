import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';

const ExperienceCard = ({ experience }) => {
    const { organization, image, job_title, time, description } = experience;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.8, filter: 'blur(10px)', opacity: 0 }}
            animate={
                isInView
                    ? { scale: 1, filter: 'blur(0px)', opacity: 1 }
                    : { scale: 0.8, filter: 'blur(10px)', opacity: 0 }
            }
            transition={{ duration: 1, ease: 'easeOut' }}
            className="rounded-2xl border border-slate-700 max-w-2xl overflow-hidden relative hover:shadow-lg hover:shadow-yellow-500 hover:-translate-y-1 transition-all duration-300"
        >
            <div className="relative bg-yellow-500 p-3 min-h-[150px]">
                <h3 className="text-3xl p-5 text-center text-black font-bold">{organization}</h3>
                <img
                    src={image}
                    alt={organization}
                    className="h-36 object-cover absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2"
                />
            </div>
            <div className="pt-20 pb-5 px-3 flex flex-col items-center text-center">
                <h2 className="text-2xl lg:text-3xl my-3">{job_title}</h2>
                <h4 className="text-lg font-bold text-yellow-500 mb-5">{time}</h4>
                <p className="text-gray-300">{description}</p>
            </div>
        </motion.div>
    );
};

ExperienceCard.propTypes = {
    experience: PropTypes.shape({
        organization: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        job_title: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default ExperienceCard;
