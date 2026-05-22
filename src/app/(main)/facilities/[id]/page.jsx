
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

    const { token } = await auth.api.getToken({
        headers: await headers()
    });


    const userID = session?.user?.id;

    // if (!userID) {
    //     redirect("/login");
    // }


    const { id } = await params;
    // const userID = "hello"

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`, {
        headers: {
            'authorization': `Bearer ${token}`,
        }
    });

    const data = await res.json();

    const handelSubmit = async (formData) => {
        "use server";

        if (!userID) {
            redirect("/login");
        }
        const bookingData = {
            facility_id: data._id,
            facility_name: data.facilityName,
            facilityType: data.facilityType,
            pricePerHour: data.pricePerHour,
            total_price: Number(formData.get("hours")) * Number(data.pricePerHour),
            booking_date: formData.get("bookingDate"),
            time_slot: formData.get("timeSlot"),
            hours: formData.get("hours"),
            status: "pending",
            createdAt: new Date(),
            user_id: userID || "User Not Login",
        };


        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
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
        console.log(result);
    };

    return (
        <div className="w-11/12 mx-auto py-10 flex justify-center">
            <div className=" w-full bg-transparent backdrop-blur-[6px] shadow dark:shadow-white/20 shadow-black/20 rounded-3xl shadow-xl overflow-hidden">

                <div className="w-full h-[600px]">
                    <img
                        src={data.image}
                        alt={data.facilityName}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                </div>

                <div className="p-8 space-y-6 flex flex-col">


                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
                            {data.facilityName}
                        </h1>

                        <span className="inline-block mt-2 px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                            {data.facilityType}
                        </span>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="p-4 rounded-xl bg-transparent backdrop-blur-[5px] shadow-md dark:shadow-white/30 shadow-black/30 hover:scale-105 transition-all duration-200">
                            <div className="flex items-center gap-2 mb-1 text-slate-500">
                                <FaMapMarkerAlt className="text-blue-500" />
                                <p className="text-sm">Location</p>
                            </div>

                            <p className="font-semibold text-slate-800 dark:text-white">
                                {data.location}
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-transparent backdrop-blur-[5px] shadow-md dark:shadow-white/30 shadow-black/30 hover:scale-105 transition-all duration-200">
                            <div className="flex items-center gap-2 mb-1 text-slate-500">
                                <FaDollarSign className="text-blue-500" />
                                <p className="text-sm">Price / Hour</p>
                            </div>

                            <p className="font-semibold text-blue-600 text-lg">
                                ${data.pricePerHour}
                            </p>
                        </div>


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


                    <div>
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                            Description
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {data.description}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                            Available Time Slots
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {data.availableTimeSlots?.map((slot, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 rounded-xl bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium shadow-md"
                                >
                                    {slot}
                                </div>
                            ))}
                        </div>
                    </div>

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


                            <div>
                                <label className="text-sm font-semibold">Booking Date</label>
                                <input
                                    type="date"
                                    name="bookingDate"
                                    className="w-full mt-2 px-4 py-3 rounded-xl bgtransparent backdrop-blur-[5px] shadow-md dark:shadow-white/15 shadow-black/15"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">Rent Houre</label>

                                <input
                                    type="number"
                                    name="hours"
                                    min="1"
                                    className="w-full mt-2 px-4 py-3 rounded-xl bgtransparent backdrop-blur-[5px] shadow-md dark:shadow-white/15 shadow-black/15"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold">Select Time Slot</label>

                                <select
                                    name="timeSlot"
                                    className="w-full mt-2 px-4 py-3 rounded-xl bgtransparent backdrop-blur-[5px] shadow-md dark:shadow-white/15 shadow-black/15"
                                    required
                                >
                                    <option value="">Select Time Slot</option>

                                    {data.availableTimeSlots?.map((slot, index) => (
                                        <option key={index} value={slot}>
                                            {slot}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-semibold">Price Per Hour</label>
                                <input
                                    type="text"
                                    value={`৳${data.pricePerHour}`}
                                    readOnly
                                    className="w-full mt-2 px-4 py-3 rounded-xl bgtransparent backdrop-blur-[5px] shadow-md dark:shadow-white/15 shadow-black/15"
                                />
                            </div>
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