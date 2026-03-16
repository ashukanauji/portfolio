import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolioData';

const Skills = () => (
  <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
    <SectionHeading title="Technical Skills" subtitle="Core technologies and tools I use to design and build reliable solutions." />

    <div className="grid gap-6 md:grid-cols-2">
      {Object.entries(skills).map(([category, items], index) => (
        <motion.article
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="card"
        >
          <h3 className="mb-4 text-lg font-semibold text-white">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span key={skill} className="badge">
                {skill}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Skills;
