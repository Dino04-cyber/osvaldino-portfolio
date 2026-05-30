import { useEffect, useMemo, useState } from 'react';
import { education, experience, profile, skillGroups, stats, type ExperienceItem, type SkillGroup } from './data/profile';
import { projects, type ProjectCaseStudy } from './data/projects';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Signal', href: '#signal' },
  { label: 'Profile', href: '#profile' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  const rotatingSignals = useMemo(() => ['SLA patterns', 'workflow gaps', 'agent performance', 'capacity risk', 'quality signals'], []);
  const [signalIndex, setSignalIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSignalIndex((currentIndex) => (currentIndex + 1) % rotatingSignals.length);
    }, 1800);
    return () => window.clearInterval(intervalId);
  }, [rotatingSignals.length]);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className={hasScrolled ? 'site-header is-scrolled' : 'site-header'}>
        <a className="brand" href="#signal" aria-label="Osvaldino Jovete home">
          <span className="brand-mark">OJ</span>
          <span className="brand-copy">Osvaldino Jovete | Portfolio</span>
        </a>

        <nav className={isMenuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      <main>
        <section className="hero-section" id="signal">
          <div className="hero-grid page-grid">
            <div className="hero-copy" data-reveal>
              <p className="micro-label">Frontend Developer pivoting into Data Analytics</p>
              <h1>{profile.headline}</h1>
              <p className="hero-subcopy">{profile.subheadline}</p>
              <div className="signal-strip" aria-live="polite">
                <span>Currently decoding</span>
                <strong>{rotatingSignals[signalIndex]}</strong>
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View case studies</a>
                <a className="button button-ghost" href="#profile">View profile</a>
              </div>
            </div>

            <aside className="profile-panel" data-reveal>
              <div className="portrait-frame">
                {!hasImageError ? (
                  <img src="/profile.jpg" alt="Osvaldino Jovete profile" onError={() => setHasImageError(true)} />
                ) : (
                  <div className="portrait-fallback">{profile.initials}</div>
                )}
              </div>
              <div className="profile-panel-copy">
                <span className="panel-kicker">Based in</span>
                <h2>{profile.location}</h2>
                <p>Operations experience turned into analytics products, scorecards, dashboards, and practical frontend systems.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="stats-ribbon page-grid" aria-label="Portfolio statistics" data-reveal>
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="section page-grid" id="profile" data-reveal>
          <div className="section-intro">
            <p className="micro-label">Profile</p>
            <h2>From operations pressure to analytics clarity.</h2>
          </div>
          <div className="editorial-card about-card">
            <p>
              I'm Osvaldino Jovete, a software developer in training based in Cape Town, South Africa. I completed my Software Development programme at CodeSpace Academy in December 2023, graduating with an 83% overall average and 98% attendance.
            </p>
            <p>
              By day I work as a Performance Analyst at EXL, where I work with data, monitor KPIs, and translate operational numbers into decisions. I'm now deliberately connecting that analytical mindset with code by building toward a career in software development, data engineering, and AI.
            </p>
            <p>
              I'm the kind of person who builds systems instead of relying on motivation. I show up, I learn fast, and I ship.
            </p>
          </div>
        </section>

        <section className="section page-grid" id="skills" data-reveal>
          <div className="section-intro">
            <p className="micro-label">Skill Map</p>
            <h2>A builder profile shaped by dashboards, data, and decisions.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => <SkillCard key={group.title} group={group} />)}
          </div>
        </section>

        <section className="section projects-section" id="projects" data-reveal>
          <div className="page-grid section-intro wide-intro">
            <p className="micro-label">Case Studies</p>
            <h2>Projects displayed as evidence, not decoration.</h2>
            <p>
              Each card shows the problem, build, data angle, and proof. This is the format that fits a pivot into data analytics because it makes the thinking visible.
            </p>
          </div>
          <div className="project-stack page-grid">
            {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </div>
        </section>

        <section className="section page-grid" id="experience" data-reveal>
          <div className="section-intro">
            <p className="micro-label">Experience</p>
            <h2>Operational roles that sharpened the analytics lens.</h2>
          </div>
          <div className="timeline-list">
            {experience.map((item) => <ExperienceCard key={`${item.role}-${item.company}`} item={item} />)}
          </div>
        </section>

        <section className="section page-grid" id="education" data-reveal>
          <div className="section-intro">
            <p className="micro-label">Education</p>
            <h2>Software foundation with a measurable record.</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.institution}>
                <span className="status-pill">Completed</span>
                <h3>{item.institution}</h3>
                <p>{item.qualification}</p>
                <small>{item.period}</small>
                <ul>
                  {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section page-grid" id="contact" data-reveal>
          <div className="contact-card">
            <p className="micro-label">Contact</p>
            <h2>Open to junior data, frontend, and analytics-focused opportunities.</h2>
            <p>Best fit: teams that value practical dashboards, operational insight, and builders who can turn messy work into structured tools.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>Email me</a>
              <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button button-ghost" href={profile.github}>GitHub</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <article className="skill-card">
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <div className="tag-cloud">
        {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: ProjectCaseStudy }) {
  return (
    <article className="project-card">
      <div className="project-index" aria-label={`Project ${project.index}`}>{project.index}</div>
      <div className="project-main">
        <div className="project-heading-row">
          <div>
            <p className="micro-label">{project.category}</p>
            <h3>{project.name}</h3>
          </div>
          <span className="project-status">{project.status}</span>
        </div>
        <p className="project-summary">{project.summary}</p>

        <div className="case-grid">
          <CasePoint label="Problem" text={project.problem} />
          <CasePoint label="Build" text={project.build} />
          <CasePoint label="Data angle" text={project.dataAngle} />
          <CasePoint label="Proof" text={project.proof} />
        </div>

        <div className="project-footer">
          <div className="tag-cloud compact">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="project-links">
            <a href={project.liveUrl} target={project.liveUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Live</a>
            <a href={project.githubUrl}>Code</a>
          </div>
        </div>
      </div>
    </article>
  );
}

function CasePoint({ label, text }: { label: string; text: string }) {
  return (
    <div className="case-point">
      <span>{label}</span>
      <p>{text}</p>
    </div>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="experience-card">
      <div>
        <h3>{item.role}</h3>
        <p>{item.company}</p>
      </div>
      <small>{item.period}</small>
      <ul>
        {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
    </article>
  );
}

export default App;
