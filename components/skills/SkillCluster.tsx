import { SkillGroup } from '@/data/skills';

export default function SkillCluster({ group }: { group: SkillGroup }) {
  return (
    <div className="bg-panel border border-border rounded-lg p-5 hover:border-ink-faint transition-colors">
      <p className="tag-mono text-signal-violet mb-3">{group.label}</p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="text-xs text-ink-muted bg-void border border-border rounded px-2.5 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
