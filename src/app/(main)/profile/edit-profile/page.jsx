"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ProfileEditPage() {

    const router = useRouter()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const Value = new FormData(e.currentTarget)
        const data = Object.fromEntries(Value.entries()) 
        const { image, name } = data;
        await authClient.updateUser({
            name,
            image,
        },
            {
                onRequest: (ctx) => {
                    toast.info('Your Data Updating')
                    //show loading
                },
                onSuccess: (ctx) => {
                    toast.success('Hay Your Data Updated Success')
                    router.push('/')
                },
                onError: (ctx) => {
                    // display the error message 
                    toast.error(ctx.error.message)
                },
            },
        )


    };

    return (
        <div className=" w-full  flex items-center justify-center p-5">
            <div className="w-full max-w-md  shadow-lg dark:shadow-white/20 shadow-black/20 rounded-2xl p-6">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Edit Profile
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Change Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Change Image URL
                        </label>

                        <input
                            type="text"
                            name="image"
                            placeholder="Enter image url"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>



                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}