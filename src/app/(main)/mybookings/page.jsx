import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { BsPencilSquare } from "react-icons/bs";
import { LuTrash2 } from "react-icons/lu";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const MyBookingPage = async () => {

    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const userId = session?.user?.id;
    console.log(session?.user?.email);

    if (!userId) {
        redirect("/login");
    }

    const res = await fetch(
        `http://localhost:5000/mybookings/${userId}`,
        { cache: "no-store" }
    );

    const Path = 'mybookings';

    const data = await res.json();

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-1 text-center">
                My Bookings
            </h1>
            <p className="text-4xl font-bold mb-8 text-center">
                Your total amount is {data.reduce((sum, item) => sum + item.total_price, 0)}৳
            </p>
            {data.length === 0 ? (
                <div className="text-center text-xl font-medium mb-40">
                    No Booking Found
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((booking) => (
                        <div
                            key={booking._id}
                            className="shadow-lg rounded-2xl p-6"
                        >
                            <h2 className="text-2xl font-bold text-green-700">
                                {booking.facility_name}
                            </h2>

                            <p>Booking Date: {booking.booking_date}</p>
                            <p>Time Slot: {booking.time_slot}</p>
                            <p>Hours: {booking.hours}</p>
                            <p>Price: ৳{booking.total_price}</p>

                            <div className="pt-2">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${booking.status === "pending"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-green-100 text-green-700"
                                        }`}
                                >
                                    {booking.status}
                                </span>
                            </div>

                            {/* client component buttons */}
                             <div className="mt-5 flex gap-2">
                                <EditButton
                                    token={token}
                                    booking={booking.facility_id}
                                    Path={Path}
                                    />
                                <DeleteButton
                                    token={token}
                                    facilityId={booking.facility_id}
                                    Path={Path}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookingPage;