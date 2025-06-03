import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Events', path: '/events' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
        { name: 'Find Us', path: '/location-finder' },
    ];

    return (
        <nav className="bg-black text-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img src="/images/logo.jpg" alt="YPG NYC Logo" className="h-10 w-10 mr-2" />
                            <span className="text-xl font-bold">Youth Power Group NYC</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="ml-8 text-sm font-medium hover:text-yellow-400 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-yellow-400 focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="block px-3 py-2 text-base font-medium hover:text-yellow-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 