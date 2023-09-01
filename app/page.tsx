import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProjectSection from '@/components/ProjectSection';

export default async function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <ProjectSection />
      </div>
      <Footer />
    </div>
  );
}
