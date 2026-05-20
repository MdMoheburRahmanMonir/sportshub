import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const page = async () => {
    // const session = await auth.api.getSession({
    //     headers: await headers()
    // });

    // if (!session?.user?.email) {
    //     return <div>Not logged in</div>;
    // }
    // const res = await fetch(
    //     `http://localhost:5000/mybookings/${session?.user?.email}`,
    //     { cache: 'no-store' }
    // );

    // const data = await res.json();
    // console.log(data);
    


    return (
        <div>
            hello
        </div>
    );
};

export default page;