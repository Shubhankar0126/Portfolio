import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import PublicationCard from './PublicationCard';
import { publications } from '@/data/publications';

export default function Research() {
  return (
    <Section id="research" eyebrow="CLASS: RESEARCH" confidence="2 PAPERS" title="Research Publications">
      <Reveal>
        <div>
          {publications.map((pub) => (
            <PublicationCard key={pub.title} pub={pub} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
