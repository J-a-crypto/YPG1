import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

interface Church {
    id: number;
    name: string;
    address: string;
    coordinates: [number, number]; // [latitude, longitude]
    phone: string;
    services: {
        day: string;
        time: string;
    }[];
}

const churches: Church[] = [
    {
        id: 1,
        name: 'Universal Church Queens',
        address: '60-37 Myrtle Ave, Flushing, NY 11385',
        coordinates: [40.74737686187339, -73.89666687594763],
        phone: '(866) 585-0075',
        services: [
            { day: 'Sunday', time: '10:00 AM' },
            { day: 'Wednesday', time: '7:00 PM' },
            { day: 'Friday', time: '7:30 PM' },
        ],
    },
    {
        id: 2,
        name: 'Universal Church Brooklyn',
        address: '47 4th Ave, Park Slope, NY 11215',
        coordinates: [40.6892, -73.9845],
        phone: '(718) 622-1147',
        services: [
            { day: 'Sunday', time: '10:00 AM' },
            { day: 'Wednesday', time: '7:00 PM' },
            { day: 'Thursday', time: '7:30 PM' },
        ],
    },
    // Add more churches as needed
];

const LocationFinder = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedChurch, setSelectedChurch] = useState<Church | null>(null);
    const [mapCenter, setMapCenter] = useState<[number, number]>([40.7128, -74.0060]); // NYC coordinates
    const [zoom, setZoom] = useState(11);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would use a geocoding service to convert the address to coordinates
        // For now, we'll just center on the first church that matches the search
        const foundChurch = churches.find(church =>
            church.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
            church.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (foundChurch) {
            setSelectedChurch(foundChurch);
            setMapCenter(foundChurch.coordinates);
            setZoom(15);
        }
    };

    return (
        <div className="min-h-screen pt-16">
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold mb-6">Find a Church Near You</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enter your location to find the nearest Universal Church and join our community.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Search and Results */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg mb-8"
                            >
                                <form onSubmit={handleSearch} className="mb-6">
                                    <div className="mb-4">
                                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                                            Enter Location
                                        </label>
                                        <input
                                            type="text"
                                            id="location"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Enter address or zip code"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-yellow-400 text-black py-2 px-4 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
                                    >
                                        Search
                                    </button>
                                </form>

                                <div className="space-y-4">
                                    {churches.map((church) => (
                                        <div
                                            key={church.id}
                                            className={`p-4 rounded-lg cursor-pointer transition-colors ${selectedChurch?.id === church.id
                                                ? 'bg-yellow-50 border-2 border-yellow-400'
                                                : 'bg-gray-50 hover:bg-gray-100'
                                                }`}
                                            onClick={() => {
                                                setSelectedChurch(church);
                                                setMapCenter(church.coordinates);
                                                setZoom(15);
                                            }}
                                        >
                                            <h3 className="font-semibold">{church.name}</h3>
                                            <p className="text-sm text-gray-600">{church.address}</p>
                                            <p className="text-sm text-gray-600">{church.phone}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="h-[600px] rounded-lg overflow-hidden">
                                    <MapContainer
                                        center={mapCenter}
                                        zoom={zoom}
                                        style={{ height: '100%', width: '100%' }}
                                    >
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        />
                                        {churches.map((church) => (
                                            <Marker
                                                key={church.id}
                                                position={church.coordinates}
                                                eventHandlers={{
                                                    click: () => {
                                                        setSelectedChurch(church);
                                                    },
                                                }}
                                            >
                                                <Popup>
                                                    <div>
                                                        <h3 className="font-semibold">{church.name}</h3>
                                                        <p className="text-sm">{church.address}</p>
                                                        <p className="text-sm">{church.phone}</p>
                                                        <div className="mt-2">
                                                            <h4 className="font-semibold text-sm">Service Times:</h4>
                                                            <ul className="text-sm">
                                                                {church.services.map((service, index) => (
                                                                    <li key={index}>
                                                                        {service.day}: {service.time}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Popup>
                                            </Marker>
                                        ))}
                                    </MapContainer>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationFinder; 