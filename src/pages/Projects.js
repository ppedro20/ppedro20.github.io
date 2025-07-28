import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'VirtIAFut',
      description: 'Football game virtualization and player movement prediction using AI and machine learning techniques.',
      image: '/images/virtaifut-img.png',
      technologies: ['Python','Computer Vision','Image Processing','Transformers'],
      github: 'https://github.com/ppedro20/VirtIAFut',
      live: null,
      date: 'july, 2025',
      featured: true
    },
    {
      id: 2,
      title: 'Data Analysis Euro 2024',
      description: 'Data analysis of the euro 2024 tournament',
      image: '',
      technologies: ['Python','Data Analysis','Data Visualization','Streamlit'],
      github: 'https://github.com/ppedro20/Data-Analysis-Euro2024',
      live: null,
      date: 'july, 2025',
      featured: false
    },
    {
      id: 2,
      title: 'Futsal-ISM',
      description: 'Futsal management system',
      image: '',
      technologies: ['React','Tailwind','Supabase',],
      github: 'https://github.com/ppedro20/futsal-ism',
      live: null,
      date: 'july, 2025',
      featured: false
    },
    {
      id: 3,
      title: 'Remove Background Snippet',
      description: 'Snippet to remove background from images',
      image: '/images/rmv-background-img.png',
      technologies: ['Python', 'Image Processing'],
      github: 'https://github.com/ppedro20/app-rmvbg',
      live: null,
      date: 'november, 2024',
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a learning 
            experience and showcases different skills and technologies.
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
                </div>

                {/* Project Content */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-500">{project.date}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center space-x-2"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.filter(p => !p.featured).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative mb-6 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar size={14} className="text-gray-500" />
                    <span className="text-xs text-gray-500">{project.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium inline-flex items-center space-x-1"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 text-sm font-medium inline-flex items-center space-x-1"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always interested in new opportunities and exciting projects. 
              Let's work together to bring your ideas to life!
            </p>
            <a
              href="mailto:ppedroodev@gmail.com"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 