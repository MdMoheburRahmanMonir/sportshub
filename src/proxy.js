import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';


export async function proxy(request) {
    // return NextResponse.redirect(new URL('/', request.url))

    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (session?.user) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))


}

export const config = {
    
    matcher: ["/mybookings", "/managemyfacilities","/addfacilities"]
}
 