import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolioData';

const Projects = () => (
  <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
    <SectionHeading title="Projects" subtitle="Selected work across machine learning and full stack development." />

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="card flex h-full flex-col"
        >
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-300">
            {project.description.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-cyan-300"
          >
            <FaGithub /> View on GitHub
          </a>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Projects;
