'use client';

import { useState } from 'react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import { projects, Project } from '@/data/projects';

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projects" eyebrow="CLASS: PROJECTS" confidence="3 SHIPPED" title="Featured Projects">
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} onOpen={() => setActive(project)} />
          </Reveal>
        ))}
      </div>
      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
