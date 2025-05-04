import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


const Achievement = ({ achievement }) => {
    const { image, title, description, btn_text, btn_link } = achievement;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="rounded-xl max-w-2xl overflow-hidden flex flex-col bg-slate-700 p-4 h-full items-center"
        >
            <img src={image} alt={title} className="h-24 mx-2 my-14 rounded-lg self-center" />
            <div className="flex flex-col items-center text-center flex-grow">
                <h2 className="text-2xl lg:text-3xl m-3 font-bold text-yellow-500">{title}</h2>
                <p className="text-gray-300">{description}</p>
            </div>
            <a
                href={btn_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-yellow-500 text-lg text-black font-bold my-5 w-fit"
            >
                {btn_text}
            </a>
        </motion.div>
    );
};

Achievement.propTypes = {
    achievement: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        btn_text: PropTypes.string.isRequired,
        btn_link: PropTypes.string.isRequired,
    }).isRequired,
};

export default Achievement;
