import Link from 'next/link'

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="container">
        <header className="resume-header">
          <p className="eyebrow"><span /> RESUME / K. PRAVEEN</p>
          <h1>Learning, <em>building,</em><br />moving forward.</h1>
          <p className="lead">BTech CSIT student · 3rd year · 5th semester · SGPA 7.90</p>
        </header>
        <div className="resume-layout">
          <div>
            <section className="resume-block"><h2>Profile</h2><p>I&apos;m a CSIT student focused on strengthening programming fundamentals and building practical skills. I&apos;m currently interested in growing toward Data Analysis and Game Development.</p></section>
            <section className="resume-block"><h2>Education</h2><p><strong>BTech · Computer Science & Information Technology</strong><br />Sree Datta Engineering and Science<br />3rd year · 5th semester<br />SGPA: 7.90</p></section>
            <section className="resume-block"><h2>Skills</h2><p>HTML · Python · C · GitHub (Basic)</p></section>
            <section className="resume-block"><h2>Current direction</h2><p>Building a stronger foundation through hands-on practice, then applying it to data analysis and game development projects.</p></section>
          </div>
          <aside className="resume-side">
            <span>CONTACT</span><strong>praveenkorra9608@gmail.com</strong>
            <span>LOCATION</span><strong>Hyderabad, India</strong>
            <span>ONLINE</span><strong>GitHub · LinkedIn · Instagram</strong>
            <Link className="btn btn-primary" href="/#contact">Get in touch <span>↗</span></Link>
          </aside>
        </div>
        <p style={{marginTop:60}}><Link className="text-link" href="/">← Back to portfolio</Link></p>
      </div>
    </main>
  )
}
