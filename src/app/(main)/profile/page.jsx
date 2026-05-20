import { Download, } from "lucide-react";
import Link from "next/link";
import { TbError404Off } from "react-icons/tb";

const Page = () => {
    return (
        <div className="md:col-span-3 min-h-screen rounded-3xl border border-gray-200 dark:border-gray-800 bg-transparent shadow dark:shadow-white/30 shadow-black/30 p-6 lg:p-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        My Bookings
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Manage your bookings and reschedule your appointments easily.
                    </p>
                </div> 
                
            </div> 
            {/* Empty State */}
            <div className="border border-gray-50/0 border-t-gray-500/50 p-10 lg:p-16 flex flex-col items-center justify-center text-center  ">

                {/* Icon */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full"></div>

                    <div className="relative bg-blue-50 dark:bg-blue-500/10 p-5 rounded-2xl text-red-400">
                        <TbError404Off size={34} />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    OOHH ! sorry you don't have any bookings right now
                </h2>

                {/* Description */}
                <p className="max-w-md text-gray-500 dark:text-gray-400 leading-7 mb-8">
                    To ensure your booking, Please go to All Bookings page to explore your bookings.
                </p>
                {/* Button */}
                <Link href={'/allfacilities'}>
                    <button className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-2xl text-sm font-medium transition-all shadow-lg hover:scale-[1.02]">
                        All Bookings
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Page;