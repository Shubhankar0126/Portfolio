import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

export default function About() {
  return (
    <Section id="about" eyebrow="CLASS: ABOUT" title="About">
      <Reveal>
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 space-y-4 text-ink-muted leading-relaxed">
            <p>
              I&apos;m an AI/ML engineer currently completing a B.Tech in Computer
              Science &amp; Engineering — Artificial Intelligence &amp; Machine
              Learning at Vellore Institute of Technology, Bhopal, with a CGPA
              of 8.70/10.
            </p>
            <p>
              My work sits at the intersection of deep learning and real-world
              deployment: training CNNs and transformer-based models that
              reach up to 99% accuracy, then getting them onto real hardware —
              from an ESP32-based edge device for currency detection to
              interpretable diagnostic tools for medical imaging.
            </p>
            <p>
              I&apos;m AWS certified across three tracks (Cloud Practitioner,
              Solutions Architect Associate, and AI Practitioner), and I care
              about the full pipeline — not just model accuracy, but how a
              system is built, scaled, and explained.
            </p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-6">
            <p className="tag-mono text-signal-blue mb-4">QUICK FACTS</p>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li>
                <span className="text-ink">Location</span> — India
              </li>
              <li>
                <span className="text-ink">Focus</span> — Deep Learning,
                Computer Vision, GenAI
              </li>
              <li>
                <span className="text-ink">Education</span> — B.Tech CSE (AI &amp;
                ML), VIT Bhopal
              </li>
              <li>
                <span className="text-ink">Certifications</span> — 3x AWS,
                Azure, IBM
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
