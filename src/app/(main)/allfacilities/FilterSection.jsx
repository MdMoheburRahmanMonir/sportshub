"use client";

import { Label, SearchField } from "@heroui/react";
import { useRouter } from "next/navigation";
const FilterSection = ({ data }) => {
    const router = useRouter()
    
    const inputHandler = async (e) => {
        const value = e.target.value;
        // console.log(value);

        // router.push(`/facilities?facilityType=${value}`);



        // fetch example
        // const res = await fetch(`/api/facilities?type=${value}`)
    };

    return (
        <div className='pb-5 flex  justify-between'>
            <SearchField name="search" className={`w-48 `} >
                <Label>Search</Label>
                <SearchField.Group className={`rounded-xl py-2 bg-transparent text-black dark:text-white shadow-md shadow-black/30 dark:shadow-white/30`}>
                    <SearchField.SearchIcon className='text-black dark:text-white' />
                    <SearchField.Input className="w-full rounded-2xl focus:bg-transparent text-black dark:text-white" placeholder="Search..." />
                    <SearchField.ClearButton className={`text-black bg-red-400 dark:text-white`} />
                </SearchField.Group>
            </SearchField>
            <div >
                <label>Filter by category</label>
                <select
                    name="facilityType"
                    className="shadow-lg dark:shadow-white/15 shadow-black/15 w-full  rounded-xl  px-4 py-2 bg-white dark:bg-slate-900"
                    required
                    onChange={inputHandler}
                >
                    <option value="">Select Type</option>
                    {data.map((item, ind) => (
                        <option
                            key={ind}
                            className="text-black dark:text-white"
                            value={item}
                        >
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FilterSection;