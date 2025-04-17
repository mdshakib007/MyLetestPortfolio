import React, { useState } from 'react';
import ContactIDs from '../ContactIDs/ContactIDs';
import toast from 'react-hot-toast';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ContactMe = () => {

    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();

        fetch(`${BACKEND_URL}/api/v1/subscription/subscribe/`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.success);
                } else {
                    toast.error(data.email ? data.email : "Unexpected error occurred!");
                    console.log(data);
                }
            })
    }

    return (
        <section id='contact-me' className='container mx-auto mt-24 px-6'>
            <h1 className='text-4xl md:text-6xl mb-5'>Contact Me</h1>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
                <img src="/contact.svg" alt="" className='mx-6 h-64 lg:h-96' />
                <div className=''>
                    <a
                        className='text-sm sm:text-lg md:text-xl lg:text-3xl font-bold cursor-pointer text-yellow-500'
                        href='mailto:shakibahmed.528874@gmail.com' >
                        shakibahmed.528874@gmail.com
                    </a>
                    <ContactIDs />
                    <form id="subscribe-form" className="max-w-md mx-auto p-4"
                        onSubmit={handleSubscribe}
                    >
                        <fieldset className="border p-4 rounded-md">
                            <legend className="text-lg font-semibold mb-2">Get new post notification</legend>
                            <div className="flex items-center border-b border-yellow-500 py-2">
                                <svg className="h-6 w-6 text-gray-300 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input
                                    type="email" id="subscribe-email" name="subscribe-email"
                                    className="appearance-none bg-transparent border-none w-full text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    placeholder="mail@site.com" required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button type="submit"
                                className="btn mt-4 bg-yellow-500 text-black font-bold"
                            >Subscribe</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;