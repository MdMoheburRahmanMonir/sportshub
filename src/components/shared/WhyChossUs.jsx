import React from 'react';
import { FaCalendarCheck, FaMapMarkedAlt, FaShieldAlt, FaStar } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <section className="relative px-6 lg:px-12 py-5">
            <div className="absolute top-10 right-20 w-80 h-80 bg-cyan-600/30 blur-[200px] rounded-full"></div>
            <div className="absolute bottom-0 left-5 w-80 h-80 bg-green-600/50 blur-[200px] rounded-full"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                        Why Choose
                        <span className="text-blue-600 block">
                            Our Platform
                        </span>
                    </h2>

                    <p className="mt-6 text-black/80 dark:text-white/80 text-lg">
                        We make sports facility booking faster, easier and more
                        reliable for everyone.
                    </p>
                </div>

                <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">


                    <div className="relative group bg-white/70 dark:bg-white/5 shadow-black/20 dark:shadow-white/20 backdrop-blur-lg overflow-hidden border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full group-hover:bg-blue-600/20 transition duration-300"></div>
                        <div className="w-16 h-16 group-hover:-rotate-6 transition-all duration-300 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-3xl">
                            <FaCalendarCheck />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold">
                            Easy Booking
                        </h3>

                        <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
                            Book your favorite sports facility instantly with a
                            smooth and hassle-free process.
                        </p>
                    </div>


                    <div className="relative group bg-white/70 dark:bg-white/5 shadow-black/20 dark:shadow-white/20 backdrop-blur-lg overflow-hidden border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full group-hover:bg-blue-600/20 transition duration-300"></div>
                        <div className="w-16 h-16 rounded-2xl group-hover:-rotate-6 transition-all duration-300 bg-blue-600 text-white flex items-center justify-center text-3xl">
                            <FaMapMarkedAlt />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold">
                            Multiple Locations
                        </h3>

                        <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
                            Find football grounds, cricket fields, badminton
                            courts and more near your area.
                        </p>
                    </div>

                    <div className="relative group bg-white/70  shadow-black/20 dark:shadow-white/20 overflow-hidden dark:bg-white/5 backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full group-hover:bg-blue-600/20 transition duration-300"></div>
                        <div className="w-16 h-16 rounded-2xl group-hover:rotate-6 transition-all duration-300 bg-blue-600 text-white flex items-center justify-center text-3xl">
                            <FaShieldAlt />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold">
                            Trusted Facilities
                        </h3>

                        <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
                            We provide verified and high-quality sports venues
                            for the best experience.
                        </p>
                    </div>

                    <div className="relative group shadow-black/20 dark:shadow-white/20 bg-white/70 dark:bg-white/5 overflow-hidden backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full group-hover:bg-blue-600/20 transition duration-300"></div>
                        <div className="w-16 h-16 rounded-2xl group-hover:rotate-6 transition-all duration-300 bg-blue-600 text-white flex items-center justify-center text-3xl">
                            <FaStar />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold">
                            Top Rated Experience
                        </h3>

                        <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
                            Enjoy premium facilities loved and rated highly by
                            sports enthusiasts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;