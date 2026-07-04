'use client';

import { useState } from 'react';
import { Command, Download } from 'lucide-react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-void/70 border-b border-border">
      <div className="section-inner flex items-center justify-between h-16">
        <a href="#hero" className="font-display font-medium tracking-tight text-ink">
          SP
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPalette}
            className="hidden sm:flex items-center gap-1.5 text-xs text-ink-muted border border-border rounded-md px-2.5 py-1.5 hover:text-ink hover:border-ink-faint transition-colors"
            aria-label="Open command palette"
          >
            <Command size={13} />
            <span className="tag-mono">K</span>
          </button>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 text-sm bg-signal-blue text-white rounded-md px-3.5 py-1.5 hover:bg-blue-500 transition-colors"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <button
            className="md:hidden text-ink-muted"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="tag-mono">MENU</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-void px-6 py-4 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
