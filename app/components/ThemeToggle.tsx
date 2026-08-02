"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const buttonStyle = {
    background: 'rgba(128, 128, 128, 0.1)',
    border: '1px solid var(--line-color)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'var(--text-dim)',
    transition: 'all 0.3s ease'
  };

  if (!mounted) {
    return (
      <button style={buttonStyle} aria-label="Toggle theme">
        <div style={{ width: 18, height: 18 }} />
      </button>
    );
  }

  return (
    <button
      style={buttonStyle}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onMouseOver={(e) => { e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.background = 'rgba(128, 128, 128, 0.15)'; }}
      onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.background = 'rgba(128, 128, 128, 0.1)'; }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
