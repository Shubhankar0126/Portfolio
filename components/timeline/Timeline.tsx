import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import TimelineNode from './TimelineNode';
import { timeline } from '@/data/timeline';

export default function Timeline() {
  return (
    <Section id="timeline" eyebrow="CLASS: EDUCATION + MILESTONES" title="Timeline">
      <Reveal>
        <div>
          {timeline.map((item) => (
            <TimelineNode key={`${item.year}-${item.title}`} item={item} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
