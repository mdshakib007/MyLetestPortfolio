import React from 'react';
import ContactIDs from '../ContactIDs/ContactIDs';

const ContactMe = () => {
    return (
        <section id='contact-me' className='container mx-auto mt-24 px-6'>
            <h1 className='text-4xl md:text-6xl mb-5'>Contact Me</h1>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
                <img src="contact.svg" alt="" className='mx-6 h-64 lg:h-96' />
                <div className=''>
                    <a
                        className='text-3xl font-bold cursor-pointer text-yellow-500'
                        href='mailto:commonshakib@gmail.com' >
                        commonshakib@gmail.com
                    </a>
                    <ContactIDs />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;