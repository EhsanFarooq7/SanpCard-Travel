"use client";
import { useState } from "react";
import { Plane, Menu } from "lucide-react";
interface HeaderProps {
  setShowPrivacy: (val: boolean) => void;
}

const Header = ({ setShowPrivacy }: HeaderProps) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  
  return (
    <header className="bg-gradient-to-r from-orange-600 to-yellow-500 transparent text-white shadow-2xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <Plane className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Snapcard Travel</h1>
              <p className="text-xs text-blue-400">Your Journey Begins Here</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="hover:text-blue-200 transition">Home</a>
            <a href="#destinations" className="hover:text-blue-200 transition">Destinations</a>
            <a href="#flights" className="hover:text-blue-200 transition">Flights</a>
            <button onClick={() => setShowPrivacy(true)} className="hover:text-blue-200 transition">Privacy</button>
            <a href="#quote" className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">Get Quote</a>
          </nav>
          
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {mobileMenu && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#home" className="block hover:text-blue-200 transition">Home</a>
            <a href="#destinations" className="block hover:text-blue-200 transition">Destinations</a>
            <a href="#flights" className="block hover:text-blue-200 transition">Flights</a>
            <button onClick={() => setShowPrivacy(true)} className="block hover:text-blue-200 transition">Privacy</button>
            <a href="#quote" className="block bg-white text-orange-600 px-6 py-2 rounded-full font-semibold text-center">Get Quote</a>
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header;