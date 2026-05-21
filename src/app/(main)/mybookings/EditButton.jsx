"use client";

import { Button } from "@heroui/react";
import { BsPencilSquare } from "react-icons/bs";
import { useRouter } from "next/navigation";

const EditButton = ({ booking }) => {
    const router = useRouter();

    const handleEdit = () => { 
        // router.push(`/mybookings/edit/${booking.facility_id}`);
    };

    return (
        <Button
            onClick={handleEdit}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300"
        >
            <BsPencilSquare size={18} />
            Edit Booking
        </Button>
    );
};

export default EditButton;