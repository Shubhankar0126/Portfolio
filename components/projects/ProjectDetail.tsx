'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from '@/data/projects';

export default function ProjectDetail({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/85 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-panel border border-border rounded-lg p-8"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            <div className="flex items-start justify-between mb-6">
              <span className="tag-mono text-confidence">{project.confidence}</span>
              <button
                onClick={onClose}
                aria-label="Close project detail"
                className="text-ink-muted hover:text-ink"
              >
                <X size={20} />
              </button>
            </div>

            <h3 className="font-display text-h3 font-medium text-ink mb-2">
              {project.title}
            </h3>
            <p className="text-ink-muted mb-8">{project.tagline}</p>

            <div className="space-y-6">
              <div>
                <p className="tag-mono text-signal-blue mb-2">PROBLEM</p>
                <p className="text-sm text-ink-muted leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <p className="tag-mono text-signal-blue mb-2">APPROACH</p>
                <p className="text-sm text-ink-muted leading-relaxed">{project.approach}</p>
              </div>
              <div>
                <p className="tag-mono text-signal-blue mb-2">ARCHITECTURE</p>
                <ul className="space-y-1.5">
                  {project.architecture.map((step) => (
                    <li key={step} className="text-sm text-ink-muted flex gap-2">
                      <span className="text-signal-violet">→</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="tag-mono text-signal-blue mb-2">FEATURES</p>
                <ul className="space-y-1.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm text-ink-muted flex gap-2">
                      <span className="text-confidence">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="tag-mono text-signal-blue mb-2">STACK</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-ink-muted bg-void border border-border rounded px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
