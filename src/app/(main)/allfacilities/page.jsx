
import FilterSection from './FilterSection';
import Link from 'next/link';

const BookingPage = async ({ searchParams }) => {
    // const searchValue = await searchParams?.facilityType;
    // console.log(searchParams, searchValue);


    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}`
    );
    const facilities = await response.json();


    const setdata = new Set(facilities.map(item => item.facilityType))
    const data = [...setdata]


    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
                <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight text-center" >
                    Featured <span className="text-blue-600">Facilities</span>
                </h2>
                <p className="text-black/80 dark:text-white/80 text-center mb-12">
                    Discover our top-rated sports facilities available for booking.
                </p>

                <FilterSection data={data} />


                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities?.map((item, i) => (
                        <div
                            key={i}
                            className="shadow-lg transition-all duration-500 ease-out hover:shadow-xl shadow-black/20 dark:shadow-white/20 bg-transparent backdrop-blur-[5px] hover:scale-105 hover:transition-all hover:duration-300 rounded-2xl overflow-hidden"
                        >

                            <img
                                src={item.image}
                                alt={item.facilityName}
                                className="h-56 w-full object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-bold">
                                    {item.facilityName}
                                </h3>

                                <p className="text-black/80 dark:text-white/80 text-sm mt-1">
                                    📍 {item.location}
                                </p>

                                <p className="text-blue-500 font-bold mt-2">
                                    ৳{item.pricePerHour}/hour
                                </p>

                                <p className="text-black/80 dark:text-white/80 text-sm mt-3 line-clamp-2">
                                    {item.description}
                                </p>

                                <Link href={`/facilities/${item._id}`}>
                                    <button className="mt-4 px-4 py-2 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
};

export default BookingPage;