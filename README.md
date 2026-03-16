# Ashish Das Portfolio

A modern, responsive personal portfolio website built with **React.js**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

## Features

- Dark mode inspired UI with gradient accents
- Responsive navbar with smooth scrolling
- Hero, About, Education, Experience, Projects, Skills, Contact, and Footer sections
- Timeline-style Education and Experience sections
- Project cards with tech stack badges and GitHub links
- Contact form layout and quick mail action
- Resume download button
- Mobile-first responsive design

## Project Structure

```bash
.
├── public
│   └── Ashish_Das_Resume.pdf
├── src
│   ├── components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── data
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Run Locally

1. Install dependencies
   ```bash
   npm install
   ```
2. Start development server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```
4. Preview production build
   ```bash
   npm run preview
   ```

## Notes

- Replace `public/Ashish_Das_Resume.pdf` with the latest resume file if needed.
- Contact form is currently UI-focused and uses mailto action for quick contact.
