import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import SkillCluster from './SkillCluster';
import { skillGroups } from '@/data/skills';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="CLASS: SKILLS" title="Technical Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <SkillCluster group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
