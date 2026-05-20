'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler';
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { CustomTrigger } from './CustomTrigger';


export default function Navbar() {
    const { data: session } = authClient.useSession() 


    const pathname = usePathname();
    const [togglevalue, setTogglevalue] = useState(false)
    const isActive = pathname === '/login';

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Facilities', href: '/allfacilities' },
        { name: 'Add Facilities', href: '/addfacilities' },
        { name: 'My Bookings', href: '/mybookings' },
        { name: 'Dashboard', href: '/managemyfacilities' },
    ];
    const handelSignOut = async e => {
        await authClient.signOut();
        router.push('/booking')
    }


    return (
        <nav className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 px-6 md:px-12 py-1 justify-between font-sans text-center sticky top-0 z-50">
            <div className="flex justify-self-start items-center backdrop-blur-[8px] px-4 rounded-full">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">
                        <img src="/sportshub.png" alt="" />
                    </div>

                    <span className="font-bold transition-all duration-300 delay-300 text-2xl tracking-tight   sm:block">
                        SPORTS<span className="text-blue-500">HUB</span>
                    </span>
                </Link>
            </div>

            <div className="hidden md:hidden lg:flex justify-self-center rounded-full px-4 p-2 backdrop-blur-[8px] dark:bg-white/10 border border-black/2 dark:border-white/20 bg-black/10 shadow-[inset_0_0_2px_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_2px_1px_rgba(255,255,255,0.1)] md:flex items-center space-x-4">
                {navLinks.slice(0, !session?.user ? 5 : 2).map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition truncate duration-200 hover:text-blue-600 delay-200 font-medium text-sm relative before:absolute before:w-[0%] hover:before:w-full before:h-[2px] before:bg-blue-600 before:bottom-0 before:left-0 before:transition-all before:duration-200${isActive
                                && 'font-semibold text-blue-600'  }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
                <AnimatedThemeToggler />
            </div>

            <div className="hidden md:block lg:block flex items-center justify-self-end sm:justify-self-end">

                {session?.user
                    ? <CustomTrigger />
                    : <Link
                        href="/login"
                        className={`${isActive
                            ? 'font-semibold text-blue-600'
                            : ''
                            }  inline-flex  relative text-sm before:left-4 before:absolute before:w-[0%] hover:before:w-[70%] before:h-[2px] before:bg-blue-600 before:bottom-1 before:transition-all before:duration-300 delay-200 backdrop-blur-[8px] dark:bg-white/10 border-2 border-black/10 dark:border-white/10 bg-black/10 shadow-[inset_0_0_2px_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_2px_1px_rgba(255,255,255,0.1)] items-center justify-center px-4 py-2 font-semibold rounded-full transition-all duration-200 group hover:shadow
                                `}
                    >
                        Login
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                }
            </div>
            <div className='justify-self-end lg:hidden md:hidden block'>
                <div className="dropdown dropdown-start">
                    <div className='p-1'>
                        <Hamburger size={20} onToggle={toggled => {
                            if (toggled) {
                                setTogglevalue(true)
                            } else {
                                setTogglevalue(false)
                            }
                        }}></Hamburger>
                    </div>
                    <ul tabIndex="1" className={`space-y-2 ${togglevalue ? 'dropdown-content  absolute top-15' : 'hidden'} menu bg-base-100 right-1 shadow dark:shadow-white/30 shadow-black/20 bg-transparent backdrop-blur-[8px] rounded-lg z-1 w-32 p-1 `}>
                        <div className={` text-center`}>
                            <AnimatedThemeToggler />
                        </div>
                        {navLinks.slice(0, session?.user ? 5 : 2).map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`transition duration-300 delay-200 font-medium relative  hover:text-blue-600 ${isActive
                                        ? 'font-semibold  before:w-full border-blue-600  text-blue-600 before:bg-blue-600'
                                        : 'before:bg-blue-600/30'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );

                        })}


                        {session?.user
                            ?
                            <div> 
                                <Link
                                    href="/profile"
                                    className={`${isActive
                                        ? 'font-semibold text-blue-600'
                                        : ''
                                        } inline-flex  relative before:left-4 before:absolute before:w-[0%] hover:before:w-[70%] before:h-[2px] before:bottom-1 before:transition-all before:duration-300 delay-200 backdrop-blur-[8px]  items-center justify-center font-semibold rounded-full transition-all duration-200 group  "
                                `}
                                >
                                    Profile
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/login"
                                    onClick={async () => await authClient.signOut()}
                                    className={`  inline-flex hover:text-red-600 text-red-600/70 relative before:left-4 before:absolute before:w-[0%] hover:before:w-[70%] before:h-[2px] before:bottom-1 before:transition-all before:duration-300 delay-200 backdrop-blur-[8px]  items-center justify-center font-semibold rounded-full transition-all duration-200 group  "
                                `}
                                >
                                    logout
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>

                            : <Link
                                href="/login"
                                className={`${isActive
                                    ? 'font-semibold text-blue-600'
                                    : ''
                                    }  inline-flex relative before:left-4  before:absolute before:w-[0%] hover:before:w-[70%] before:h-[2px] before:bottom-1 before:transition-all before:duration-300 delay-200 backdrop-blur-[8px] shadow-[inset_0_0_2px_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_2px_1px_rgba(255,255,255,0.1)] items-center justify-center px-4 py-2 font-semibold rounded-full transition-all duration-200 group shadow-sm hover:shadow"
                                `}
                            >
                                Login
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>}
                    </ul>
                </div>
            </div>
        </nav >
    );
}