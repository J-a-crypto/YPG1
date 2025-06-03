import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
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
                        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Have questions about the Youth Program Group? We're here to help!
                            Reach out to us using the form below or through our other contact channels.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                                {submitted ? (
                                    <div className="text-green-600 text-center py-8">
                                        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                                        <p>Your message has been sent. We'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone (optional)
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                                Subject
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="programs">Programs Information</option>
                                                <option value="events">Events Information</option>
                                                <option value="testimony">Share Testimony</option>
                                                <option value="volunteer">Volunteer Opportunities</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={4}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-yellow-400 text-black py-3 px-6 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                                        <p className="text-gray-600">
                                            Universal Church<br />
                                            47 4th Ave, Park Slope, NY 11217<br />
                                            New York, NY 10001
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                                        <p className="text-gray-600">
                                            Phone: (555) 123-4567<br />
                                            Email: info@ypgnyc.org
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                                        <p className="text-gray-600">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday: 10:00 AM - 4:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                                        <div className="flex space-x-4">
                                            <a href="#" className="text-gray-600 hover:text-yellow-500">Facebook</a>
                                            <a href="#" className="text-gray-600 hover:text-yellow-500">Instagram</a>
                                            <a href="#" className="text-gray-600 hover:text-yellow-500">Twitter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact; 