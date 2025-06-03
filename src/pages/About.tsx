import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen pt-16">
            {/* Mission Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold mb-6">Our Beliefs</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The Youth Program Group (YPG) of the Universal Church is dedicated to empowering young people through faith,
                            fostering spiritual growth, and building a strong community of future leaders.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold mb-4">Church Mission</h2>
                            <p className="text-gray-600 mb-6">
                                The Universal Church is committed to spreading the message of faith, hope, and love to all people.
                                We believe in the transformative power of God's word and the importance of building a strong
                                spiritual foundation in every individual's life.
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Spreading God's word and love to all people</li>
                                <li>• Building strong spiritual foundations</li>
                                <li>• Creating a welcoming community for all</li>
                                <li>• Supporting personal and spiritual growth</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-bold mb-4">YPG Mission</h2>
                            <p className="text-gray-600 mb-6">
                                The Youth Program Group focuses on nurturing young people's spiritual journey while providing
                                them with practical skills and opportunities for personal development. We create an environment
                                where youth can grow in their faith while building lasting friendships.
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Empowering youth through faith-based programs</li>
                                <li>• Developing leadership skills</li>
                                <li>• Fostering community service</li>
                                <li>• Creating meaningful connections</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        Our Core Values
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const coreValues = [
    {
        title: 'Faith',
        description: 'We believe in nurturing a strong spiritual foundation that guides all aspects of life.',
    },
    {
        title: 'Community',
        description: 'Building meaningful relationships and supporting each other in our spiritual journey.',
    },
    {
        title: 'Service',
        description: 'Dedicating ourselves to helping others and making a positive impact in our community.',
    },
    {
        title: 'Growth',
        description: 'Continuously learning and developing both spiritually and personally.',
    },
    {
        title: 'Leadership',
        description: 'Developing the next generation of spiritual and community leaders.',
    },
    {
        title: 'Unity',
        description: 'Coming together as one body in Christ, celebrating our diversity and shared purpose.',
    },
];

export default About; 