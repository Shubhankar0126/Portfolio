const STATS = [
  { value: '99%', label: 'peak model accuracy' },
  { value: '3', label: 'AWS certifications' },
  { value: '85th', label: 'nat\u2019l rank, Amazon AI/ML Challenge' },
];

export default function StatStrip() {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8">
      {STATS.map((stat) => (
        <div key={stat.label} className="flex items-baseline gap-2">
          <span className="font-display text-xl font-medium text-ink">{stat.value}</span>
          <span className="text-sm text-ink-muted">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
