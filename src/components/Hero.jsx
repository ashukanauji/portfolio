import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="bg-hero-gradient pt-28 md:pt-36">
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-secondary"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-3xl text-lg text-slate-300"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 max-w-3xl text-slate-400"
        >
          {personalInfo.shortBio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
          >
            Let&apos;s Connect
          </a>
          <a
            href="/Ashish_Das_Resume.pdf"
            download
            className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-5 text-slate-300"
        >
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaGithub size={22} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaLinkedin size={22} />
          </a>
          <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="transition hover:text-white">
            <SiLeetcode size={22} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="transition hover:text-white">
            <MdEmail size={24} />
          </a>
          <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="transition hover:text-white">
            <FaPhoneAlt size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
