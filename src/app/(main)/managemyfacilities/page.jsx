import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FaEdit, FaTrash, FaMapMarkerAlt, FaUsers, FaDollarSign } from "react-icons/fa";
import EditButton from "../mybookings/EditButton";
import DeleteButton from "../mybookings/DeleteButton";

export default async function ManageMyFacilitiesPage() {

    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const session = await auth.api.getSession({
        headers: await headers()
    });

    console.log(session?.user?.email, token);
    const userEmail = session?.user?.email;

    const res = await fetch(`http://localhost:5000/managemyfacilities/${userEmail}`, {
        // headers: {

        // }    
    })
    const data = await res.json();

    const Path = 'managemyfacilities';

    return (
        <div className="w-11/12 mx-auto py-10">

            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
                    Manage My Facilities
                </h1>
                <p className="text-slate-500 mt-2">
                    Update or remove your sports facilities
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {data.map((item) => (
                    <div
                        key={item._id}
                        className="bg-transparent backdrop-blur-[8px] rounded-3xl shadow-lg dark:shadow-white/10 shadow-black/10 overflow-hidden hover:scale-[1.02] transition"
                    >

                        {/* Image */}
                        <div className="h-56 w-full">
                            <img
                                src={item.image}
                                alt={item.facilityName}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-3">

                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                                {item.facilityName}
                            </h2>

                            <p className="text-sm text-slate-500">
                                {item.facilityType}
                            </p>

                            {/* Info */}
                            <div className="grid grid-cols-2 gap-3 mt-4">

                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                    <FaMapMarkerAlt className="text-blue-500" />
                                    {item.location}
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                    <FaDollarSign className="text-blue-500" />
                                    {item.pricePerHour}/hr
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                    <FaUsers className="text-blue-500" />
                                    {item.capacity} people
                                </div>

                                <div className="text-sm text-slate-500">
                                    {item.availableSlots}
                                </div>

                            </div>

                            {/* Actions (UI only for now) */}
                            <div className="mt-5 flex gap-2">
                                <EditButton
                                    token={token}
                                    booking={userEmail}
                                    Path={Path}
                                />
                                <DeleteButton
                                    token={token}
                                    facilityId={userEmail}
                                    Path={Path}
                                />
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}