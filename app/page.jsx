import Contacts from '@/components/Contacts';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Slogan from '@/components/Slogan';
import { slogan } from '@/constants';

export default function Home() {
  return (
    <main className="z-0 w-full">
      <Hero />
      <Slogan slogan={slogan[0]} />
      <Skills />
      <Slogan slogan={slogan[1]} />
      <Projects />
      <Contacts />
    </main>
  );
}
