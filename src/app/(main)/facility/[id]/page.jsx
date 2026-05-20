import { auth } from '@/lib/auth';
import { logger } from 'better-auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaUsers } from "react-icons/fa";

const FacilityDetailsPage = async ({ params }) => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const userID = session?.user?.id;
    console.log(userID);



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

    const handelSubmit = async (formData) => {
        "use server";

        const bookingData = {
            facility_id: data._id,
            facility_name: data.facilityName,
            price_per_hour: data.pricePerHour,
            total_price: formData.get("hours") * data.pricePerHour,
            booking_date: formData.get("bookingDate"),
            time_slot: formData.get("timeSlot"),
            hours: formData.get("hours"),
            status: "pending",
            createdAt: new Date(),
            user_id: userID,
        };

        const response = await fetch(`http://localhost:5000/facility`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(bookingData),
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Booking successful:', result);
            redirect('/mybookings');
        } else {
            console.error('Booking failed:', result);
        }
        console.log(bookingData, result);
    };

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
                    {/* Booking Section */}
                    <div className="mt-10 border-t pt-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                            Book This Facility
                        </h2>

                        <form action={handelSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Facility Name */}
                            <div className="md:col-span-2">
                                <label className="text-sm font-semibold">Facility Name</label>
                                <input
                                    type="text"
                                    defaultValue={data.facilityName}
                                    readOnly
                                    className="w-full mt-2 px-4 py-3 rounded-xl bgtransparent backdrop-blur-[5px] shadow-md dark:shadow-white/15 shadow-black/15"
                                />
                            </div>

                            {/* Booking Date */}
                            <div>
                                <label className="text-sm font-semibold">Booking Date</label>
                                <input
                                    type="date"
                                    name="bookingDate"
                                    className="w-full mt-2 px-4 py-3 rounded-xl bgtransparent backdrop-blur-[5px] shadow-md dark:shadow-white/15 shadow-black/15"
                                    required
                                />
                            </div>

                            {/* Time Slot */}
                            <div>
                                <label className="text-sm font-semibold">Time Slot</label>
                                <select
                                    name="timeSlot"
                                    className="w-full mt-2 px-4 py-3 rounded-xl bgtransparent backdrop-blur-[5px] shadow-md dark:shadow-white/15 shadow-black/15"
                                    required
                                >
                                    <option value="">Select Slot</option>
                                    {data.availableTimeSlots.map((slot, i) => (
                                        <option key={i} value={slot}>
                                            {slot}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Hours */}
                            <div>
                                <label className="text-sm font-semibold">Hours</label>
                                <input
                                    type="number"
                                    name="hours"
                                    min="1"
                                    className="w-full mt-2 px-4 py-3 rounded-xl bgtransparent backdrop-blur-[5px] shadow-md dark:shadow-white/15 shadow-black/15"
                                    required
                                />
                            </div>

                            {/* Total Price (readonly UI only) */}
                            <div>
                                <label className="text-sm font-semibold">Price Per Hour</label>
                                <input
                                    type="text"
                                    value={`৳${data.pricePerHour}`}
                                    readOnly
                                    className="w-full mt-2 px-4 py-3 rounded-xl bgtransparent backdrop-blur-[5px] shadow-md dark:shadow-white/15 shadow-black/15"
                                />
                            </div>

                            {/* Submit */}
                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
                                >
                                    Confirm Booking
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityDetailsPage;