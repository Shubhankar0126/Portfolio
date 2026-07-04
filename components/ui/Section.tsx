import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  id: string;
  eyebrow: string; // classifier-style label, e.g. "CLASS: RESEARCH"
  confidence?: string; // e.g. "CONF: 0.98"
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, eyebrow, confidence, title, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx('section border-t border-border', className)}>
      <div className="section-inner">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag-mono text-signal-blue">{eyebrow}</span>
          {confidence && (
            <>
              <span className="text-ink-faint">·</span>
              <span className="tag-mono text-confidence">{confidence}</span>
            </>
          )}
        </div>
        <h2 className="font-display text-h2 font-medium text-ink mb-10">{title}</h2>
        {children}
      </div>
    </section>
  );
}
