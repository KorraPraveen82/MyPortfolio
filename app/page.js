const skills = [
  { name: 'Java', note: 'Core programming & OOP' },
  { name: 'C++', note: 'Problem solving & DSA' },
  { name: 'Machine Learning', note: 'Foundations & experiments' },
  { name: 'Web Development', note: 'Responsive interfaces' },
  { name: 'Problem Solving', note: 'DSA practice & consistency' },
]

const projects = [
  {
    number: '01',
    title: 'Smart Study Planner',
    description: 'A productivity-focused student planner to manage study goals, track consistency, and improve daily discipline.',
    status: 'Building',
    type: 'Productivity',
  },
  {
    number: '02',
    title: 'ML Mini Projects',
    description: 'Hands-on machine learning experiments exploring model training, feature engineering, and performance comparison.',
    status: 'Researching',
    type: 'Machine Learning',
  },
  {
    number: '03',
    title: 'DSA Practice Tracker',
    description: 'A lightweight dashboard concept for tracking coding streaks, solved topics, and progression in data structures and algorithms.',
    status: 'Planned',
    type: 'Developer Tool',
  },
]

const journey = [
  ['01', 'Build fundamentals', 'Strengthen Java, C++, DSA, and core computer science concepts.'],
  ['02', 'Turn practice into products', 'Use projects to move from tutorials and exercises into practical problem solving.'],
  ['03', 'Keep learning', 'Explore machine learning while improving software engineering habits and consistency.'],
]

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top">KP<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="mailto:praveenkorra9608@gmail.com">Let&apos;s talk ↗</a>
        </nav>
      </header>

      <div id="top" className="hero-wrap">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow"><span /> OPEN TO INTERNSHIPS</p>
            <p className="hero-kicker">CSIT STUDENT · BUILDER · LEARNER</p>
            <h1>Building my future,<br /><em>one project at a time.</em></h1>
            <p className="lead">I&apos;m <strong>K. Praveen</strong>, a BTech CSIT student at Sree Datta College, Hyderabad. I&apos;m focused on strong programming fundamentals, practical web development, and machine learning.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">Explore my work <span>↓</span></a>
              <a className="text-link" href="/RESUME.PRAVEEN.pdf" target="_blank" rel="noreferrer">View resume ↗</a>
            </div>
          </div>
          <aside className="hero-visual" aria-label="Current focus">
            <div className="focus-card">
              <div className="focus-top"><span>NOW FOCUSING ON</span><span className="live-dot" /></div>
              <div className="focus-main"><span className="focus-index">04</span><h2>From fundamentals<br />to <em>real products.</em></h2></div>
              <ul>
                <li>Data Structures & Algorithms</li>
                <li>Java & C++ development</li>
                <li>Machine Learning basics</li>
                <li>Portfolio-grade projects</li>
              </ul>
            </div>
            <div className="hero-note">Consistency is the skill behind every other skill.</div>
          </aside>
        </section>
      </div>

      <section id="about" className="section container split-section">
        <div className="section-label"><span>01</span><span>ABOUT</span></div>
        <div className="section-content">
          <p className="section-intro">I enjoy turning ideas into clean, useful products while improving one step at a time.</p>
          <div className="about-grid">
            <p>I&apos;m working toward becoming a software engineer with a strong blend of system thinking, coding discipline, and practical ML knowledge. My approach is simple: understand the fundamentals, build something with them, learn from what breaks, and keep going.</p>
            <div className="about-aside"><span>BASED IN</span><strong>Hyderabad, India</strong><span>EDUCATION</span><strong>BTech · CSIT</strong></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section container split-section">
        <div className="section-label"><span>02</span><span>SKILLS</span></div>
        <div className="section-content">
          <p className="section-intro">A growing toolkit, grounded in fundamentals.</p>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <article className="skill-row" key={skill.name}><span className="skill-number">0{index + 1}</span><h3>{skill.name}</h3><span className="skill-note">{skill.note}</span><span className="arrow">↗</span></article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section container projects-section">
        <div className="projects-head"><div className="section-label"><span>03</span><span>SELECTED WORK</span></div><p>Projects at different stages of the build cycle — from ideas to experiments.</p></div>
        <div className="stacked-projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-meta"><span>{project.number}</span><span>{project.type}</span><span className="project-status">{project.status}</span></div>
              <div className="project-body"><h3>{project.title}</h3><p>{project.description}</p></div>
              <span className="project-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section container journey-section">
        <div className="section-label"><span>04</span><span>THE JOURNEY</span></div>
        <div className="section-content">
          <p className="section-intro">Learn → build → reflect → repeat.</p>
          <div className="journey-list">{journey.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section id="contact" className="contact-panel container">
        <p className="eyebrow"><span /> HAVE A PROJECT IN MIND?</p>
        <h2>Let&apos;s build something<br /><em>worth talking about.</em></h2>
        <a className="contact-email" href="mailto:praveenkorra9608@gmail.com">praveenkorra9608@gmail.com ↗</a>
        <div className="contact-links"><a href="https://github.com/KorraPraveen82/MyPortfolio" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/RESUME.PRAVEEN.pdf" target="_blank" rel="noreferrer">Resume ↗</a></div>
      </section>

      <footer className="footer container"><span>© 2026 K. Praveen</span><span>Built with Next.js · Hyderabad</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
