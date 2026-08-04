import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About - Yudha',
};

export default function About() {
  return (
    <section id="about" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      <div className="wrap">
        <div className="about-layout">
          <div className="about-photo">
            <Image src="/images/profile/Yudha.jpg" alt="Yudha Profile" width={400} height={500} style={{ objectFit: 'cover', width: '100%', height: '100%' }} priority />
          </div>
          <div className="about-text">
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2, marginBottom: '24px' }}>I’m Yudha, Fullstack Developer</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-dim)', marginBottom: '32px' }}>
              I’m Yudha, Experienced Fullstack Developer dedicated to transforming complex technical challenges into reliable, high-performance web applications that drive real business value.
            </p>
            <div className="socials" style={{ display: 'flex', gap: '24px' }}>
              <Link style={{ display: "flex", alignItems: "center", color: "var(--text-main)", opacity: 0.8, transition: 'opacity 0.2s' }} href="https://www.instagram.com/yudhanugrahasyailendra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={20} />
              </Link>
              <Link style={{ display: "flex", alignItems: "center", color: "var(--text-main)", opacity: 0.8, transition: 'opacity 0.2s' }} href="https://github.com/yudhanugrahasyailendra/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={20} />
              </Link>
              <Link style={{ display: "flex", alignItems: "center", color: "var(--text-main)", opacity: 0.8, transition: 'opacity 0.2s' }} href="https://www.linkedin.com/in/yudhanugrahasyailendra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </Link>
              <Link style={{ display: "flex", alignItems: "center", color: "var(--text-main)", opacity: 0.8, transition: 'opacity 0.2s' }} href="mailto:yudha048@gmail.com" aria-label="Email">
                <FaEnvelope size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
