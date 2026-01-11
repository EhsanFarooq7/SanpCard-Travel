"use client";
import { MapPin, Star, Globe, Mountain, Building2, Palmtree } from "lucide-react";
const PopularDestinations = () => {
    const destinations = [
        {
            name: 'Maldives',
            country: 'Indian Ocean',
            image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600',
            price: 'From £899',
            icon: Palmtree,
            description: 'Paradise beaches and luxury resorts'
        },
        {
            name: 'New York',
            country: 'USA',
            image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600',
            price: 'From £450',
            icon: Building2,
            description: 'The city that never sleeps'
        },
        {
            name: 'Swiss Alps',
            country: 'Switzerland',
            image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600',
            price: 'From £650',
            icon: Mountain,
            description: 'Breathtaking mountain views'
        },
        {
            name: 'Istanbul',
            country: 'Turkey',
            image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600',
            price: 'From £320',
            icon: Globe,
            description: 'Where East meets West'
        },
        {
            name: 'Santorini',
            country: 'Greece',
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600',
            price: 'From £550',
            icon: Globe,
            description: 'Iconic white and blue villages'
        },
        {
            name: 'Bali',
            country: 'Indonesia',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',
            price: 'From £720',
            icon: Palmtree,
            description: 'Tropical paradise and culture'
        }
    ];

    return (
        <section className="py-20 bg-gray-50" id="destinations">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
                    <p className="text-lg text-gray-600">Explore the world's most amazing places</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                                    <p className="font-bold text-orange-600">{dest.price}</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                                    <p className="text-sm flex items-center">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {dest.country}
                                    </p>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <dest.icon className="w-5 h-5 text-blue-600 mr-2" />
                                    <p className="text-gray-600">{dest.description}</p>
                                </div>
                                <div className="flex items-center text-yellow-400">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="ml-2 text-gray-600 text-sm">(4.9)</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default PopularDestinations;