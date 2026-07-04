'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import ScanGrid from './ScanGrid';
import StatStrip from './StatStrip';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <ScanGrid />

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="tag-mono text-signal-blue">CLASS: AI/ML ENGINEER</span>
          <span className="text-ink-faint">·</span>
          <span className="tag-mono text-confidence">CONF: 0.99</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.75 }}
          className="font-display text-hero font-medium text-ink max-w-3xl"
        >
          Shubhankar Pandey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.9 }}
          className="font-display text-2xl md:text-3xl text-ink-muted mt-4 max-w-2xl"
        >
          Building systems that see, classify, and decide.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.05 }}
          className="text-ink-muted mt-5 max-w-xl leading-relaxed"
        >
          AI/ML engineer specializing in deep learning, computer vision, and
          production-ready model deployment — from edge-based currency
          detection to interpretable medical imaging diagnostics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.2 }}
        >
          <StatStrip />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.35 }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-signal-blue text-white rounded-md px-5 py-2.5 text-sm font-medium hover:bg-blue-500 transition-colors"
          >
            View Projects
            <ArrowRight size={15} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 border border-border text-ink rounded-md px-5 py-2.5 text-sm font-medium hover:border-ink-faint transition-colors"
          >
            <Download size={15} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
