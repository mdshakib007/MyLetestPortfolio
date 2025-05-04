import React, { useEffect, useState } from 'react';
import ContactIDs from '../ContactIDs/ContactIDs';
import toast from 'react-hot-toast';
import CountUpOnView from './CountUpOnView';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const ContactMe = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [stats, setStats] = useState(null);

    useEffect(() => {
        fetch(`${BASE_URL}/api/v1/blog/view/stats/`)
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(() => toast.error('Error fetching stats'));
    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch(`${BASE_URL}/api/v1/subscription/subscribe/`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.success);
                    setEmail('');
                } else {
                    toast.error(data.email ? data.email : "Unexpected error occurred!");
                    console.log(data);
                }
            })
            .catch((error) => {
                console.error("Subscription error:", error);
                toast.error("Something went wrong!");
            })
            .finally(() => setLoading(false));
    };

    return (
        <section id='contact-me' className='container mx-auto mt-24 px-6'>
            <h1 className='text-4xl md:text-6xl mb-10'>Contact Me</h1>
            <div className='flex flex-col-reverse lg:flex-row-reverse justify-between items-center gap-10'>
                {/* Stats Cards and Subscribe Form */}
                <div className='w-full lg:w-1/2'>
                    {stats && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                            <StatCard label="Blogs" value={stats.total_blogs} />
                            <StatCard label="Reads" value={stats.total_views} />
                            <StatCard label="Claps" value={stats.total_claps} />
                            <StatCard label="Comments" value={stats.total_comments} />
                            <StatCard label="Est. Impressions" value={stats.impression_prediction} />
                        </div>
                    )}

                    {/* Email Subscribe */}
                    <form id="subscribe-form" className="max-w-md w-full" onSubmit={handleSubscribe}>
                        <fieldset className="border p-4 rounded-md shadow bg-gray-900/40 backdrop-blur">
                            <legend className="text-lg font-semibold mb-2 text-white">Get new post notification</legend>
                            <div className="flex items-center border-b border-yellow-500 py-2">
                                <svg className="h-6 w-6 text-gray-300 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input
                                    type="email"
                                    className="bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    placeholder="mail@site.com" required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn mt-4 bg-yellow-500 text-black font-bold w-full rounded-lg py-2"
                            >
                                {loading ? 'Loading...' : 'Subscribe'}
                            </button>
                        </fieldset>
                    </form>
                </div>

                {/* Contact Email and IDs */}
                <div className='text-center lg:text-left'>
                    <a
                        className='text-sm sm:text-lg md:text-xl lg:text-3xl font-bold cursor-pointer text-yellow-500 block mb-4'
                        href='mailto:shakibahmed.528874@gmail.com'
                    >
                        shakibahmed.528874@gmail.com
                    </a>
                    <ContactIDs />
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ label, value }) => (
    <div className="bg-gray-900 p-4 rounded-xl shadow-md text-center w-full">
        <h3 className="text-3xl font-bold text-yellow-400 mb-1">
            <CountUpOnView target={value} />
        </h3>
        <p className="text-sm sm:text-base text-gray-300">{label}</p>
    </div>
);

export default ContactMe;
