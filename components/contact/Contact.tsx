import { Github, Linkedin, Mail } from 'lucide-react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import ContactForm from './ContactForm';

const SOCIALS = [
  { icon: Mail, label: 'shubhankarpandey322@gmail.com', href: 'mailto:shubhankarpandey322@gmail.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/Shubhankar0126' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shubhankar-pandey-503753274' },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="CLASS: CONTACT" title="Let's talk">
      <div className="grid md:grid-cols-2 gap-10">
        <Reveal>
          <div>
            <p className="text-ink-muted leading-relaxed mb-6 max-w-md">
              Open to AI/ML engineering roles, research collaborations, and
              interesting problems in computer vision or applied deep
              learning. Reach out directly or use the form.
            </p>
            <div className="space-y-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink-muted hover:text-ink transition-colors w-fit"
                >
                  <social.icon size={16} className="text-signal-blue" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
