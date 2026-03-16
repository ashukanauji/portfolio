import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks, personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-wide text-white">
          {personalInfo.name}
        </a>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-slate-200 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-900/95 px-6 pb-4 pt-3 md:hidden">
          <ul className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block text-slate-300 transition hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
