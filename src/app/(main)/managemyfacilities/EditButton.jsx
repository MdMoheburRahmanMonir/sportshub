"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";


const EditButton = ({ token, id, fsName}) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

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
                                    <FaEdit  className="size-5 text-white bg-black/20" />
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
                                        <input
                                            name="availableTimeSlots"
                                            placeholder="Time Slots"
                                            className=" w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/7 shadow-lg  shadow-white/15   placeholder:text-white/60 focus:outline-none"
                                            // className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
                                        />

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




//         {/* Edit Button */}
//         <button
//             onClick={() => setOpen(true)}
//             className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full"
//         >
//             ✏️ Edit
//         </button>

//         {/* Modal */}
//         {open && (
//             <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

//                 {/* MODAL BOX */}
//                 <div className="
//   w-full max-w-3xl
//   max-h-[90vh]
//   overflow-y-auto
//   rounded-2xl
//   bg-black/70
//   shadow-2xl
//   p-6
//   relative
// ">

//                     {/* CLOSE BUTTON (optional but recommended) */}
//                     <button
//                         onClick={() => setOpen(false)}
//                         className="absolute top-4 right-4 text-white text-xl"
//                     >
//                         ✕
//                     </button>

//                     {/* HEADER */}
//                     <h2 className="text-2xl font-bold mb-6 text-white">
//                         Edit Facility
//                     </h2>

//                     {/* FORM */}
// <form onSubmit={handleSubmit} className="space-y-6">

//     {/* Facility Name */}
//     <div>
//         <label className="text-sm text-white font-semibold">Facility Name</label>
//         <input
//             name="facilityName"
//             className="w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60 focus:outline-none"
//         />
//     </div>

//     {/* Facility Type */}
//     <div>
//         <label className="text-sm text-white font-semibold">Facility Type</label>
//         <select
//             name="facilityType"
//             className="w-full mt-2 px-4 py-3 rounded-xl text-white bg-white/10"
//         >
//             <option value="" className="text-black">Select Type</option>
//             <option value="football" className="text-black">Football</option>
//             <option value="cricket" className="text-black">Cricket</option>
//             <option value="badminton" className="text-black">Badminton</option>
//             <option value="basketball" className="text-black">Basketball</option>
//             <option value="swimming" className="text-black">Swimming</option>
//         </select>
//     </div>

//     {/* Image */}
//     <input
//         name="image"
//         placeholder="Image URL"
//         className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
//     />

//     {/* Location */}
//     <input
//         name="location"
//         placeholder="Location"
//         className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
//     />

//     {/* GRID */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//         <input
//             name="pricePerHour"
//             type="number"
//             placeholder="Price per hour"
//             className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
//         />

//         <input
//             name="capacity"
//             type="number"
//             placeholder="Capacity"
//             className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
//         />
//     </div>

//     {/* Slots */}
//     <input
//         name="availableTimeSlots"
//         placeholder="Time Slots"
//         className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
//     />

//     {/* Description */}
//     <textarea
//         name="description"
//         rows={4}
//         placeholder="Description"
//         className="w-full px-4 py-3 rounded-xl text-white bg-white/10 placeholder:text-white/60"
//     />

//     {/* EMAIL */}
//     <input
//         name="ownerEmail"
//         readOnly
//         placeholder="Email"
//         className="w-full px-4 py-3 rounded-xl text-white bg-white/5"
//     />

//     {/* BUTTONS */}
//     <div className="flex gap-4 justify-end pt-4">

//         <button
//             type="button"
//             onClick={() => setOpen(false)}
//             className="px-5 py-2 rounded-xl bg-gray-700 text-white"
//         >
//             Cancel
//         </button>

//         <button
//             type="submit"
//             className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
//         >
//             Save Changes
//         </button>

//     </div>

// </form>
//                 </div>
//             </div>
//         )}