"use client";

import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditButton = ({ token, booking, Path }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataRes = new FormData(e.currentTarget);
        const forDataTaken = Object.fromEntries(dataRes.entries())

        console.log(forDataTaken);


        const resData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${Path}/${booking}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                // 'Authorization': `Bearer ${token}`,
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
            <Button onClick={() => setOpen(true)} variant="secondary" className="text-white rounded-lg bg-blue-600">✏️ Edit Facilities</Button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/70 rounded-lg backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="
                                w-[92%] max-w-lg 
                                p-6 rounded-2xl 
                                bg-transparent backdrop-blur-[10px]
                                border border-white/10 
                                shadow-sm dark:shadow-white/10 shadow-black/30
                                transition-all duration-300
                            ">

                        {/* Header */}
                        <h2 className="text-2xl font-bold mb-6 text-white">
                            Edit Booking
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* name="booking_date" */}


                            <input
                                name="booking_date"
                                type="date"
                                placeholder="Price per hour"
                                className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-transparent shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                            // className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
                            />
                            <input
                                name="time_slot"
                                type="text"
                                placeholder="Time Slot"
                                className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-transparent shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                            // className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
                            />
                            <input
                                name="hours"
                                type="number"
                                placeholder="Hours"
                                className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-transparent shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                            // className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
                            />


                            <Modal.Footer className="flex gap-4 justify-end pt-4">
                                <Button onClick={() => setOpen(false)} slot="close" variant="secondary" className={`text-white`}>
                                    Cancel
                                </Button>
                                <Button type="submit" slot="close" className={`text-black bg-white`}>Send Message</Button>
                            </Modal.Footer>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditButton;