import ContentSection from '@/components/shared/ContentSection';
import React from 'react';

const BookingPage = async () => {

    const response = await fetch("http://localhost:5000/",);
    const facilities = await response.json();

    return (
        <div>
            <ContentSection facilities={facilities} />

        </div>
    );
};

export default BookingPage;