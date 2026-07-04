import { TimelineItem } from '@/data/timeline';
import clsx from 'clsx';

export default function TimelineNode({ item }: { item: TimelineItem }) {
  const isMilestone = item.type === 'milestone';
  return (
    <div className="relative pl-8 pb-9 border-l border-border last:pb-0">
      <span
        className={clsx(
          'absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full',
          isMilestone ? 'bg-confidence' : 'bg-signal-blue'
        )}
      />
      <div className="flex items-center gap-3 mb-1">
        <span className="tag-mono text-ink-muted">{item.year}</span>
        <span
          className={clsx(
            'tag-mono',
            isMilestone ? 'text-confidence' : 'text-signal-blue'
          )}
        >
          {isMilestone ? 'MILESTONE' : 'EDUCATION'}
        </span>
      </div>
      <h3 className="font-display text-base font-medium text-ink mb-1">{item.title}</h3>
      <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
    </div>
  );
}
