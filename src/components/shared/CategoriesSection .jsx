import React from 'react';
import { FaFutbol, FaTableTennis, FaBasketballBall, FaSwimmer, FaDumbbell } from 'react-icons/fa';
import { GiCricketBat } from 'react-icons/gi';

const CategoriesSection = () => {
    return (
        <section className="relative px-6 lg:px-12 py-10">
            {/* Background Blur */} 
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/40 blur-[200px] rounded-full"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                        Explore Sports
                        <span className="text-blue-600 block">
                            Categories
                        </span>
                    </h2>

                    <p className="mt-2 text-black/80 dark:text-white/80 text-lg">
                        Find your favorite sports facilities and book them
                        anytime with us.
                    </p>
                </div>

                <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    <div  className="group relative bg-transparent backdrop-blur-[5px] border overflow-hidden border-black/10 dark:border-white/10 rounded-3xl p-10 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/15 dark:shadow-white/15  cursor-pointer">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10  group-hover:bg-blue-600/20 blur-3xl rounded-full"></div>
                        <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl group-hover:scale-110 transition duration-300">
                            <FaFutbol />
                        </div>

                        <h3 className="mt-6 text-3xl font-bold">
                            Football
                        </h3>

                        <p className="mt-4 text-black/70 dark:text-white/70">
                            Premium football turfs and stadiums for your next
                            match.
                        </p>
                    </div>

                    <div className="group backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-3xl p-10 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/15 dark:shadow-white/15  cursor-pointer">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10  group-hover:bg-blue-600/20 blur-3xl rounded-full"></div>

                        <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl group-hover:scale-110 transition duration-300">
                            <GiCricketBat />
                        </div>

                        <h3 className="mt-6 text-3xl font-bold">
                            Cricket
                        </h3>

                        <p className="mt-4 text-black/70 dark:text-white/70">
                            Book quality cricket grounds for tournaments and
                            practice sessions.
                        </p>
                    </div>

                    {/* Badminton */}
                    <div className="group backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-3xl p-10 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/15 dark:shadow-white/15  cursor-pointer">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10  group-hover:bg-blue-600/20 blur-3xl rounded-full"></div>

                        <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl group-hover:scale-110 transition duration-300">
                            <FaTableTennis />
                        </div>

                        <h3 className="mt-6 text-3xl font-bold">
                            Badminton
                        </h3>

                        <p className="mt-4 text-black/70 dark:text-white/70">
                            Indoor badminton courts with premium lighting and
                            flooring.
                        </p>
                    </div>

                    {/* Basketball */}
                    <div className="group backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-3xl p-10 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/15 dark:shadow-white/15  cursor-pointer">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10  group-hover:bg-blue-600/20 blur-3xl rounded-full"></div>

                        <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl group-hover:scale-110 transition duration-300">
                            <FaBasketballBall />
                        </div>

                        <h3 className="mt-6 text-3xl font-bold">
                            Basketball
                        </h3>

                        <p className="mt-4 text-black/70 dark:text-white/70">
                            Explore modern basketball courts for practice and
                            tournaments.
                        </p>
                    </div>

                    {/* Swimming */}
                    <div className="group backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-3xl p-10 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/15 dark:shadow-white/15  cursor-pointer">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10  group-hover:bg-blue-600/20 blur-3xl rounded-full"></div>

                        <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl group-hover:scale-110 transition duration-300">
                            <FaSwimmer />
                        </div>

                        <h3 className="mt-6 text-3xl font-bold">
                            Swimming
                        </h3>

                        <p className="mt-4 text-black/70 dark:text-white/70">
                            Discover clean and professional swimming pools near
                            you.
                        </p>
                    </div>

                    {/* Gym */}
                    <div className="group  backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-3xl p-10 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/15 dark:shadow-white/15 cursor-pointer">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10  group-hover:bg-blue-600/20 blur-3xl rounded-full"></div>
                        <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl group-hover:scale-110 transition duration-300">
                            <FaDumbbell />
                        </div>

                        <h3 className="mt-6 text-3xl font-bold">
                            Gym & Fitness
                        </h3>

                        <p className="mt-4 text-black/70 dark:text-white/70">
                            Access top fitness centers and modern gym facilities
                            anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;