import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white" style={{ backgroundColor: '#2F557C' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">YPG NYC</h3>
                        <p className="text-gray-300">
                            Empowering youth through faith, community, and purpose.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-yellow-400">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/programs" className="text-gray-300 hover:text-yellow-400">
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link to="/events" className="text-gray-300 hover:text-yellow-400">
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Universal Church</li>
                            <li>New York, NY</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Email: info@ypgnyc.org</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400"
                            >
                                <FaFacebook size={24} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://www.youtube.com/@YPGNewYork/videos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400"
                            >
                                <FaYoutube size={24} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400"
                            >
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
                    <p>&copy; {currentYear} YPG NYC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 