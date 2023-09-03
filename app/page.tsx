import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import ProjectSection from '@/components/ProjectSection';

export default async function Home() {
  return (
    <div>
      <div>
        <Hero />
        <ProjectSection />
        <Contact />
      </div>
    </div>
  );
}
