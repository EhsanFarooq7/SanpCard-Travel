"use client";
import { useState } from "react";
const QuoteForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        date: '',
        passengers: 1,
        message: ''
    });

    const handleSubmit = () => {
        alert('Thank you! We will send you a quote shortly.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            destination: '',
            date: '',
            passengers: 1,
            message: ''
        });
    };

    return (
        <section className="py-20 bg-gradient-to-r from-gray-200 to-white-100" id="quote">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12 text-orange-500">
                    <h2 className="text-4xl font-bold mb-4">Get a Free Quote</h2>
                    <p className="text-lg text-blue-300">Tell us about your dream vacation and we'll create the perfect package</p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                placeholder="+44 1234 567890"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
                            <input
                                type="text"
                                value={formData.destination}
                                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                placeholder="Maldives"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Date</label>
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers</label>
                            <select
                                value={formData.passengers}
                                onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                        <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
                            placeholder="Tell us about your preferences, special requirements, or any questions you have..."
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full mt-6 px-8 py-4 bg-orange-500 text-white rounded-xl hover:from-orange-700 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-lg"
                    >
                        Request Free Quote
                    </button>
                </div>
            </div>
        </section>
    );
};
export default QuoteForm;