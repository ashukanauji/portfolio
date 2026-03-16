import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolioData';

const Contact = () => (
  <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
    <SectionHeading title="Contact" subtitle="Have an opportunity or collaboration in mind? Let's talk." />

    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <h3 className="text-2xl font-semibold text-white">Get in touch</h3>
        <p className="mt-3 text-slate-300">
          I am open to internships, full-time opportunities, and collaborative projects in machine learning,
          cloud engineering, and full stack development.
        </p>
        <div className="mt-6 space-y-3 text-sm text-slate-300">
          <p>
            <span className="font-semibold text-white">Email:</span> {personalInfo.email}
          </p>
          <p>
            <span className="font-semibold text-white">Phone:</span> {personalInfo.phone}
          </p>
          <p>
            <span className="font-semibold text-white">LinkedIn:</span>{' '}
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-secondary hover:text-cyan-300">
              ashish-das-190806193
            </a>
          </p>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="card space-y-4"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="block text-sm font-medium text-slate-200">
          Name
          <input
            type="text"
            placeholder="Your name"
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-primary"
          />
        </label>
        <label className="block text-sm font-medium text-slate-200">
          Email
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-primary"
          />
        </label>
        <label className="block text-sm font-medium text-slate-200">
          Message
          <textarea
            rows="5"
            placeholder="Tell me about your opportunity..."
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-primary"
          />
        </label>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
        >
          Send Message
        </a>
      </motion.form>
    </div>
  </section>
);

export default Contact;
