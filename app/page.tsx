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
              I’m Yudha, Experienced Fullstack Developer dedicated to transforming complex technical challenges into reliable, high-performance web applications that drive real business value.
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
                <div className="sim-wrapper">
                  <div className="sim-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                      <span className="exp-meta" style={{ marginBottom: 0 }}>ENIGMA Technology</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Dec 2024 - Current</span>
                    </div>
                    <h3>Fullstack Developer (Freelance)</h3>
                  </div>
                </div>
              </div>
              <div className="exp-item">
                <div className="sim-wrapper">
                  <div className="sim-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                      <span className="exp-meta" style={{ marginBottom: 0 }}>Pallaka Techno</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Jan 2026 - Mar 2026</span>
                    </div>
                    <h3>Fullstack Developer (Fulltime)</h3>
                  </div>
                </div>
              </div>
              <div className="exp-item">
                <div className="sim-wrapper">
                  <div className="sim-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                      <span className="exp-meta" style={{ marginBottom: 0 }}>PT. DES Teknologi Informasi</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>June 2025 - Nov 2025</span>
                    </div>
                    <h3>Presales Engineer (Fulltime)</h3>
                  </div>
                </div>
              </div>
              <div className="exp-item">
                <div className="sim-wrapper">
                  <div className="sim-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                      <span className="exp-meta" style={{ marginBottom: 0 }}>PT. Global Intelegensi Indonesia</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>July 2022 - July 2024</span>
                    </div>
                    <h3>Staff Programmer (Fulltime)</h3>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '32px', paddingLeft: '26px' }}>
                <Link className="btn-circuit" href="https://drive.google.com/file/d/1W4xH5by9Ki9FqxbOj7k2mcDguQskVGKa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <span>Download CV ↓</span>
                </Link>
              </div>
            </div>

            <div>
              <div className="section-head" style={{ marginBottom: '40px' }}>
                <h2 className="section-title">Skillset</h2>
              </div>
              <div className="tag-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <span className="tag">JavaScript</span><span className="tag">React.js</span> <span className="tag">Next.js</span><span className="tag">TypeScript</span>
                <span className="tag">Vue.js</span><span className="tag">HTML5</span><span className="tag">CSS3</span>
                <span className="tag">Materio UI</span><span className="tag">Material UI</span><span className="tag">Bootstrap</span><span className="tag">TailwindCSS</span>
                <span className="tag">Laravel</span><span className="tag">Java</span><span className="tag">RESTful API</span>
                <span className="tag">SQL</span><span className="tag">WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
