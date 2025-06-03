import { motion } from 'framer-motion';

const Testimonials = () => {
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
                        <h1 className="text-4xl font-bold mb-6">Testimonials</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Read inspiring stories from members of our community who have experienced
                            personal transformation through the Youth Program Group.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-white rounded-lg overflow-hidden shadow-lg"
                            >
                                <div className="relative h-64">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-30" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                        <p className="text-sm opacity-90">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                                    <div className="text-sm text-gray-500">
                                        <p>Member since {testimonial.memberSince}</p>
                                        <p>{testimonial.program}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Share Your Story Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-6">Share Your Story</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Has the Youth Program Group made a difference in your life?
                            We'd love to hear your story and share it with our community.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-yellow-400 text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                        >
                            Submit Your Testimony
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Youth Leader',
        image: '/images/testimonials/sarah.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
        memberSince: '2022',
        program: 'Archangels Program',
    },
    {
        name: 'Michael Chen',
        role: 'Help Program Coordinator',
        image: '/images/testimonials/michael.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
        memberSince: '2023',
        program: 'Help Program',
    },
    {
        name: 'Isabella Rodriguez',
        role: 'Media Team Lead',
        image: '/images/testimonials/isabella.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
        memberSince: '2021',
        program: 'Media Program',
    },
    {
        name: 'David Thompson',
        role: 'Sports Ministry Member',
        image: '/images/testimonials/david.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
        memberSince: '2024',
        program: 'Sports Program',
    },
    {
        name: 'Emily Parker',
        role: 'University Group Leader',
        image: '/images/testimonials/emily.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
        memberSince: '2022',
        program: 'University Program',
    },
    {
        name: 'Marcus Williams',
        role: 'Culture Team Member',
        image: '/images/testimonials/marcus.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisl malesuada egestas semper, sem.',
        memberSince: '2023',
        program: 'Culture Program',
    },
];

export default Testimonials; 