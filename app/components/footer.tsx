"use client";
import { Plane, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
    setShowPrivacy: (val: boolean) => void;
}

const Footer = ({ setShowPrivacy }: FooterProps) => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Plane className="w-6 h-6 text-blue-400" />
                            <h3 className="font-bold text-xl">Snapcard Travel</h3>
                        </div>
                        <p className="text-gray-400 text-sm">Your trusted partner for seamless travel bookings and unforgettable journeys around the world.</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#home" className="hover:text-white transition">Home</a></li>
                            <li><a href="#destinations" className="hover:text-white transition">Destinations</a></li>
                            <li><a href="#flights" className="hover:text-white transition">Flights</a></li>
                            <li><a href="#quote" className="hover:text-white transition">Get Quote</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span>admin@snapcardtravel.co.uk</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>+44 20 1234 5678</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 mt-1" />
                                  
                                <span>67 Beatrix Victoria Wharf, Watkiss Way,<br />Cardiff<br />CF11 0SE</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>
                                <button onClick={() => setShowPrivacy(true)} className="hover:text-white transition">
                                    Privacy Policy
                                </button>
                            </li>
                            {/* <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li> */}
                            <li><a href="https://snapcardtravel.co.uk/" className="hover:text-white transition">snapcardtravel.co.uk</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    <p>© 2026 Snapcard Ltd. Company Number: 16873898. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;