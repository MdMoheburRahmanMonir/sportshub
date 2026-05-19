"use client"
import React, { useState } from 'react';
import { User, Ticket, MessageSquare, ArrowLeftRight, Download } from 'lucide-react';
import Link from 'next/link';

const UserProfile = ({ children }) => {
    const [activeTab, setActiveTab] = useState('all-bookings');

    // Dummy user data
    const user = {
        name: 'Mohibur Monir',
        email: 'mdmohiburrahmanmanik@gmail.com',
    };

    return (
        <div className="w-full mx-auto p-4  "> 
            <div className="container mx-auto flex gap-6">

                {/* Sidebar */}
                <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center h-fit">
                    {/* Profile Picture Placeholder */}
                    <div className="w-24 h-24 bg-slate-600 rounded-full flex items-center justify-center text-white mb-4 shadow-inner">
                        <User size={40} />
                    </div>

                    <h2 className="font-bold text-lg text-gray-800 text-center">{user.name}</h2>
                    <p className="text-xs text-gray-500 mb-6 break-all text-center">{user.email}</p>

                    {/* Navigation Links */}
                    <div className="w-full flex flex-col space-y-2">
                        <Link href={'/profile/mybookings'}>
                            <button
                                onClick={() => setActiveTab('all-bookings')}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${activeTab === 'all-bookings'
                                    ? 'bg-[#05a85c] text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Ticket size={18} />
                                All Bookings
                            </button>
                        </Link>

                        <Link href={'/profile/edit-profile'}>
                            <button
                                onClick={() => setActiveTab('edit-profile')}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${activeTab === 'edit-profile'
                                    ? 'bg-[#05a85c] text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <User size={18} />
                                Edit Profile
                            </button>
                        </Link>

                        <Link href={'/profile/feedback'}>
                            <button
                                onClick={() => setActiveTab('feedback')}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${activeTab === 'feedback'
                                    ? 'bg-[#05a85c] text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <MessageSquare size={18} />
                                Feedback
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Main Content Area */}
                {children}

            </div>
        </div>
    );
};

export default UserProfile;