import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects - Yudha',
};

export default function Projects() {
  return (
    <section id="projects" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Projects</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', marginTop: '16px', maxWidth: '600px', lineHeight: 1.6 }}>
            Several projects that I have created.
          </p>
        </div>
        <div className="projects-grid">
          <div className='project-card'>
            <h3>Lantara (Lapak Nusantara)</h3>
            <p>An e-commerce platform to connecting local MSMEs with consumers in Indonesia.</p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>React.js</span>
            </div>
            <Link className="project-link" href="https://enigma-lantara.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Project →</Link>
          </div>
          <div className="project-card">
            <h3>Wisata Alam Malino</h3>
            <p>An interactive tourism platform showcasing the natural beauty and attractions of Malino, featuring destination guides and information.</p>
            <div className="project-tech">
              <span>Bootstrap</span>
              <span>Javascript</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
            <Link className="project-link" href="https://wisataalammalino.com/" target="_blank" rel="noopener noreferrer">Visit Project →</Link>
          </div>
          <div className="project-card">
            <h3>SIMPEG Kota Makassar</h3>
            <p>A comprehensive personnel management information system for the Makassar City Government to manage civil servant data efficiently.</p>
            <div className="project-tech">
              <span>Laravel</span>
              <span>PostgreSQL</span>
            </div>
            <Link className="project-link" href="https://peg.bkpsdmd.makassarkota.go.id/" target="_blank" rel="noopener noreferrer">Visit Project →</Link>
          </div>
          <div className="project-card">
            <h3>BKPSDMD Kota Makassar</h3>
            <p>The official web portal for the Makassar City Human Resources Agency, providing news, public services, and official updates.</p>
            <div className="project-tech">
              <span>React.js</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>TailwindCSS</span>
            </div>
            <Link className="project-link" href="https://bkpsdmd.makassarkota.go.id/" target="_blank" rel="noopener noreferrer">Visit Project →</Link>
          </div>
          <div className="project-card">
            <h3>Digital Arsip Kota Makassar</h3>
            <p>A digital document management system (DMS) designed to securely store, organize, and archive official government documents.</p>
            <div className="project-tech">
              <span>Javascript</span>
              <span>Laravel</span>
              <span>PostgreSQL</span>
            </div>
            <Link className="project-link" href="https://dms.bkpsdmd.makassarkota.go.id/" target="_blank" rel="noopener noreferrer">Visit Project →</Link>
          </div>
          <div className='project-card'>
            <h3>My Cargo KKT</h3>
            <p>A robust logistics and cargo tracking application for Kaltim Kariangau Terminal, streamlining terminal operations and monitoring.</p>
            <div className="project-tech">
              <span>Javascript</span>
              <span>Java</span>
              <span>Oracle SQL</span>
            </div>
            <Link className="project-link" href="https://impt.kariangauterminal.co.id/" target="_blank" rel="noopener noreferrer">Visit Project →</Link>
          </div>
          <div className="project-card">
            <h3>1-Eagle Billing</h3>
            <p>An enterprise billing and invoicing system designed to handle complex container terminal transactions and financial reporting.</p>
            <div className="project-tech">
              <span>TailwindCSS</span>
              <span>React.js</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Java</span>
              <span>Oracle SQL</span>
            </div>
            <Link className="project-link" href="https://dev-1eagle-bnct.primus.co.id/" target="_blank" rel="noopener noreferrer">Visit Project →</Link>
          </div>
          <div className="project-card">
            <h3>SMPN 1 Tinggimoncong</h3>
            <p>An academic web portal for SMPN 1 Tinggimoncong, featuring school profiles, student information, and the latest announcements.</p>
            <div className="project-tech">
              <span>WordPress</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
            <Link className="project-link" href="https://www.smpn1tinggimoncong.sch.id/" target="_blank" rel="noopener noreferrer">Visit Project →</Link>
          </div>
          <div className="project-card">
            <h3>Madrasah Aliyah Bindu</h3>
            <p>An academic web portal for MA Bindu, featuring school profiles, student information, and the latest announcements.</p>
            <div className="project-tech">
              <span>WordPress</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
            <Link className="project-link" href="https://madrasahaliyahbindu.sch.id/" target="_blank" rel="noopener noreferrer">Visit Project →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
