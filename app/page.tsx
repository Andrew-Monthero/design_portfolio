import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    // Hero section
    <div className='h-screen bg-fixed bg-center bg-cover custom-img'>
      <Navbar />
      <Hero />
    </div>
  );
}
