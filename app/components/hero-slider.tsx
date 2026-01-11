"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200',
            title: 'Discover Paris',
            subtitle: 'The City of Lights Awaits',
            description: 'Experience the romance and culture of Paris'
        },
        {
            image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200',
            title: 'Explore Tokyo',
            subtitle: 'Where Tradition Meets Future',
            description: 'Immerse yourself in Japanese culture'
        },
        {
            image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=1200',
            title: 'Visit Dubai',
            subtitle: 'Luxury & Adventure Combined',
            description: 'Experience world-class hospitality'
        },
        {
            image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=1200',
            title: 'Journey to London',
            subtitle: 'Historic Charm & Modern Elegance',
            description: 'Discover the heart of the UK'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-[600px] overflow-hidden" id="home">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center px-4">
                        <div className="max-w-4xl">
                            <h2 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">{slide.title}</h2>
                            <p className="text-2xl md:text-3xl mb-2 text-blue-200">{slide.subtitle}</p>
                            <p className="text-lg md:text-xl mb-8">{slide.description}</p>
                            <a href="#quote" className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:bg-orange-400 text-white px-8 py-4 rounded-full text-lg font-semibold inline-block transition transform hover:scale-105">
                                Book Your Adventure
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 p-3 rounded-full backdrop-blur-sm transition"
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 p-3 rounded-full backdrop-blur-sm transition"
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
export default HeroSlider;