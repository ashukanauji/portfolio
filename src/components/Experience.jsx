import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experiences } from '../data/portfolioData';

const Experience = () => (
  <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
    <SectionHeading title="Work Experience" subtitle="Industry exposure in cloud infrastructure and large-scale data processing." />

    <div className="relative border-l border-slate-700 pl-8">
      {experiences.map((item, index) => (
        <motion.article
          key={`${item.company}-${item.role}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="card relative mb-8"
        >
          <span className="absolute -left-[2.35rem] top-8 h-4 w-4 rounded-full bg-gradient-to-r from-primary to-secondary" />
          <h3 className="text-xl font-semibold text-white">{item.role}</h3>
          <p className="mt-1 text-base font-medium text-secondary">{item.company}</p>
          <p className="mt-2 text-sm text-slate-400">{item.duration} • {item.location}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 md:text-base">
            {item.responsibilities.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Experience;
