import NavWithPalette from '@/components/nav/NavWithPalette';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Research from '@/components/research/Research';
import Timeline from '@/components/timeline/Timeline';
import Certifications from '@/components/certifications/Certifications';
import Achievements from '@/components/achievements/Achievements';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <NavWithPalette />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Timeline />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
