'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import {
  CAREER_ITEMS,
  CONTACTS,
  CV_URL,
  MENU_ITEMS,
  PROJECTS,
  SKILL_GROUPS,
  type MenuId,
} from '@/app/data/portfolio';

interface MainMenuProps {
  initialTab?: MenuId;
}

export default function MainMenu({ initialTab = 'profile' }: MainMenuProps) {
  const initialIndex = Math.max(
    0,
    MENU_ITEMS.findIndex((item) => item.id === initialTab)
  );
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const currentItem = MENU_ITEMS[selectedIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + MENU_ITEMS.length) % MENU_ITEMS.length);
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % MENU_ITEMS.length);
      } else if (event.key === 'Escape') {
        setSelectedIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectNext = () => {
    setSelectedIndex((prev) => (prev + 1) % MENU_ITEMS.length);
  };

  const handleBackToHome = () => {
    setSelectedIndex(0);
  };

  return (
    <div className="pes-shell">
      <svg aria-hidden="true" className="pes-bg-svg">
        <defs>
          <pattern id="hex" width="168" height="97" patternUnits="userSpaceOnUse">
            <path
              d="M28 0H84L112 48.5L84 97H28L0 48.5Z M112 48.5H168"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.06"
              strokeWidth="3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
        <line
          x1="6%"
          y1="0"
          x2="38%"
          y2="100%"
          stroke="#e0303a"
          strokeOpacity="0.55"
          strokeWidth="2"
        />
      </svg>

      <header className="pes-header">
        <div className="pes-brand">
          MASYUDHA<span className="pes-brand-dot">.</span>DEV
        </div>
        <div className="pes-controls">
          <button
            type="button"
            className="pes-control-btn"
            onClick={handleSelectNext}
            title="Pilih menu berikutnya (panah bawah)"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <circle
                cx="9"
                cy="9"
                r="8"
                fill="none"
                stroke="#ff5a63"
                strokeWidth="2"
              />
            </svg>
            PILIH
          </button>
          <button
            type="button"
            className="pes-control-btn"
            onClick={handleBackToHome}
            title="Kembali ke menu utama (Esc)"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                d="M4 4L14 14M14 4L4 14"
                stroke="#7fb2ff"
                strokeWidth="2.4"
              />
            </svg>
            KEMBALI
          </button>
        </div>
      </header>

      <main className="pes-main">
        <div className="pes-left">
          <nav aria-label="Menu utama" className="pes-nav">
            {MENU_ITEMS.map((item, index) => {
              const isActive = index === selectedIndex;
              const style = { '--menu-index': index } as CSSProperties;

              return (
                <button
                  key={item.id}
                  type="button"
                  className="mi"
                  style={style}
                  aria-pressed={isActive}
                  onClick={() => setSelectedIndex(index)}
                >
                  {isActive ? (
                    <span className="mi-active-outer">
                      <span className="mi-active-inner">
                        <span className="lbl">{item.label}</span>
                      </span>
                    </span>
                  ) : (
                    <span className="mi-inactive">
                      <span className="lbl">{item.label}</span>
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="pes-badge" aria-hidden="true">
            <span className="pes-badge-text">Yudha Dev.</span>
            <span className="pes-badge-num">26</span>
          </div>
        </div>

        <section aria-live="polite" className="pes-panel">
          <div className="pes-kicker">{currentItem.kicker}</div>

          {currentItem.id === 'profile' && (
            <>
              <h1 className="pes-hero-name">YUDHA NUGRAHA SYAILENDRA</h1>
              <div className="pes-role-tag">FULLSTACK DEVELOPER</div>
              <p className="pes-bio">
                Experienced Fullstack Developer yang mengubah tantangan teknis
                kompleks menjadi aplikasi web yang andal, berperforma tinggi,
                dan memberi nilai bisnis nyata.
              </p>
              <div className="pes-stats-grid">
                <div className="pes-stat-card">
                  <div className="pes-stat-label">KLUB SAAT INI</div>
                  <div className="pes-stat-value">ENIGMA Technology</div>
                </div>
                <div className="pes-stat-card">
                  <div className="pes-stat-label">DEBUT</div>
                  <div className="pes-stat-value">2022</div>
                </div>
                <div className="pes-stat-card">
                  <div className="pes-stat-label">PROYEK</div>
                  <div className="pes-stat-value">{PROJECTS.length} rilis</div>
                </div>
              </div>
            </>
          )}

          {currentItem.id === 'career' && (
            <>
              <h2 className="pes-panel-title">RIWAYAT TRANSFER</h2>
              {CAREER_ITEMS.map((item) => (
                <div key={`${item.period}-${item.club}`} className="row pes-career-row">
                  <div className="pes-career-period">{item.period}</div>
                  <div className="pes-career-info">
                    <div className="pes-career-club">{item.club}</div>
                    <div className="pes-career-role">{item.role}</div>
                  </div>
                  <div className="pes-career-type">{item.type}</div>
                </div>
              ))}
            </>
          )}

          {currentItem.id === 'projects' && (
            <>
              <h2 className="pes-panel-title pes-panel-title--compact">
                KLASEMEN PROYEK
              </h2>
              <div className="scroll">
                {PROJECTS.map((project) => (
                  <a
                    key={project.no}
                    className="row pes-project-row"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="pes-project-no">{project.no}</div>
                    <div className="pes-project-body">
                      <div className="pes-project-name">{project.name}</div>
                      <div className="pes-project-desc">{project.desc}</div>
                      <div className="pes-project-stack">{project.stack}</div>
                    </div>
                    <div className="pes-project-cta">LIHAT ›</div>
                  </a>
                ))}
              </div>
            </>
          )}

          {currentItem.id === 'skills' && (
            <>
              <h2 className="pes-panel-title pes-panel-title--compact">
                FORMASI SKILL
              </h2>
              <div className="scroll">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.pos} className="pes-skill-row">
                    <div className="pes-skill-pos">{group.pos}</div>
                    <div className="pes-skill-name">{group.name}</div>
                    <div className="pes-skill-chips">
                      {group.items.map((skill) => (
                        <span key={skill} className="pes-skill-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {currentItem.id === 'cv' && (
            <>
              <h2 className="pes-panel-title pes-panel-title--tight">
                DATA PEMAIN
              </h2>
              <p className="pes-cv-desc">
                Unduh CV lengkap: pengalaman, proyek, dan stack teknologi dalam
                satu dokumen.
              </p>
              <a
                className="pes-cv-btn"
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                UNDUH CV
              </a>
            </>
          )}

          {currentItem.id === 'contact' && (
            <>
              <h2 className="pes-panel-title">HUBUNGI SAYA</h2>
              {CONTACTS.map((contact) => {
                const isMail = contact.url.startsWith('mailto:');
                return (
                  <a
                    key={contact.label}
                    className="row pes-contact-row"
                    href={contact.url}
                    target={isMail ? undefined : '_blank'}
                    rel={isMail ? undefined : 'noopener noreferrer'}
                  >
                    <span className="pes-contact-label">{contact.label}</span>
                    <span className="pes-contact-value">{contact.value}</span>
                  </a>
                );
              })}
            </>
          )}
        </section>
      </main>

      <footer className="pes-ticker-footer">
        <div className="tk">
          <span>{currentItem.hint}</span>
          <span>{currentItem.hint}</span>
          <span>{currentItem.hint}</span>
          <span>{currentItem.hint}</span>
        </div>
      </footer>

      <div className="pes-copyright">© 2026 YUDHA. ALL RIGHTS RESERVED</div>
    </div>
  );
}
