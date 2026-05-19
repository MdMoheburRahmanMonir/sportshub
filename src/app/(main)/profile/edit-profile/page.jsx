"use client";

import { useState } from "react";

export default function ProfileEditPage() {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Updated Profile:", formData);

        // API call here
    };

    return (
        <div className=" w-full bg-gray-100 flex items-center justify-center p-5">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
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
                            value={formData.name}
                            onChange={handleChange}
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
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Change Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Preview Image */}
                    {formData.image && (
                        <div className="flex justify-center">
                            <img
                                src={formData.image}
                                alt="Preview"
                                className="w-24 h-24 rounded-full object-cover border"
                            />
                        </div>
                    )}

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