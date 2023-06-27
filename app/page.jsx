import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills/Skills';
import Slogan from '@/components/Slogan';
export default function Home() {
  return (
    <div className="relative z-0">
      <Hero />
      <Slogan />
      <Skills />
      <Projects />
    </div>
  );
}
