import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { aboutText } from '../data/portfolioData';

const About = () => (
  <section id="about" className="mx-auto max-w-6xl px-6 py-20">
    <SectionHeading title="About Me" subtitle="A brief overview of my academic journey, research interests, and engineering focus." />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="card"
    >
      <p className="leading-8 text-slate-300">{aboutText}</p>
    </motion.div>
  </section>
);

export default About;
