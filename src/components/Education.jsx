import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { education } from '../data/portfolioData';

const Education = () => (
  <section id="education" className="mx-auto max-w-6xl px-6 py-20">
    <SectionHeading title="Education" subtitle="Academic milestones and performance." />

    <div className="relative border-l border-slate-700 pl-8">
      {education.map((item, index) => (
        <motion.article
          key={item.institute}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="card relative mb-8"
        >
          <span className="absolute -left-[2.35rem] top-7 h-4 w-4 rounded-full bg-gradient-to-r from-primary to-secondary" />
          <h3 className="text-xl font-semibold text-white">{item.institute}</h3>
          <p className="mt-1 text-slate-300">{item.degree}</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-400">
            <span>{item.duration}</span>
            <span>•</span>
            <span>{item.score}</span>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Education;
