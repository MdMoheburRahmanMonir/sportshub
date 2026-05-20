import { auth } from '@/lib/auth';
import { header } from 'framer-motion/client';
import { headers } from 'next/headers';
import React from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaUsers } from "react-icons/fa";

const FacilityDetailsPage = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    console.log(token);


    const res = await fetch(`http://localhost:5000/facility/${id}`, {
        cache: 'no-store',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    const data = await res.json();

    return (
        <div className="w-11/12 mx-auto py-10 flex justify-center">
            <div className=" w-full bg-transparent backdrop-blur-[6px] shadow dark:shadow-white/20 shadow-black/20 rounded-3xl shadow-xl overflow-hidden">

                {/* Image */}
                <div className="w-full h-[600px]">
                    <img
                        src={data.image}
                        alt={data.facilityName}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Content */}
                <div className="p-8 space-y-6 flex flex-col">

                    {/* Title + Type */}
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
                            {data.facilityName}
                        </h1>

                        <span className="inline-block mt-2 px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                            {data.facilityType}
                        </span>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* Location */}
                        <div className="p-4 rounded-xl bg-transparent backdrop-blur-[5px] shadow-md dark:shadow-white/30 shadow-black/30 hover:scale-105 transition-all duration-200">
                            <div className="flex items-center gap-2 mb-1 text-slate-500">
                                <FaMapMarkerAlt className="text-blue-500" />
                                <p className="text-sm">Location</p>
                            </div>

                            <p className="font-semibold text-slate-800 dark:text-white">
                                {data.location}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="p-4 rounded-xl bg-transparent backdrop-blur-[5px] shadow-md dark:shadow-white/30 shadow-black/30 hover:scale-105 transition-all duration-200">
                            <div className="flex items-center gap-2 mb-1 text-slate-500">
                                <FaDollarSign className="text-blue-500" />
                                <p className="text-sm">Price / Hour</p>
                            </div>

                            <p className="font-semibold text-blue-600 text-lg">
                                ${data.pricePerHour}
                            </p>
                        </div>

                        {/* Capacity */}
                        <div className="p-4 rounded-xl bg-transparent backdrop-blur-[5px] shadow-md dark:shadow-white/30 shadow-black/30 hover:scale-105 transition-all duration-200">
                            <div className="flex items-center gap-2 mb-1 text-slate-500">
                                <FaUsers className="text-blue-500" />
                                <p className="text-sm">Capacity</p>
                            </div>

                            <p className="font-semibold text-slate-800 dark:text-white">
                                {data.capacity} People
                            </p>
                        </div>

                    </div>

                    {/* Description */}
                    <div>
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                            Description
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    {/* Time Slots */}
                    <div>
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                            Available Time Slots
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {data.availableTimeSlots.map((slot, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-300 text-sm font-medium"
                                >
                                    {slot}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Button */}
                    <button className="w-fit px-10 hover:scale-105 cursor-pointer justify-self-end mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition">
                        Book This Facility
                    </button>

                </div>
            </div>
        </div>
    );
};

export default FacilityDetailsPage;