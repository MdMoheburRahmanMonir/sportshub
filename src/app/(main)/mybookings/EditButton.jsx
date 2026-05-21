"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditButton = ({ token, booking,Path }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataRes = new FormData(e.currentTarget);
        const forDataTaken = Object.fromEntries(dataRes.entries())

        console.log(forDataTaken);


        const resData = await fetch(`http://localhost:5000/${Path}/${booking}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(forDataTaken),
        });
        const mainData = await resData.json()
        if (resData.ok) { 
            window.location.reload();
        } 
    };






    return (
        <>
            {/* Edit Button */}
            <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full"
            >
                ✏️ Edit
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/15 dark:bg-white/15  rounded-lg backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="
                                w-[92%] max-w-lg 
                                p-6 rounded-2xl 
                                bg-transparent backdrop-blur-[10px]
                                border border-white/10 
                                shadow-sm dark:shadow-white/10 shadow-black/30
                                transition-all duration-300
                            ">

                        {/* Header */}
                        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
                            Edit Booking
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">


                            <input
                                type="date"
                                name="booking_date"
                                className="
                                        w-full p-3 rounded-xl 
                                        bg-white/20 dark:bg-slate-800/40
                                        backdrop-blur-md border border-white/10
                                        text-black dark:text-white  focus:outline-none focus:ring-2 focus:ring-blue-600
                                        transition shadow dark:shadow-white/20 shadow-black/20
                                        "
                            />

                            <input
                                type="text"
                                name="time_slot"
                                placeholder="Time Slot"
                                className="
                                        w-full p-3 rounded-xl   bg-white/20 dark:bg-slate-800/40 backdrop-blur-md
                                        border border-white/10 dark:placeholder:text-white placeholder:text-black
                                        text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600
                                        transition shadow dark:shadow-white/20 shadow-black/20
                                    "
                            />

                            <input
                                type="number"
                                name="hours"
                                placeholder="Hours"
                                className="
                                        w-full p-3 rounded-xl 
                                        bg-white/20 dark:bg-slate-800/40 backdrop-blur-md  border border-white/10
                                        text-black dark:text-white  placeholder:text-black dark:placeholder:text-white
                                        focus:outline-none focus:ring-2 focus:ring-blue-600
                                        transition shadow dark:shadow-white/20 shadow-black/20
                                        "
                            />


                            <div className="flex justify-end gap-3 pt-4">

                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="
                                        px-5 py-2 rounded-xl
                                        bg-black dark:bg-white hover:bg-slate-500
                                        dark:text-black text-white
                                        transition
                    "
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="
                        px-5 py-2 rounded-xl
                        bg-blue-600 hover:bg-blue-700
                        text-white font-semibold
                        shadow-md
                        transition 
                    "
                                >
                                    Save Changes
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditButton;