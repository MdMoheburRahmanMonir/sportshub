import Link from "next/link";
import { TbError404Off } from "react-icons/tb";

const Page = () => {
  // demo data (uncommented & converted to array)
  const bookings = [
    {
      _id: { $oid: "6a0fb13b84456e7d5df266c4" },
      facility_id: "6a0ca2368de139a7f10375a0",
      facility_name: "River Side Tennis Court",
      facilityType: "Tennis",
      pricePerHour: 500,
      total_price: 55500,
      booking_date: "1111-11-11",
      time_slot: "15:00-20:00",
      hours: "111",
      status: "pending",
      createdAt: "2026-05-22T01:28:27.871Z",
      user_id: "6a0c157d443546078570159a",
    },
  ];

  const hasBookings = bookings && bookings.length > 0;

  return (
    <div className="md:col-span-3 min-h-screen rounded-3xl border border-gray-200 dark:border-gray-800 bg-transparent shadow dark:shadow-white/30 shadow-black/30 p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Bookings
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Explore your booking facilities
          </p>
        </div>
      </div>

      {/* Empty State */}
      {!hasBookings && (
        <div className="border border-gray-50/0 border-t-gray-500/50 p-10 lg:p-16 flex flex-col items-center justify-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full"></div>

            <div className="relative bg-blue-50 dark:bg-blue-500/10 p-5 rounded-2xl text-red-400">
              <TbError404Off size={34} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            OOHH ! sorry you don't have any bookings right now
          </h2>

          <p className="max-w-md text-gray-500 dark:text-gray-400 leading-7 mb-8">
            To ensure your booking, Please go to All Bookings page to explore your bookings.
          </p>

          <Link href={"/allfacilities"}>
            <button className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-2xl text-sm font-medium transition-all shadow-lg hover:scale-[1.02]">
              All Bookings
            </button>
          </Link>
        </div>
      )}

      {/* Booking List */}
      {hasBookings && (
        <div className="space-y-4">
          {bookings.map((item) => (
            <div
              key={item._id.$oid}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-gray-900/20"
            >
              <div>
                <p className="text-xs text-gray-500">Facility</p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {item.facility_name}
                </p>
                <p className="text-xs text-gray-500">{item.facilityType}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Date</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {item.booking_date}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Time Slot</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {item.time_slot}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Hours</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {item.hours}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Price</p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  ৳ {item.total_price}
                </p>
                <p className="text-xs text-gray-500">
                  {item.pricePerHour}/hr
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Status</p>
                <span className="inline-block mt-1 px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;