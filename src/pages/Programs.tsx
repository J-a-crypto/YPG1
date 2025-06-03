import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Programs = () => {
    const { programName } = useParams();

    if (programName) {
        const program = programs.find((p) => p.slug === programName);
        if (!program) return <div>Program not found</div>;
        return <ProgramDetail program={program} />;
    }

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
                        <h1 className="text-4xl font-bold mb-6">Our Programs</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the various programs we offer to help you grow spiritually,
                            develop leadership skills, and make a positive impact in our community.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-white rounded-lg overflow-hidden shadow-lg"
                            >
                                <div
                                    className="h-48 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${program.image})` }}
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                                    <p className="text-gray-600 mb-4">{program.shortDescription}</p>
                                    <a
                                        href={`/programs/${program.slug}`}
                                        className="text-yellow-600 font-medium hover:text-yellow-700"
                                    >
                                        Learn More →
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const ProgramDetail = ({ program }: { program: Program }) => {
    return (
        <div className="min-h-screen pt-16">
            <div
                className="h-96 bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${program.image})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-white text-center"
                    >
                        {program.name}
                    </motion.h1>
                </div>
            </div>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-xl text-gray-600 mb-8">{program.description}</p>

                        <h2 className="text-2xl font-bold mb-6">Activities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {program.activities.map((activity, index) => (
                                <motion.div
                                    key={activity.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                                    className="bg-gray-50 rounded-lg p-6"
                                >
                                    <div
                                        className="h-48 bg-cover bg-center rounded-lg mb-4"
                                        style={{ backgroundImage: `url(${activity.image})` }}
                                    />
                                    <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
                                    <p className="text-gray-600">{activity.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

interface Activity {
    name: string;
    description: string;
    image: string;
}

interface Program {
    name: string;
    slug: string;
    shortDescription: string;
    description: string;
    image: string;
    activities: Activity[];
}

const programs: Program[] = [
    {
        name: 'Archangels',
        slug: 'archangels',
        shortDescription: 'Elite leadership development program focused on spiritual growth and community service.',
        description: 'The Archangels program is designed to develop strong spiritual leaders who can guide and inspire others in their faith journey. Through intensive training, mentorship, and hands-on experience, participants develop the skills and character needed to make a lasting impact in their communities.',
        image: '/images/archangels.jpg',
        activities: [
            {
                name: 'Leadership Training',
                description: 'Weekly sessions focusing on spiritual leadership principles and practical application.',
                image: '/images/archangels-training.jpg',
            },
            {
                name: 'Community Outreach',
                description: 'Regular community service projects and evangelism activities.',
                image: '/images/archangels-outreach.jpg',
            },
        ],
    },
    {
        name: 'Help Program',
        slug: 'help',
        shortDescription: 'Make a difference through community outreach and support initiatives.',
        description: 'The Help Program connects young people with opportunities to serve their community and make a real difference in people\'s lives.Through various outreach initiatives, participants learn the value of service while developing practical skills and compassion.',
        image: '/images/help.jpg',
        activities: [
            {
                name: 'Food Drive',
                description: 'Monthly food collection and distribution to families in need.',
                image: '/images/help-food-drive.jpg',
            },
            {
                name: 'Community Clean-up',
                description: 'Regular neighborhood beautification and environmental care projects.',
                image: '/images/help-cleanup.jpg',
            },
        ],
    },
    {
        name: 'Secretaries',
        slug: 'secretaries',
        shortDescription: 'Developing young leaders in the art of secretarial work.',
        description: 'The Secretaries program is designed to develop young leaders who can effectively manage and organize events, projects, and tasks. Through hands-on experience and training, participants learn the importance of organization, communication, and teamwork.',
        image: '/images/secretaries.jpg',
        activities: [
            {
                name: 'Interviewing Skills',
                description: 'Weekly sessions focusing on spiritual leadership principles and practical application.',
                image: '/images/secretaries-interviewing.jpg',
            },
        ]
    },
    {
        name: 'Media',
        slug: 'media',
        shortDescription: 'Developing young leaders in the art of media production.',
        description: 'The Media program is designed to develop young leaders who can effectively manage and organize events, projects, and tasks. Through hands-on experience and training, participants learn the importance of organization, communication, and teamwork.',
        image: '/images/media.jpg',
        activities: [],
    },
    {
        name: 'Sports',
        slug: 'sports',
        shortDescription: 'Developing young leaders in the art of sports.',
        description: 'The Sports program is designed to develop young leaders who can effectively manage and organize events, projects, and tasks. Through hands-on experience and training, participants learn the importance of organization, communication, and teamwork.',
        image: '/images/sports.jpg',
        activities: [],
    },
    {
        name: 'University',
        slug: 'university',
        shortDescription: 'Developing young leaders in the art of university.',
        description: 'The University program is designed to develop young leaders who can effectively manage and organize events, projects, and tasks. Through hands-on experience and training, participants learn the importance of organization, communication, and teamwork.',
        image: '/images/university.jpg',
        activities: [],
    },
    {
        name: 'Culture',
        slug: 'culture',
        shortDescription: 'Developing young leaders in the art of culture.',
        description: 'The Culture program is designed to develop young leaders who can effectively manage and organize events, projects, and tasks. Through hands-on experience and training, participants learn the importance of organization, communication, and teamwork.',
        image: '/images/culture.jpg',
        activities: [],
    },
    {
        name: 'Nacidos para al altar',
        slug: 'nacidos-para-al-altar',
        shortDescription: 'Developing young leaders to be altar servers.',
        description: 'Developing young leaders to be altar servers.',
        image: '/images/nacidos.jpg',
        activities: [],
    }
];

export default Programs; 