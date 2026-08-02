import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Yudha - Fullstack Developer',
};

export default function HomePage() {
  return (
    <>
      {/* HOME */}
      <section id="home">
        <div className="weave-bg"></div>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
          <Link href="#" style={{ display: 'block', width: '150px', height: '155px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, cursor: 'pointer' }}>
            <Image src="/images/profile/Yudha.jpg" alt="Yudha Profile" width={155} height={155} style={{ objectFit: 'cover', width: '100%', height: '100%' }} priority />
          </Link>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 className="hero-title" style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              lineHeight: 1.1,
              letterSpacing: 'normal',
              marginBottom: '12px',
              color: 'var(--text-main)',
              fontWeight: 800
            }}>
              Fullstack Developer
            </h1>
            <p className="hero-role" style={{ fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '600px', color: '#6b7280', marginBottom: '24px' }}>
              I’m Yudha, an Experienced Fullstack Developer with a strong track record of building complex web applications. Focused on reliable system architecture, performance efficiency, and high-value software solutions.
            </p>
            <div className="socials" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <Link style={{ display: "flex", alignItems: "center", color: "#6b7280", transition: 'color 0.2s' }} href="https://www.instagram.com/yudhanugrahasyailendra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={20} />
              </Link>
              <Link style={{ display: "flex", alignItems: "center", color: "#6b7280", transition: 'color 0.2s' }} href="https://github.com/yudhanugrahasyailendra/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={20} />
              </Link>
              <Link style={{ display: "flex", alignItems: "center", color: "#6b7280", transition: 'color 0.2s' }} href="https://www.linkedin.com/in/yudhanugrahasyailendra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </Link>
              <Link style={{ display: "flex", alignItems: "center", color: "#6b7280", transition: 'color 0.2s' }} href="mailto:yudha048@gmail.com" aria-label="Email">
                <FaEnvelope size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE + SKILLS */}
      <section id="experience">
        <div className="wrap">
          <div className="exp-layout">
            <div>
              <div className="section-head" style={{ marginBottom: '40px' }}>
                <h2 className="section-title">Work</h2>
              </div>
              <div className="exp-item">
                <span className="exp-meta">ENIGMA Technology</span>
                <h3>Fullstack Developer (Freelance)</h3>
                <p>Built the LANTARA marketplace from scratch using Next.js and PostgreSQL, and optimized workflows using AI (Claude, Cursor, Antigravity).</p>
              </div>
              <div className="exp-item">
                <span className="exp-meta">Pallaka Techno</span>
                <h3>Fullstack Developer (Fulltime)</h3>
                <p>Performed maintenance and full-stack development for the SIMPEG system using Laravel, and integrated a Next.js frontend.</p>
              </div>
              <div className="exp-item">
                <span className="exp-meta">PT. DES Teknologi Informasi</span>
                <h3>Presales Engineer (Fulltime)</h3>
                <p>Gathered technical requirements, designed system architecture, and prepared proposals and product demos for clients.</p>
              </div>
              <div className="exp-item">
                <span className="exp-meta">PT. Global Intelegensi Indonesia</span>
                <h3>Staff Programmer (Fulltime)</h3>
                <p>Developed web applications for container and cargo payment systems using React.js, Next.js, TypeScript, and Java.</p>
              </div>
              <div style={{ marginTop: '32px', paddingLeft: '26px' }}>
                <Link className="btn btn-solid" style={{ padding: '12px 28px', fontSize: '0.9rem' }} href="https://drive.google.com/file/d/143zpIqaOD-cWSmKne14tKfc0q6P6xUFt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download CV ↓
                </Link>
              </div>
            </div>

            <div>
              <div className="section-head" style={{ marginBottom: '40px' }}>
                <h2 className="section-title">Skillset</h2>
              </div>
              <div className="tag-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <span className="tag">JavaScript (ES6)</span><span className="tag">TypeScript</span><span className="tag">React.js</span>
                <span className="tag">Next.js</span><span className="tag">Vue.js</span><span className="tag">HTML5</span><span className="tag">CSS3</span>
                <span className="tag">Materio UI</span><span className="tag">Material UI</span><span className="tag">Bootstrap</span><span className="tag">TailwindCSS</span>
                <span className="tag">Laravel</span><span className="tag">Java</span><span className="tag">RESTful API</span>
                <span className="tag">PostgreSQL</span><span className="tag">SQL</span>
                <span className="tag">Git (GitLab/GitHub)</span><span className="tag">Docker</span><span className="tag">Figma</span>
                <span className="tag">Cypress</span><span className="tag">Redux</span><span className="tag">Axios</span><span className="tag">Visio</span>
                <span className="tag">n8n</span><span className="tag">Postman</span>
                <span className="tag">Claude AI</span><span className="tag">Cursor</span><span className="tag">Antigravity</span>
                <span className="tag">WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
