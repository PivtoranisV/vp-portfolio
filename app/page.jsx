import Hero from '@/components/Hero';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Slogan from '@/components/Slogan';
import { slogan } from '@/constants';

export default function Home() {
  return (
    <main className="relative z-0">
      <Hero />
      <Slogan slogan={slogan[0]} />
      <Skills />
      <Slogan slogan={slogan[1]} />
      <Projects />
    </main>
  );
}
