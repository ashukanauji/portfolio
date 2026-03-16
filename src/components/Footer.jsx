import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const Footer = () => (
  <footer className="border-t border-slate-800 py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
      <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white">
          <FaGithub />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
          <FaLinkedin />
        </a>
        <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="hover:text-white">
          <SiLeetcode />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
