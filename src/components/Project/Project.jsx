import PropTypes from 'prop-types';
import React from 'react';

const Project = ({ project }) => {
    const { image, title, description, btn_text, btn_link, btn_text2, btn_link2, shadow } = project;

    return (
        <div className={`rounded-xl max-w-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col bg-slate-800 p-4 h-full items-center hover:shadow-lg ${shadow ? shadow : 'shadow-yellow-500'}`}>
            <img src={image} alt={title} className="h-42 mx-2 my-14 rounded-lg self-center" />
            <div className="flex flex-col items-center text-center flex-grow">
                <h2 className="text-2xl lg:text-3xl m-3 font-bold text-yellow-500">{title}</h2>
                <p className="text-gray-300">{description}</p>
            </div>
            <div className="flex gap-5">
                <a
                    href={btn_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-yellow-500 text-lg text-black font-bold my-5 w-fit"
                >
                    {btn_text}
                </a>
                {
                    btn_text2 && <a
                        href={btn_link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-yellow-500 text-lg text-black font-bold my-5 w-fit"
                    >
                        {btn_text2}
                    </a>
                }
            </div>
        </div>
    );
};

Project.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        btn_text: PropTypes.string.isRequired,
        btn_link: PropTypes.string.isRequired,
        shadow: PropTypes.string.isRequired,
    }).isRequired,
};

export default Project;
