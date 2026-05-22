
import { FaBuilding } from 'react-icons/fa';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function SportsFacilityForm() {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user_id = session?.user?.id || 'owner@email.com';
    const user_email = session?.user?.email || 'owner@email.com';




    const handleSubmit = async (formData) => {
        "use server"
 
        const data = Object.fromEntries(formData.entries());
        console.log('Form data is : -',data)
        data.availableTimeSlots = Array(data.availableTimeSlots)

        data.price = data.pricePerHour;
        data.capacity = data.capacity;
        data.user_id = user_id;
        data.user_email = user_email;

        const { token } = await auth.api.getToken({
            headers: await headers()
        });

        console.log(token);




        const postData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addfacilities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });
        const result = await postData.json();
        if (postData.ok) {
            redirect("/managemyfacilities");

        } else {

            redirect("/");

        }

    };



    return (
        <div className="relative flex items-center justify-center p-6">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/40 blur-[200px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/40 blur-[200px] rounded-full"></div>

            <div className="bg-transparent backdrop-blur-lg rounded-3xl shadow-xl dark:shadow-white/15 shadow-black/15 p-8 max-w-4xl w-full">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="bg-black/10 dark:bg-white/10 text-blue-600 p-4 rounded-2xl inline-block mb-3">
                        <FaBuilding />
                    </div>
                    <h1 className="text-3xl font-bold">Add Facility</h1>
                    <p className="text-sm">Create and list your sports facility</p>
                </div>

                {/* FORM */}
                <form action={handleSubmit} className="space-y-6">

                    {/* Facility Name */}
                    <div>
                        <label className="font-semibold text-sm">Facility Name</label>
                        <input
                            name="facilityName"
                            placeholder="Premium Indoor Turf"
                            className="shadow-lg dark:shadow-white/15 shadow-black/15 w-full mt-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-black dark:text-white"
                            required
                        />
                    </div>

                    {/* Facility Type */}
                    <div>
                        <label className="font-semibold text-sm">Facility Type</label>
                        <select
                            name="facilityType"
                            className="shadow-lg dark:shadow-white/15 shadow-black/15 w-full mt-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900"
                            required
                        >
                            <option value="">Select Type</option>
                            <option value="football">Football</option>
                            <option value="cricket">Cricket</option>
                            <option value="badminton">Badminton</option>
                            <option value="basketball">Basketball</option>
                            <option value="swimming">Swimming</option>
                        </select>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="font-semibold text-sm">Image URL</label>
                        <input
                            name="image"
                            placeholder="https://imgbb.com/..."
                            className="shadow-lg dark:shadow-white/15 shadow-black/15 w-full mt-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="font-semibold text-sm">Location</label>
                        <input
                            name="location"
                            placeholder="Sylhet, Bangladesh"
                            className="shadow-lg dark:shadow-white/15 shadow-black/15 w-full mt-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900"
                            required
                        />
                    </div>

                    {/* Price + Capacity */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>

                            <label className="font-semibold text-sm">Capacity</label>
                            <input
                                name="pricePerHour"
                                type="number"
                                placeholder="Price per hour"
                                className="shadow-lg dark:shadow-white/15 shadow-black/15 w-full mt-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900"
                                required
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">Price per Hour</label>

                            <input
                                name="capacity"
                                type="number"
                                placeholder="Capacity"
                                className="shadow-lg dark:shadow-white/15 shadow-black/15 w-full mt-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="font-semibold text-sm">Available Time Slots</label>
                        <select
                            name="availableTimeSlots"
                            className="shadow-lg dark:shadow-white/15 shadow-black/15 w-full mt-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900"
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
                    <div>
                        <label className="font-semibold text-sm">Description</label>
                        <textarea
                            name="description"
                            rows={4}
                            placeholder="Facility details..."
                            className="shadow-lg dark:shadow-white/15 shadow-black/15 w-full mt-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900"
                            required
                        />
                    </div>

                    {/* Owner Email */}
                    <div className="group relative">
                        <label className="font-semibold text-sm">Owner Email</label>
                        <input
                            name="ownerEmail"
                            disabled
                            // defaultValue={user_email}
                            defaultValue={'afasf'}
                            type="email"
                            placeholder="owner@email.com"
                            className="shadow-lg dark:shadow-white/15 shadow-black/15 w-full mt-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900"

                        />
                        <p className="text-xs text-red-400 group-hover:block hidden text-gray-500 mt-1 absolute -bottom-5 left-0">
                            This is your registered email address.  You can change it from your profile settings.
                        </p>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
                    >
                        Publish Facility
                    </button>

                </form>
            </div>
        </div>
    );
}