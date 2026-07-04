import { Trophy } from 'lucide-react';
import { Achievement } from '@/data/achievements';

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="bg-panel border border-border rounded-lg p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <Trophy size={16} className="text-signal-violet" />
        <span className="tag-mono text-ink-muted">{achievement.year}</span>
      </div>
      <h3 className="font-display text-sm font-medium text-ink mb-2 leading-snug">
        {achievement.title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed">{achievement.description}</p>
    </div>
  );
}
