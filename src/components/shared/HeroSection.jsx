'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroData = [
    {
        titleFirst: "Book Your ",
        titleSecont: "Sports Facilities",
        description: "Discover and book football grounds, cricket fields, badminton courts and more with ease.",
        image: "https://i.ibb.co.com/5hcqjWQv/rear-view-of-cricket-ball-hitting-stumps-behind-batsman.jpg"
    },
    {
        titleFirst: "Play More, ",
        titleSecont: "Book Faster",
        description: "Discover top-rated sports venues near you and book your perfect game spot instantly.",
        image: "https://i.ibb.co.com/KHGTVtZ/the-moment-of-jumping-and-smashing-the-badminton-game.jpg"
    },
    {
        titleFirst: "Find & Book Your",
        titleSecont: "Next Game Spot",
        description: "Easily explore nearby sports facilities and secure your booking without any hassle.",
        image: "https://i.ibb.co.com/YFJ5f8HM/male-sportsman-in-action.jpg"
    },
    {
        titleFirst: "Your Game ",
        titleSecont: "Starts Here",
        description: "A smarter way to discover, compare, and book sports facilities anytime, anywhere.",
        image: "https://i.ibb.co.com/ZpqL9397/composite-collage-rear-view-photo-of-young-male-soccer-player-dressed-blue-uniform-ready-to.jpg"
    },
]

const HeroSection = () => {
    return (
        <Swiper
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false, }}
            loop={true}
            pagination={{ clickable: true }}
            className='overflow-auto'
        >
            {HeroData.map((item, i) => (
                <SwiperSlide key={i}>
                    <section className="relative px-6 lg:px-12 py-15">

                        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/40 blur-[200px] rounded-full"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/40 blur-[200px] rounded-full"></div>

                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

                            <div>
                                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                                    {item.titleFirst}
                                    <span className="text-blue-600 block">
                                        {item.titleSecont}
                                    </span>
                                </h1>

                                <p className="text-black/80 dark:text-white/80 mt-6 text-lg">
                                    {item.description}
                                </p>

                                <Link href="/allfacilities">
                                    <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold">
                                        Explore Facilities
                                    </button>
                                </Link>
                            </div>


                            <div className="relative shadow-lg transition-all duration-500 ease-out hover:shadow-xl shadow-black/20 dark:shadow-white/20 bg-blue-600/70 rounded-3xl">
                                <motion.img
                                    src={item.image}
                                    alt={item.titleFirst}
                                    className="rounded-3xl w-full h-[500px] object-cover"
                                    initial={{ opacity: 0, x: 20, rotate: -5 }}
                                    animate={{ opacity: 1, x: 0, rotate: -2 }}
                                    whileHover={{ scale: 1.01, rotate: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSection;