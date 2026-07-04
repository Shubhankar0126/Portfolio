'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="text-left bg-panel border border-border rounded-lg p-6 hover:border-signal-blue/40 transition-colors flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="tag-mono text-confidence">{project.confidence}</span>
        <ArrowUpRight size={16} className="text-ink-faint" />
      </div>
      <h3 className="font-display text-lg font-medium text-ink mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed flex-1">
        {project.tagline}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-5">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-[11px] text-ink-muted bg-void border border-border rounded px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.button>
  );
}
