
"use client";
import React, { useState } from 'react';
// 1. Interface for type safety
export interface Flight {
    id: number;
    airline: string;
    from: string;
    to: string;
    departTime: string;
    arriveTime: string;
    duration: string;
    price: number;
    stops: string;
}

// 2. Clean Imports (Ensure these files exist in your /components folder)
import Header from './components/header';
import HeroSlider from './components/hero-slider';
import PopularDestinations from './components/destinations';
import FlightSearch from './components/flight-search';
import FlightResults from './components/flight-result';
import QuoteForm from './components/quote';
import Footer from './components/footer';
import BookingModal from './components/booking-modal';
import PrivacyModal from './components/privacy-policy';

const SnapcardTravel = () => {
    // Hooks belong ONLY here, inside the component body
    const [searchResults, setSearchResults] = useState<Flight[]>([]);
    const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
    const [showBooking, setShowBooking] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [searchParams, setSearchParams] = useState<{ passengers: number } | null>(null);

    const mockFlights: Flight[] = [
        { id: 1, airline: 'British Airways', from: 'London (LHR)', to: 'New York (JFK)', departTime: '10:30', arriveTime: '14:45', duration: '7h 15m', price: 450, stops: 'Direct' },
        { id: 2, airline: 'Virgin Atlantic', from: 'London (LHR)', to: 'New York (JFK)', departTime: '13:15', arriveTime: '17:30', duration: '7h 15m', price: 425, stops: 'Direct' },
        { id: 3, airline: 'American Airlines', from: 'London (LHR)', to: 'New York (JFK)', departTime: '08:00', arriveTime: '12:20', duration: '7h 20m', price: 380, stops: '1 Stop' }
    ];

    const handleSearch = (params: any) => {
        setSearchParams(params);
        setSearchResults(mockFlights);
    };

    const handleSelectFlight = (flight: Flight) => {
        setSelectedFlight(flight);
        setShowBooking(true);
    };

    // const handleConfirmBooking = () => {
    //     alert('Booking confirmed! We will contact you shortly with details.');
    //     setShowBooking(false);
    //     setSelectedFlight(null);
    // };
    const handleConfirmBooking = async (userDetails: any) => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    flight: selectedFlight,
                    passengers: searchParams?.passengers || 1,
                    userDetails: userDetails // These details come from your BookingModal form
                }),
            });

            if (response.ok) {
                alert('Booking request sent! We will contact you at admin@snapcardtravel.co.uk shortly.');
                setShowBooking(false);
                setSelectedFlight(null);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error("Error sending booking:", error);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header setShowPrivacy={setShowPrivacy} />
            <HeroSlider />
            <PopularDestinations />
            <FlightSearch onSearch={handleSearch} />
            <FlightResults flights={searchResults} onSelectFlight={handleSelectFlight} />
            <QuoteForm />
            <Footer setShowPrivacy={setShowPrivacy} />

            {showBooking && selectedFlight && (
                <BookingModal
                    flight={selectedFlight}
                    passengers={searchParams?.passengers || 1}
                    onClose={() => setShowBooking(false)}
                    onConfirm={handleConfirmBooking}
                />
            )}

            {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
        </div>
    );
};

export default SnapcardTravel;