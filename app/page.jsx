import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Slogan from '@/components/Slogan';
export default function Home() {
  return (
    <div className="relative z-0">
      <Hero />
      <Slogan />
      <Projects />
    </div>
  );
}
