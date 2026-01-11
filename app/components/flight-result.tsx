"use client";
import { Plane, Clock } from "lucide-react";


import { Flight } from './interfaceFlight';

interface FlightResultsProps {
    flights: Flight[];
    onSelectFlight: (flight: Flight) => void;
}

const FlightResults = ({ flights, onSelectFlight }: FlightResultsProps) => {
    if (flights.length === 0) return null;

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Available Flights</h2>
                <div className="space-y-6">
                    {flights.map(flight => (
                        <div key={flight.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                                <div className="flex-1 w-full">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="bg-orange-500 p-4 rounded-xl shadow-lg">
                                            <Plane className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl">{flight.airline}</h3>
                                            <p className="text-sm text-gray-500">{flight.stops}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-3xl font-bold text-gray-800">{flight.departTime}</p>
                                            <p className="text-sm text-gray-600">{flight.from}</p>
                                        </div>

                                        <div className="flex-1 flex flex-col items-center px-4">
                                            <div className="flex items-center space-x-2 text-gray-500 mb-2">
                                                <Clock className="w-4 h-4" />
                                                <span className="text-sm font-medium">{flight.duration}</span>
                                            </div>
                                            <div className="w-full h-1 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full relative">
                                                <div className="absolute -top-2 left-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                                                <div className="absolute -top-2 right-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-3xl font-bold text-gray-800">{flight.arriveTime}</p>
                                            <p className="text-sm text-gray-600">{flight.to}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center lg:text-right">
                                    <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent mb-2">
                                        £{flight.price}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-4">per person</p>
                                    <button
                                        onClick={() => onSelectFlight(flight)}
                                        className="px-8 py-3 bg-gradient-to-r from-orange-600 to-yellow-500 text-white rounded-xl hover:from-orange-700 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default FlightResults;