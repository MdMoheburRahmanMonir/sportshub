"use client";

import React from "react";
import {
    User,
    Ticket,
    MessageSquare,
    Settings,
    LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const UserProfile = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter()


    const { data: session } = authClient.useSession()
    // Dummy user data
    const user = session?.user;
    console.log(user);



    const navItems = [
        {
            name: "All Bookings",
            icon: Ticket,
            href: "/profile",
        },
        {
            name: "Edit Profile",
            icon: User,
            href: "/profile/edit-profile",
        },
        {
            name: "Feedback",
            icon: MessageSquare,
            href: "/profile/feedback",
        },
    ];

    return (
        <div className="w-full px-4 py-6 lg:px-8 dark:bg-gray-950 transition-all">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">


                <div className="lg:sticky lg:top-6 h-fit">
                    <div className="backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow dark:shadow-white/30 shadow-black/30">


                        <div className="flex flex-col items-center text-center border-b border-gray-100 dark:border-gray-800 pb-6">


                            <div className="relative mb-4">
                                <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full"></div>

                                <div className="relative w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                    {user?.image && <img src={user?.image} alt="Profile img" className="rounded-full" />}

                                </div>
                            </div>


                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                {user?.name}
                            </h2>

                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 break-all">
                                {user?.email}
                            </p>
                        </div>

                        <div className="mt-6 space-y-2">
                            {navItems.map((item, index) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;

                                return (
                                    <Link key={index} href={item.href}>
                                        <div
                                            className={`group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer
                        
                        ${isActive
                                                    ? "bg-blue-600 text-white shadow-md"
                                                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                                }
                      `}
                                        >
                                            <Icon
                                                size={18}
                                                className={`${isActive
                                                    ? "text-white"
                                                    : "text-blue-600"
                                                    }`}
                                            />

                                            {item.name}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 space-y-2">
                            <button onClick={async () => {
                                await authClient.signOut()
                                router.push('/login')

                            }} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all">
                                <LogOut size={18} />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;