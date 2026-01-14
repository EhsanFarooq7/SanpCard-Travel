"use client";
import React, { useState } from "react";
import { X, Plane, Clock } from "lucide-react";
import { Flight } from "./interfaceFlight";

interface BookingModalProps {
    flight: Flight;
    passengers: number;
    onClose: () => void;
    // This now passes the full object to your handleConfirmBooking function
    onConfirm: (userDetails: {
        name: string;
        email: string;
        phone: string;
    }) => void;
}

const BookingModal = ({ flight, passengers, onClose, onConfirm }: BookingModalProps) => {
    // Consolidate state into one object for easier handling
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Combine names for the email subject/body
        const fullName = `${formData.firstName} ${formData.lastName}`.trim();

        // Pass everything to the handleConfirmBooking function in snapCardTravel.tsx
        onConfirm({
            name: fullName,
            email: formData.email,
            phone: formData.phone,
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800">Complete Booking</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Flight Summary Card */}
                    <div className="bg-gradient-to-r from-orange-600 to-yellow-500 p-6 rounded-2xl mb-6 border border-orange-100">
                        <div className="flex items-center space-x-2 mb-3">
                            <Plane className="w-5 h-5 text-blue-600" />
                            <h3 className="font-bold text-xl text-gray-800">{flight.airline}</h3>
                        </div>
                        <p className="text-gray-700 mb-2 font-medium">{flight.from} → {flight.to}</p>
                        <div className="flex items-center text-gray-600 mb-4 space-x-4">
                            <div className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {flight.departTime}</div>
                            <div className="text-sm font-semibold text-blue-600 bg-white px-3 py-1 rounded-full shadow-sm">{flight.stops}</div>
                        </div>

                        <div className="border-t border-blue-200 pt-4 flex justify-between items-end">
                            <div>
                                <p className="text-4xl font-bold text-blue-600" suppressHydrationWarning>£{flight.price * passengers}</p>
                                <p className="text-sm text-gray-500 font-medium">{passengers} passenger(s) total</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition bg-gray-50 focus:bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition bg-gray-50 focus:bg-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                            <input
                                required
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition bg-gray-50 focus:bg-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                            <input
                                required
                                type="tel"
                                placeholder="+44 7123 456789"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition bg-gray-50 focus:bg-white"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-500 text-white rounded-xl hover:from-orange-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-bold text-lg mt-4"
                        >
                            Confirm & Submit Booking
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-4">
                            By clicking confirm, you agree to our booking terms and privacy policy.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;