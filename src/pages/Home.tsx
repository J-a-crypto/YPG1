import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    const [bibleVerse, setBibleVerse] = useState({ text: '', reference: '' });
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchBibleVerse = async () => {
            try {
                const response = await axios.get('https://labs.bible.org/api/?passage=votd&type=json');
                const verse = response.data[0];
                setBibleVerse({
                    text: verse.text,
                    reference: `${verse.bookname} ${verse.chapter}:${verse.verse}`
                });
            } catch (error) {
                console.error('Error fetching Bible verse:', error);
                setBibleVerse({
                    text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.',
                    reference: 'Jeremiah 29:11'
                });
            }
            setLoading(false);
        };

        fetchBibleVerse();
    }, []);

    // Auto-advance gallery slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat "
                    style={{
                        backgroundImage: 'url("/images/community.JPG")',
                        filter: 'brightness(0.5)',
                        border: '100px solid black',
                        borderLeftWidth: '0px',
                        borderRightWidth: '0px',
                    }}
                />
                <div className="relative h-full flex items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                            Welcome
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                            To The Youth Power Group
                        </h2>
                        {/* <p className="text-xl sm:text-2xl text-gray-200 mb-8">
                            Join our vibrant community of young people passionate about faith, growth, and making a difference.
                        </p> */}
                        <Link
                            to="/contact"
                            className="inline-block bg-yellow-400 text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                        >
                            Join Our Community
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Programs Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Featured Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredPrograms.map((program) => (
                            <motion.div
                                key={program.name}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
                            >
                                <div
                                    className="h-48 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${program.image})` }}
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                                    <p className="text-gray-600 mb-4">{program.description}</p>
                                    <Link
                                        to={`/programs/${program.slug}`}
                                        className="text-yellow-600 font-medium hover:text-yellow-700"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bible Verse Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold mb-8">Today's Inspiration</h2>
                        {loading ? (
                            <div className="animate-pulse">
                                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                            </div>
                        ) : (
                            <div className="max-w-3xl mx-auto">
                                <p className="text-xl text-gray-600 mb-4 italic">"{bibleVerse.text}"</p>
                                <p className="text-lg font-semibold text-gray-800">- {bibleVerse.reference}</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Follow Our Journey</h2>
                        <p className="text-xl text-gray-600">Stay connected with our latest updates and moments</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Facebook Feed */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Facebook</h3>
                            <div className="relative h-[500px] overflow-hidden">
                                <iframe
                                    src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/YPGNEWYORK&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                ></iframe>
                            </div>
                        </div>

                        {/* Instagram Feed */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Instagram</h3>
                            <div className="relative h-[500px] overflow-hidden">
                                <iframe
                                    src="https://www.instagram.com/ypg_ny/embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                ></iframe>
                            </div>
                            <div className="mt-4 text-center">
                                <a
                                    href="https://www.instagram.com/ypg_ny"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-yellow-600 hover:text-yellow-700 font-medium"
                                >
                                    Follow us on Instagram →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Voices from Our Community</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hear from young people who have experienced transformation through our programs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.slice(0, 3).map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <FaQuoteLeft className="text-yellow-400 text-2xl mb-2" />
                                    <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                                </div>
                                <div className="text-sm text-gray-500">
                                    <p>{testimonial.program}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            to="/testimonials"
                            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                        >
                            View All Testimonials
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Preview */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join us for these exciting upcoming events and be part of our community.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={event.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-lg overflow-hidden shadow-lg border-t-4 border-yellow-500"
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <FaCalendarAlt className="text-yellow-500 mr-2" />
                                        <span className="text-gray-500">{event.date}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                                    <p className="text-gray-600 mb-4">{event.description}</p>
                                    <Link
                                        to="/events"
                                        className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                                    >
                                        Learn More
                                        <FaArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            to="/events"
                            className="inline-block bg-yellow-400 text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                        >
                            View All Events
                        </Link>
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Our Community in Pictures</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A glimpse into the vibrant life of our youth community.
                        </p>
                    </motion.div>

                    <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="absolute inset-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={image.url}
                                    alt={image.caption}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                    <p className="text-lg font-medium">{image.caption}</p>
                                </div>
                            </motion.div>
                        ))}

                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                            aria-label="Previous slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                            aria-label="Next slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {galleryImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-yellow-500' : 'bg-white bg-opacity-50'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-black text-white" style={{ backgroundColor: '#F9FAFB' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Take the first step towards a transformative journey with YPG NYC.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-yellow-400 text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                    >
                        Join Us Today!
                    </Link>
                </div>
            </section>
        </div>
    );
};

const featuredPrograms = [
    {
        name: 'Archangels',
        description: 'Join our elite leadership development program focused on spiritual growth and community service.',
        image: '/images/archangels.png',
        slug: 'archangels',
    },
    {
        name: 'Help Program',
        description: 'Make a difference in your community through our outreach and support initiatives.',
        image: '/images/help.jpg',
        slug: 'help',
    },
    {
        name: 'University',
        description: 'Expand your knowledge and skills through our comprehensive educational programs.',
        image: '/images/university.png',
        slug: 'university',
    },
];

// Testimonials data
const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Youth Leader',
        image: '/images/testimonials/sarah.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
        program: 'Archangels Program',
    },
    {
        name: 'Michael Chen',
        role: 'Help Program Coordinator',
        image: '/images/testimonials/michael.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
        program: 'Help Program',
    },
    {
        name: 'Isabella Rodriguez',
        role: 'Media Team Lead',
        image: '/images/testimonials/isabella.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
        program: 'Media Program',
    },
    {
        name: 'David Thompson',
        role: 'Sports Ministry Member',
        image: '/images/testimonials/david.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
        program: 'Sports Program',
    },
];

// Upcoming events data
const upcomingEvents = [
    {
        name: 'Summer Games',
        date: 'March 15, 2025',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
    },
    {
        name: 'Night Vigil & Photo Challenge',
        date: 'April 5, 2025',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
    },
    {
        name: 'Mega Dance',
        date: 'May 20, 2025',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
    },
];

// Gallery images
const galleryImages = [
    {
        url: '/images/gallery/community.jpg',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
    },
    {
        url: '/images/gallery/worship.jpg',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
    },
    {
        url: '/images/gallery/sports.jpg',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
    },
    {
        url: '/images/gallery/outreach.jpg',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
    },
];

export default Home; 