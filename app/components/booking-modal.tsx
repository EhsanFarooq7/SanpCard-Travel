"use client";
import { useState } from "react";
import { X } from "lucide-react";
import {Flight} from "./interfaceFlight";



interface BookingModalProps {
    flight: Flight;
    passengers: number;
    onClose: () => void;
    onConfirm: () => void;
}
const BookingModal = ({ flight, passengers, onClose, onConfirm }: BookingModalProps) => {
    const [bookingDetails, setBookingDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800">Complete Booking</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl mb-6">
                        <h3 className="font-bold text-xl mb-3">{flight.airline}</h3>
                        <p className="text-gray-700 mb-2">{flight.from} → {flight.to}</p>
                        <p className="text-gray-600 mb-4">
                            Depart: {flight.departTime} - Arrive: {flight.arriveTime}
                        </p>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-4xl font-bold text-blue-600">£{flight.price * passengers}</p>
                                <p className="text-sm text-gray-600">{passengers} passenger(s)</p>
                            </div>
                            <div className="bg-white px-4 py-2 rounded-full">
                                <span className="text-sm font-semibold text-gray-700">{flight.stops}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                <input
                                    type="text"
                                    value={bookingDetails.firstName}
                                    onChange={(e) => setBookingDetails({ ...bookingDetails, firstName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    value={bookingDetails.lastName}
                                    onChange={(e) => setBookingDetails({ ...bookingDetails, lastName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={bookingDetails.email}
                                onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                value={bookingDetails.phone}
                                onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                            />
                        </div>

                        <button
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                            className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-lg"
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookingModal;