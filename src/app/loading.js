'use client';
import React from 'react';
import Lottie from 'lottie-react';
import loader from '@/assets/loader.json';

export default function LoadingPage() {
    return (
        <div className="flex min-h-screen items-center justify-center overflow-hidden bg-transparent px-4">
            <Lottie className='h-72 w-72' animationData={loader} loop={true} />
        </div>
    );
}