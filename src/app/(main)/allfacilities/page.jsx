import ContentSection from '@/components/shared/ContentSection';
import React from 'react';

const BookingPage = async () => {

    const response = await fetch(`${process.env.SERVER_URL}`);
    const facilities = await response.json();

    return (
        <div>
            <ContentSection facilities={facilities} />

        </div>
    );
};

export default BookingPage;