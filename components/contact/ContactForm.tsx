'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire this up to an email service (Resend, Formspree, etc.) at deploy time.
    setStatus('sent');
  }

  if (status === 'sent') {
    return (
      <div className="bg-panel border border-border rounded-lg p-6 text-center">
        <p className="text-ink font-medium">Message sent.</p>
        <p className="text-sm text-ink-muted mt-1">I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="tag-mono text-ink-muted block mb-1.5">
          NAME
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full bg-panel border border-border rounded-md px-4 py-2.5 text-sm text-ink outline-none focus:border-signal-blue transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="tag-mono text-ink-muted block mb-1.5">
          EMAIL
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full bg-panel border border-border rounded-md px-4 py-2.5 text-sm text-ink outline-none focus:border-signal-blue transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="tag-mono text-ink-muted block mb-1.5">
          MESSAGE
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full bg-panel border border-border rounded-md px-4 py-2.5 text-sm text-ink outline-none focus:border-signal-blue transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="flex items-center gap-2 bg-signal-blue text-white rounded-md px-5 py-2.5 text-sm font-medium hover:bg-blue-500 transition-colors"
      >
        Send Message
        <Send size={14} />
      </button>
    </form>
  );
}
