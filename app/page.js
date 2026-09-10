const skills = [
  { name: 'HTML', note: 'Web structure & semantic markup' },
  { name: 'Python', note: 'Programming & data foundations' },
  { name: 'C', note: 'Programming fundamentals' },
  { name: 'GitHub', note: 'Basic version control workflow' },
]

const projects = [
  { number: '01', title: 'Coming Soon', description: 'New portfolio projects will appear here as they move from idea to implementation.', status: 'Upcoming', type: 'Project' },
  { number: '02', title: 'Coming Soon', description: 'A space reserved for practical work, experiments, and projects built during my learning journey.', status: 'Upcoming', type: 'Experiment' },
  { number: '03', title: 'Coming Soon', description: 'More work will be added as I build stronger foundations in development and data analysis.', status: 'Upcoming', type: 'Build' },
]

const timeline = [
  ['01', 'BTech · CSIT', 'Sree Datta Engineering and Science'],
  ['02', 'Current stage', '3rd year · 5th semester'],
  ['03', 'Academic snapshot', 'SGPA 7.90'],
  ['04', 'Next direction', 'Data Analysis + Game Development'],
]

const certificates = [
  { title: 'Python Essentials 1', file: '/Python_Essentials_1_certificate_korrapraveenstar55385-gmail-com_664e9b26-d8fa-48bc-a017-ae6226dd12b0.pdf' },
  { title: 'Coursera Certificate', file: '/Coursera 4Y7LN4V6AT3M.pdf' },
  { title: 'Coursera Certificate', file: '/Coursera 64W0THDFWP7W.pdf' },
]

export default function Home() {
  return (
    <main>
      <div className="intro-screen" aria-hidden="true"><span>KP</span><span>PORTFOLIO / 2026</span></div>
      <header className="nav-shell">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top">KP<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Work</a><a href="#certificates">Certificates</a><a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="mailto:praveenkorra9608@gmail.com">Let&apos;s talk ↗</a>
        </nav>
      </header>

      <div id="top" className="hero-wrap">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow"><span /> AVAILABLE FOR OPPORTUNITIES</p>
            <p className="hero-kicker">CSIT STUDENT · DEVELOPER IN PROGRESS</p>
            <h1>Learning today,<br /><em>building tomorrow.</em></h1>
            <p className="lead">I&apos;m <strong>K. Praveen</strong>, a 3rd-year BTech CSIT student at Sree Datta Engineering and Science. I&apos;m building a practical foundation in development while moving toward <strong>Data Analysis</strong> and <strong>Game Development</strong>.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#projects">See what&apos;s next <span>↓</span></a><a className="text-link" href="/resume">Open resume ↗</a></div>
          </div>
          <aside className="hero-visual" aria-label="Profile snapshot">
            <div className="profile-card">
              <div className="profile-top"><span>PROFILE / 01</span><span>HYDERABAD, INDIA</span></div>
              <div className="monogram">KP<span>.</span></div>
              <div className="profile-bottom"><div><span>DEGREE</span><strong>BTech · CSIT</strong></div><div><span>SGPA</span><strong>7.90</strong></div><div><span>YEAR</span><strong>03</strong></div></div>
            </div>
            <p className="hero-note">Small steps. Useful projects. Continuous learning.</p>
          </aside>
        </section>
      </div>

      <section id="about" className="section container split-section">
        <div className="section-label"><span>01</span><span>ABOUT</span></div>
        <div className="section-content"><p className="section-intro">I&apos;m focused on turning what I learn into work I can actually show.</p><div className="about-grid"><p>My current focus is building strong programming and web fundamentals while exploring where I can go next. I&apos;m especially interested in data analysis and game development, and I want my portfolio to grow alongside my skills — honestly, project by project.</p><div className="about-aside"><span>EDUCATION</span><strong>BTech · CSIT</strong><span>COLLEGE</span><strong>Sree Datta Engineering and Science</strong><span>STATUS</span><strong>3rd year · 5th semester</strong></div></div></div>
      </section>

      <section id="skills" className="section container split-section"><div className="section-label"><span>02</span><span>SKILLS</span></div><div className="section-content"><p className="section-intro">A focused toolkit, still growing.</p><div className="skill-list">{skills.map((skill, index) => <article className="skill-row" key={skill.name}><span className="skill-number">0{index + 1}</span><h3>{skill.name}</h3><span className="skill-note">{skill.note}</span><span className="arrow">↗</span></article>)}</div></div></section>

      <section id="projects" className="section container projects-section"><div className="projects-head"><div className="section-label"><span>03</span><span>PROJECTS</span></div><p>There&apos;s no need to fill the portfolio with unfinished claims. Real projects will be added here as they are built.</p></div><div className="stacked-projects">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-meta"><span>{project.number}</span><span>{project.type}</span><span className="project-status">{project.status}</span></div><div className="project-body"><h3>{project.title}</h3><p>{project.description}</p></div><span className="project-arrow">↗</span></article>)}</div></section>

      <section className="section container split-section"><div className="section-label"><span>04</span><span>JOURNEY</span></div><div className="section-content"><p className="section-intro">Where I am — and where I&apos;m heading.</p><div className="timeline">{timeline.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section id="certificates" className="section container split-section"><div className="section-label"><span>05</span><span>CERTIFICATES</span></div><div className="section-content"><p className="section-intro">Proof of learning, not decoration.</p><div className="certificate-grid">{certificates.map((certificate, index) => <a className="certificate-card" href={certificate.file} target="_blank" rel="noreferrer" key={`${certificate.title}-${index}`}><span>0{index + 1}</span><div><strong>{certificate.title}</strong><small>Open certificate ↗</small></div></a>)}</div></div></section>

      <section className="resume-strip container"><div><p className="eyebrow"><span /> RESUME</p><h2>See the full<br /><em>story.</em></h2></div><a className="btn btn-primary" href="/resume">View resume <span>↗</span></a></section>

      <section id="contact" className="contact-panel container"><p className="eyebrow"><span /> GET IN TOUCH</p><h2>Let&apos;s connect<br /><em>and build.</em></h2><a className="contact-email" href="mailto:praveenkorra9608@gmail.com">praveenkorra9608@gmail.com ↗</a><div className="contact-links"><a href="https://github.com/KorraPraveen82/MyPortfolio" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a></div></section>
      <footer className="footer container"><span>© 2026 K. Praveen</span><span>BTech CSIT · 3rd Year · Hyderabad</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
