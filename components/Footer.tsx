export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-inner flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} Shubhankar Pandey. Built with Next.js.
        </p>
        <p className="tag-mono text-ink-faint">STATUS: OPEN TO WORK</p>
      </div>
    </footer>
  );
}
