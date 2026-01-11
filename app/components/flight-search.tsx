"use client";
import { useState } from "react";
import { Search } from "lucide-react";

interface FlightSearchProps {
    onSearch: (params: any) => void;
}

const FlightSearch = ({ onSearch }: FlightSearchProps) => {
    const [searchParams, setSearchParams] = useState({
        from: '',
        to: '',
        departDate: '',
        returnDate: '',
        passengers: 1,
        tripType: 'roundtrip'
    });

    const handleSearch = () => {
        if (searchParams.from && searchParams.to && searchParams.departDate) {
            onSearch(searchParams);
        }
    };

    return (
        <section className="py-20 bg-white" id="flights">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Flight</h2>
                    <p className="text-lg text-gray-600">Search and compare flights from top airlines</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-8">
                    <div className="flex space-x-4 mb-6">
                        <label className="flex items-center space-x-2 cursor-pointer bg-white px-4 py-2 rounded-full shadow">
                            <input
                                type="radio"
                                name="tripType"
                                value="roundtrip"
                                checked={searchParams.tripType === 'roundtrip'}
                                onChange={(e) => setSearchParams({ ...searchParams, tripType: e.target.value })}
                                className="w-4 h-4 text-blue-600"
                            />
                            <span className="font-medium">Round Trip</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer bg-white px-4 py-2 rounded-full shadow">
                            <input
                                type="radio"
                                name="tripType"
                                value="oneway"
                                checked={searchParams.tripType === 'oneway'}
                                onChange={(e) => setSearchParams({ ...searchParams, tripType: e.target.value })}
                                className="w-4 h-4 text-blue-600"
                            />
                            <span className="font-medium">One Way</span>
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white rounded-xl p-4 shadow">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
                            <input
                                type="text"
                                value={searchParams.from}
                                onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
                                placeholder="London"
                                className="w-full px-3 py-2 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition"
                            />
                        </div>

                        <div className="bg-white rounded-xl p-4 shadow">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">To</label>
                            <input
                                type="text"
                                value={searchParams.to}
                                onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
                                placeholder="New York"
                                className="w-full px-3 py-2 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition"
                            />
                        </div>

                        <div className="bg-white rounded-xl p-4 shadow">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Depart</label>
                            <input
                                type="date"
                                value={searchParams.departDate}
                                onChange={(e) => setSearchParams({ ...searchParams, departDate: e.target.value })}
                                className="w-full px-3 py-2 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition"
                            />
                        </div>

                        {searchParams.tripType === 'roundtrip' && (
                            <div className="bg-white rounded-xl p-4 shadow">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Return</label>
                                <input
                                    type="date"
                                    value={searchParams.returnDate}
                                    onChange={(e) => setSearchParams({ ...searchParams, returnDate: e.target.value })}
                                    className="w-full px-3 py-2 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition"
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-end">
                        <div className="flex-1 bg-white rounded-xl p-4 shadow">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Passengers</label>
                            <select
                                value={searchParams.passengers}
                                onChange={(e) => setSearchParams({ ...searchParams, passengers: parseInt(e.target.value) })}
                                className="w-full px-3 py-2 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handleSearch}
                            className="md:w-auto w-full px-10 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-xl hover:from-orange-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold"
                        >
                            <Search className="w-5 h-5" />
                            <span>Search Flights</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FlightSearch;