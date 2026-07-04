import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import CertBadge from './CertBadge';
import { certifications } from '@/data/certifications';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="CLASS: CERTIFICATIONS"
      confidence="8 EARNED"
      title="Certifications"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.04}>
            <CertBadge cert={cert} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
