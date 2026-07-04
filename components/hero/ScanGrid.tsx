'use client';

import { motion } from 'framer-motion';

// A faint coordinate grid with bounding-box corners and a single scan-line
// sweep on load — grounded in the subject's actual work (detection models
// that draw boxes and output confidence scores), not decorative particles.
export default function ScanGrid() {
  return (
    <div className="absolute inset-0 coord-grid overflow-hidden pointer-events-none select-none">
      {/* corner brackets, like a detection bounding box */}
      {[
        { top: '18%', left: '8%' },
        { top: '18%', right: '8%' },
        { bottom: '15%', left: '8%' },
        { bottom: '15%', right: '8%' },
      ].map((pos, i) => (
        <svg
          key={i}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          className="absolute text-signal-blue/40"
          style={pos}
        >
          <path
            d="M2 10 V2 H10"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ))}

      {/* scan-line sweep, once on load */}
      <motion.div
        className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-signal-blue/10 to-transparent"
        initial={{ top: '-10%' }}
        animate={{ top: '110%' }}
        transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.3 }}
      />

      <div className="absolute inset-0 bg-grid-fade" />
    </div>
  );
}
