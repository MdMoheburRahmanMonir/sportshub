"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";


const EditButton = ({ token, id, fsName }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.availableTimeSlots = Array(data.availableTimeSlots)
        console.log(data);

        const postData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/managemyfacilities/${id}`, {
            method: 'PATCH',
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await postData.json();
        if (postData.ok) {
            router.push('/allfacilities');
            toast.success('Your Post successfully Updated.')
        } else {
            toast.error(result.message || 'Failed to add facility');
            router.push('/');
        }
    };


    return (
        <>
            <Modal>
                <Button variant="secondary" className="text-white rounded-lg bg-blue-600">Edit Facilities</Button>
                <Modal.Backdrop >
                    <Modal.Container placement="auto" >
                        <Modal.Dialog className="sm:max-w-md bg-black/70 backdrop-blur-[8px]">
                            <Modal.CloseTrigger className="text-white" />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <FaEdit className="size-5 text-white bg-black/20" />
                                </Modal.Icon>
                                <Modal.Heading className="text-white">Update your Data</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted text-white">
                                    Let's make better about our Facilities
                                </p>
                            </Modal.Header>
                            <Modal.Body className="scrollbar-none " >
                                <Surface variant="default" className="bg-transparent">
                                    <form onSubmit={handleSubmit} className="space-y-6  ">

                                        {/* Facility Name */}
                                        <div>
                                            <label className="text-sm scrollbar-none  text-white font-semibold">Facility Name</label>
                                            <input
                                                name="facilityName"
                                                placeholder={`${fsName || "Football"}`}
                                                className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/7 shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                                            />
                                        </div>

                                        {/* Facility Type */}
                                        <div>
                                            <label className="text-sm text-white font-semibold">Facility Type</label>
                                            <select
                                                name="facilityType"
                                                className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/7 shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                                            >
                                                <option value="" className="text-black">Select Type</option>
                                                <option value="football" className="text-black">Football</option>
                                                <option value="cricket" className="text-black">Cricket</option>
                                                <option value="badminton" className="text-black">Badminton</option>
                                                <option value="basketball" className="text-black">Basketball</option>
                                                <option value="swimming" className="text-black">Swimming</option>
                                            </select>
                                        </div>

                                        {/* Image */}
                                        <input
                                            name="image"
                                            placeholder="Image URL"
                                            className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/7 shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                                        />

                                        {/* Location */}
                                        <input
                                            name="location"
                                            placeholder="Location"
                                            // className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
                                            className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/7 shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                                        />

                                        {/* GRID */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                            <input
                                                name="pricePerHour"
                                                type="number"
                                                placeholder="Price per hour"
                                                className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/7 shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                                            // className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
                                            />

                                            <input
                                                name="capacity"
                                                type="number"
                                                placeholder="Capacity"
                                                className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/7 shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                                                // className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
                                                />
                                        </div>

                                        {/* Slots */}
                                        <div>
                                            <label className="text-sm text-white font-semibold">Available Time Slots</label>
                                            <select
                                                name="availableTimeSlots" 
                                                className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/7 shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                                                required
                                            >
                                                <option value="">Select </option>
                                                <option value="06:00-08:00">06:00-08:00</option>
                                                <option value="08:00-10:00">08:00-10:00</option>
                                                <option value="10:00-12:00">10:00-12:00</option>
                                                <option value="12:00-14:00">12:00-14:00</option>
                                                <option value="16:00-18:00">16:00-18:00</option>
                                                <option value="18:00-22:00">18:00-22:00</option>
                                            </select>
                                        </div>

                                        {/* Description */}
                                        <textarea
                                            name="description"
                                            rows={4}
                                            placeholder="Description"
                                            className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/7 shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                                        // className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
                                        />

                                        {/* EMAIL */}
                                        <input
                                            name="ownerEmail"
                                            readOnly
                                            placeholder="Email"
                                            className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/7 shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                                        // className="w-full px-4 py-3 rounded-xl text-white bg-white/5"
                                        />

                                        {/* BUTTONS */}
                                        <div className="flex gap-4 justify-end pt-4">
                                            <Modal.Footer>
                                                <Button slot="close" variant="secondary" className={`text-white`}>
                                                    Cancel
                                                </Button>
                                                <Button type="submit" slot="close" className={`text-black bg-white`}>Send Message</Button>
                                            </Modal.Footer>
                                        </div>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>

        </>
    );
};

export default EditButton;


 