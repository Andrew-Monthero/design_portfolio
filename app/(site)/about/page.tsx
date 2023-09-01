import Image from 'next/image';
import Profile from '../../../public/assets/Andrew.jpeg';
import Experience from '@/components/Experience';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutMe() {
  return (
    <div>
      <Navbar />
      <div className='m-[1rem] md:max-w-screen-lg md:mx-auto grid md:grid-cols-2 grid-cols-1 lg:max-h-full md:gap-[4.8rem] gap-[2.4rem] items-center'>
        <div>
          <h1 className='text-4xl leading-normal tracking-normals lg:text-5xl lg:leading-snug'>
            I am Andrew Monthero, a passionate UI/UX designer based in Mumbai.
          </h1>
          <p className='pt-[2.4rem] whitespace-break-spaces leading-relaxed'>
            I believe in creating delightful user experiences that not only look
            amazing but also function flawlessly. Design is my playground, and
            code is my secret sauce to bring those designs to life! I&apos;m
            always hungry to learn and explore new horizons. The possibilities
            in this space are mind-boggling, and I can&apos;t help but dive in
            headfirst to discover innovative ways to blend technology and user
            experiences seamlessly. When I&apos;m not diving into design or
            coding adventures, you&apos;ll likely find me lost in the world of
            music. Whether it&apos;s grooving to the beat or getting lost in
            melodies, music fuels my creative soul and helps me find inspiration
            in unexpected places.
          </p>
        </div>
        <Image
          src={Profile}
          alt='andrew_image'
          className='md:max-h-fit grayscale'
        />
      </div>
      <div className='mx-[1rem] md:max-w-screen-lg md:mx-auto'>
        <h2 className='mt-24 font-bold text-3xl '>Experience</h2>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:max-h-screen'>
          <Experience
            designation='UI/UX Design Intern'
            duration='Nov 2021 - May 2022'
            company='Thinkarz Technologies Pvt. Ltd.'
          />
          <Experience
            designation='UI/UX Design-Full Time'
            duration='August 2022 - Present'
            company='Terado Engineering Pvt. Ltd.'
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
