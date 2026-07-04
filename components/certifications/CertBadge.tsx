import { BadgeCheck } from 'lucide-react';
import { Certification } from '@/data/certifications';

export default function CertBadge({ cert }: { cert: Certification }) {
  return (
    <div className="flex items-start gap-3 bg-panel border border-border rounded-lg p-4 hover:border-ink-faint transition-colors">
      <BadgeCheck size={18} className="text-signal-blue shrink-0 mt-0.5" />
      <div>
        <p className="text-sm text-ink font-medium leading-snug">{cert.name}</p>
        <p className="text-xs text-ink-muted mt-0.5">{cert.issuer}</p>
      </div>
    </div>
  );
}
