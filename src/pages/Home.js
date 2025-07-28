import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const skills = [
    'Python', 'JavaScript', 'SQL','Git', 'Excel', 'Tableau', 'React', 'Node.js','AI Studio','Power BI','Docker','GitKraken','Jira','BitBucket','Streamlit','Supabase'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm{' '}
                  <span className="gradient-text">Pedro Pedro</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  AI / Data Engineer
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                  Passionate about Artificial Intelligence and Data Science, actively seeking job or
                  internship opportunities in these exciting fields.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>View Projects</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ppedro20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ppedrodev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Interests & Hobbies
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Sports & Fitness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Watching Series & Movies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Traveling & Exploring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Continuous Learning</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 