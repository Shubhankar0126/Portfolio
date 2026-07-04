import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import AchievementCard from './AchievementCard';
import { achievements } from '@/data/achievements';

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="CLASS: ACHIEVEMENTS" title="Achievements">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <AchievementCard achievement={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
