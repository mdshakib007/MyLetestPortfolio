import PropTypes from 'prop-types';
import React from 'react';

const TalkAndFeature = ({ talk }) => {
    const { image, title, description, host, host_link, event, event_link } = talk;

    return (
        <div className={`rounded-xl max-w-2xl overflow-hidden flex flex-col p-4 h-full items-center border border-gray-700`}>
            <img src={image} alt={title} className="w-fit mx-2 mb-14 rounded-lg self-center" />
            <div className="flex flex-col items-center text-center flex-grow">
                <h2 className="text-2xl lg:text-3xl m-3 font-bold text-yellow-500">{title}</h2>
                <p className="text-gray-300">{description}</p>
            </div>
            <div className='flex gap-5'>
                <a
                    href={host_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-yellow-500 text-lg text-black font-bold my-5 w-fit"
                >
                    {host}
                </a>
                <a
                    href={event_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-yellow-500 text-lg text-black font-bold my-5 w-fit"
                >
                    {event}
                </a>
            </div>
        </div>
    );
};

TalkAndFeature.propTypes = {
    talk: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        host: PropTypes.string.isRequired,
        host_link: PropTypes.string.isRequired,
        event: PropTypes.string.isRequired,
        event_link: PropTypes.string.isRequired,
    }).isRequired,
};

export default TalkAndFeature;
