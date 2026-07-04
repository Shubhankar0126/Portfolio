import { Publication } from '@/data/publications';

export default function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <div className="relative pl-8 pb-10 border-l border-border last:pb-0">
      <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-signal-violet" />
      <p className="tag-mono text-ink-muted mb-1">
        {pub.venue} · {pub.year}
      </p>
      <h3 className="font-display text-base font-medium text-ink mb-2 leading-snug">
        {pub.title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-2">{pub.abstract}</p>
      <span className="tag-mono text-confidence">{pub.status}</span>
    </div>
  );
}
