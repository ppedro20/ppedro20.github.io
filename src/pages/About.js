import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar, GraduationCap, BookOpen, Code, BarChart } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'BSC in Computer Engineering',
      school: 'Instituto Politécnico de Leiria',
      location: 'Leiria, Portugal',
      period: '2020 -2025',
      description: ''
    }
  ];

  const skills = {
    'Programming Languages': ['Python', 'JavaScript', 'SQL'],
    'Tools & Technologies': ['Git', 'Excel', 'Tableau', 'React', 'Node.js','AI Studio','Power BI','Docker','GitKraken','Jira','BitBucket','Streamlit','Supabase'],
    'Data Science': ['Computer Vision','Transformers','Machine Learning', 'Data Analysis', 'Statistical Analysis', 'Data Visualization'],
    'Soft Skills': ['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Communication']
  };

  const interests = [
    {
      title: 'Artificial Intelligence',
      description: 'Passionate about machine learning, deep learning, and AI applications.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Data Science',
      description: 'Interested in data analysis, visualization, and extracting insights from data.',
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: 'Sports & Fitness',
      description: 'Enjoy staying active through various sports and fitness activities.',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: 'Travel & Culture',
      description: 'Love exploring new places and experiencing different cultures.',
      icon: <MapPin className="w-6 h-6" />
    }
  ];

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
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know me better - my background, skills, and what drives me in the world of technology.
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card p-8 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Personal Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-gray-500" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Leiria, Portugal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-gray-500" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">ppedroodev@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-gray-500" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Available for opportunities</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Bio
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My passion lies in Artificial Intelligence and Data Science, and I'm actively 
                seeking job or internship opportunities in these exciting fields. I believe in continuous 
                learning and staying up-to-date with the latest technologies and industry trends.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {edu.school}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {edu.location} • {edu.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Interests & Hobbies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <div className="text-primary-600 dark:text-primary-400">
                        {interest.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Let's Connect!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ppedroodev@gmail.com"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Mail size={16} />
                <span>Send Email</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 