
import { ArrowLeftRight, Download } from 'lucide-react';

const page = () => {
    return (
        <div className="md:col-span-3  bg-white p-6 rounded-2xl shadow-sm flex flex-col ">

            <>
                <div className="flex gap-2 bg-gray-100 p-1.5 rounded-xl w-fit mb-6">
                    <button className="bg-[#05a85c] text-white px-6 py-2 rounded-lg text-sm font-medium shadow-sm">
                        All Bookings
                    </button>
                    <button className="text-gray-400 px-6 py-2 rounded-lg text-sm font-medium hover:text-gray-600">
                        Cancelled
                    </button>
                </div>

                {/* Reschedule Notice Box */}
                <div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center my-auto">
                    <div className="bg-green-50 p-3 rounded-full text-[#05a85c] mb-3">
                        <ArrowLeftRight size={24} />
                    </div>
                    <p className="text-gray-700 font-medium mb-4">
                        The Reschedule feature is only available on iOS and Android app
                    </p>
                    <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-all shadow-sm">
                        <Download size={16} />
                        Download Now
                    </button>
                </div>
            </>



        </div>
    );
};

export default page;    