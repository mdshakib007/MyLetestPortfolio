import ContactIDs from '../ContactIDs/ContactIDs';

const AboutMe = () => {
    return (
        <section className="container mx-auto mt-24 px-6">
            <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
                <div className="md:w-1/2 mt-8">
                    <h1 className="text-5xl md:text-6xl font-medium mb-5">
                        Hi, I'm MD Shakib Ahmed
                    </h1>
                    <p className="text-lg leading-relaxed">
                        <span className="font-bold text-yellow-500">
                            <span className="text-green-500"> Pupil </span>
                            at CodeForces ┊
                            <span className="text-green-500"> 2⋆ </span>
                            at CodeChef ┊ 1000+ Problem Solved ┊ Django ┊ DRF ┊ Tailwind ┊ React
                        </span>
                        <br />
                        Passionate about{" "}
                        <span className="font-bold">Competitive Programming</span>, Backend Development, and Open Source. I love solving problems, building scalable applications, and sharing knowledge through{" "}
                        <a
                            className="font-bold underline hover:text-yellow-500"
                            href="https://youtube.com/@AlgoAspire/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            AlgoAspire
                        </a>
                        , my educational initiative. My vision is to make high-quality programming education accessible to everyone for free. Currently, I'm working on developing{" "}
                        <span className="font-bold underline hover:text-yellow-500">
                            AlgoAspire-Web
                        </span>
                        , a 100% free e-learning platform (Beyond Learning!).
                    </p>
                    <ContactIDs></ContactIDs>
                    <a href="#contact-me"
                        className='btn mt-5 bg-yellow-500 text-lg text-black font-bold'>
                        Contact me
                    </a>
                </div>
                <div className="md:w-1/2 flex justify-center md:mt-8">
                    <img
                        src="/shakib.jpeg"
                        alt="MD Shakib Ahmed"
                        className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
