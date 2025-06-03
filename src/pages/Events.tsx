import { useState } from 'react';
import Calendar from 'react-calendar';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaBible, FaHeart, FaRunning, FaPray, FaFilm, FaHandsHelping, FaTrophy, FaPlane, FaFutbol } from 'react-icons/fa';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Events = () => {
    const [date, setDate] = useState<Value>(new Date());

    const getEventsForDate = (date: Date) => {
        const day = date.getDay();
        const month = date.getMonth();
        const monthlyEvents = events.monthly.find(e => e.month === months[month]);

        // Check for weekly events
        const weeklyEvent = events.weekly.find(e => e.day === days[day]);

        return {
            weekly: weeklyEvent ? [weeklyEvent] : [],
            monthly: monthlyEvents ? [monthlyEvents] : [],
        };
    };

    const getEventIcon = (eventName: string) => {
        const name = eventName.toLowerCase();
        if (name.includes('bible')) return <FaBible className="text-blue-500" />;
        if (name.includes('love')) return <FaHeart className="text-red-500" />;
        if (name.includes('games') || name.includes('olympics')) return <FaRunning className="text-green-500" />;
        if (name.includes('vigil') || name.includes('prayer')) return <FaPray className="text-purple-500" />;
        if (name.includes('film') || name.includes('photo')) return <FaFilm className="text-yellow-500" />;
        if (name.includes('help')) return <FaHandsHelping className="text-orange-500" />;
        if (name.includes('israel')) return <FaPlane className="text-indigo-500" />;
        if (name.includes('dance')) return <FaTrophy className="text-pink-500" />;
        if (name.includes('soccer') || name.includes('jiujitsu')) return <FaFutbol className="text-teal-500" />;
        return <FaCalendarAlt className="text-gray-500" />;
    };

    const selectedDateEvents = date instanceof Date ? getEventsForDate(date) : { weekly: [], monthly: [] };

    return (
        <div className="min-h-screen pt-16 bg-gray-50">
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold mb-6">Events Calendar</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Stay up to date with our weekly activities and special monthly events.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-lg"
                        >
                            <Calendar
                                onChange={setDate}
                                value={date}
                                className="w-full custom-calendar"
                                tileClassName={({ date }) => {
                                    const events = getEventsForDate(date);
                                    return events.weekly.length || events.monthly.length ? 'has-events' : '';
                                }}
                                tileContent={({ date }) => {
                                    const events = getEventsForDate(date);
                                    if (events.weekly.length || events.monthly.length) {
                                        return (
                                            <div className="event-indicator">
                                                <div className="event-dot"></div>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <FaCalendarAlt className="mr-3 text-yellow-500" />
                                    {date instanceof Date ? date.toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    }) : 'Selected Date'}
                                </h2>

                                {selectedDateEvents.weekly.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                                            <FaCalendarAlt className="mr-2 text-blue-500" />
                                            Weekly Events
                                        </h3>
                                        {selectedDateEvents.weekly.map(event => (
                                            <div key={event.name} className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center mb-2">
                                                    {getEventIcon(event.name)}
                                                    <h4 className="text-lg font-medium ml-2">{event.name}</h4>
                                                </div>
                                                <p className="text-gray-600">{event.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {selectedDateEvents.monthly.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                                            <FaCalendarAlt className="mr-2 text-purple-500" />
                                            Monthly Events
                                        </h3>
                                        {selectedDateEvents.monthly.map(event => (
                                            <div key={event.name} className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center mb-2">
                                                    {getEventIcon(event.name)}
                                                    <h4 className="text-lg font-medium ml-2">{event.name}</h4>
                                                </div>
                                                <p className="text-gray-600">{event.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {selectedDateEvents.weekly.length === 0 && selectedDateEvents.monthly.length === 0 && (
                                    <div className="text-center py-8">
                                        <FaCalendarAlt className="text-gray-300 text-5xl mx-auto mb-4" />
                                        <p className="text-gray-500">No events scheduled for this date.</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Upcoming Events Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16"
                    >
                        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
                            <FaCalendarAlt className="mr-3 text-yellow-500" />
                            Upcoming Events 2025
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.monthly.map((event, index) => (
                                <motion.div
                                    key={event.name}
                                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-yellow-500"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="flex items-center mb-3">
                                        {getEventIcon(event.name)}
                                        <h3 className="text-xl font-semibold ml-2">{event.month}</h3>
                                    </div>
                                    <h4 className="text-lg font-medium mb-4">{event.name}</h4>
                                    <p className="text-gray-600">{event.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

interface WeeklyEvent {
    day: string;
    name: string;
    description: string;
}

interface MonthlyEvent {
    month: string;
    name: string;
    description: string;
}

const events = {
    weekly: [
        {
            day: 'Wednesday',
            name: 'Bible Study',
            description: 'Join us for an in-depth study of God\'s word and spiritual growth.',
        },
        {
            day: 'Thursday',
            name: 'Love Therapy',
            description: 'Guidance and advice for building healthy relationships - romantic, family, and friendships.',
        },
    ],
    monthly: [
        {
            month: 'March',
            name: 'Summer Games',
            description: 'Annual summer games featuring various sports and activities.',
        },
        {
            month: 'April',
            name: 'Night Vigil & Photo Challenge',
            description: 'A night of prayer and worship, combined with a creative photo competition.',
        },
        {
            month: 'May',
            name: 'Mega Dance',
            description: 'A celebration of worship through dance and movement.',
        },
        {
            month: 'June',
            name: 'Night Vigil',
            description: 'An evening dedicated to prayer, worship, and spiritual reflection.',
        },
        {
            month: 'July',
            name: 'Israel Trip',
            description: 'A spiritual journey to the Holy Land.',
        },
        {
            month: 'August',
            name: 'Short Film Festival',
            description: 'Showcasing creative talents through short films.',
        },
        {
            month: 'September',
            name: 'Mega Help',
            description: 'Large-scale community service event.',
        },
        {
            month: 'October',
            name: 'Olympics',
            description: 'Youth Olympics featuring various sports competitions.',
        },
        {
            month: 'November',
            name: 'Vigil',
            description: 'A night of prayer and spiritual connection.',
        },
        {
            month: 'December',
            name: 'JiuJitsu + Soccer Cup',
            description: 'Martial arts exhibition and soccer tournament.',
        },
    ],
};

export default Events;