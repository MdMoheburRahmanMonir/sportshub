import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { SiRefinedgithub } from "react-icons/si";

const FooterPage = () => {
    return (
        <footer className="bg-transparent border-t border-gray-200 dark:border-gray-800">
            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-center md:text-start lg:text-start gap-10 pb-10">
                    <div>
                        <h1 className="text-2xl font-bold dark:text-white text-black mb-4">
                            SPORTS <span className="text-blue-600">HUB</span>
                        </h1>

                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                            Your ultimate destination for sports news, live scores,
                            match updates, and community discussions. Stay connected
                            with your favorite teams and players.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
                            Contact Info
                        </h2>

                        <div className="space-y-4 text-sm flex flex-col items-center md:items-start lg:items-start text-gray-700 dark:text-gray-300">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-600 p-2 rounded-full text-white">
                                    <FaMapMarkerAlt size={14} />
                                </div>
                                <span>Sylhet, Sunamganj</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-blue-600 p-2 rounded-full text-white">
                                    <FaPhoneAlt size={14} />
                                </div>
                                <span>+880 1887 344542</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-blue-600 p-2 rounded-full text-white">
                                    <FaEnvelope size={14} />
                                </div>
                                <span>mdmohiburrahmanmanik@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
                            Social Links
                        </h2>


                        <div className="flex items-center justify-center md:justify-start lg:justify-start gap-4">
                            <a
                                href="https://web.facebook.com/mdmohiburrahmanmanik0/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition duration-300 flex items-center justify-center"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white transition duration-300 flex items-center justify-center"
                            >
                                <SiRefinedgithub />
                            </a>

                            <a
                                href="https://x.com/MohiburMd2288"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-sky-500 dark:hover:bg-sky-500 hover:text-white transition duration-300 flex items-center justify-center"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white dark:hover:bg-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition duration-300 flex items-center justify-center"
                            >
                                <LuLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © 2026 SportsHub. All rights reserved.
                    </p>
                </div>
            </main>
        </footer>
    );
};

export default FooterPage;