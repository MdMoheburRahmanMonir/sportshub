'use client'
import Lottie from 'lottie-react';
import React from 'react';
import notFoundPagelotti from '@/assets/page404.json'

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden  bg-transparent px-4">

            <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-5xl rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 p-6 md:p-10">

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6 text-center lg:text-left"
                    >
                        <div>
                            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-black dark:text-white">
                                Page Not Found
                            </h2>

                            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                                Oops!  This page isn't exist. Let's explore something different.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <motion.div
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
                                >
                                    <Home size={18} />
                                   Let's Back Home
                                </Link>
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.history.back()}
                                className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-6 py-3 font-semibold text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
                            >
                                <ArrowLeft size={18} />
                                Go Back
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="flex justify-center items-center"
                    >
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-full max-w-md"
                        >
                            <Lottie animationData={notFoundPagelotti} />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

