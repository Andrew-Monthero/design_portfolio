// import { getProjects } from '@/sanity/sanity-utils';
// import { Project } from '@/types/Project';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectSection() {
  // const projects = await getProjects();

  return (
    //Projects
    <div className='h-full flex justify-center flex-col mx-[1rem] my-[3rem] md:max-w-screen-lg md:mx-auto'>
      <h2 className='text-[2rem] md:text-[3rem] leading-snug tracking-normal  font-medium  text-gray-900'>
        Projects
      </h2>
      <div className='mt-[2.4rem] md:grid-cols-2 grid-cols-1 grid gap-8'>
        <Link
          href='https://medium.com/@andrewmonthero/creative-cooks-ui-ux-case-study-5fb14d3332a1'
          className='w-full  hover:scale-105  transition flex flex-col justify-between  rounded-2xl overflow-hidden shadow-md'
        >
          <Image
            src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JowOHcWr9tk3oY9lCTKnEw.png'
            alt='Banner_image'
            width={900}
            height={0}
            className='object-cover'
          />
          <div className='text-[1.2rem] font-medium p-[1.25rem] '>
            Creative Cooks
          </div>
        </Link>
        <Link
          href='https://medium.com/@andrewmonthero/buildnest-a-real-estate-management-tool-227452ee0bf6'
          className='w-full  hover:scale-105 transition flex flex-col justify-between rounded-2xl overflow-hidden shadow-md'
        >
          <Image
            src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*081-f5sq_TakFppV5VTTIQ.png'
            alt='Banner_image'
            width={900}
            height={0}
            className='object-cover'
          />
          <div className='text-[1.2rem] font-medium p-[1.25rem] '>
            BuildNest - Real Estate Management App
          </div>
        </Link>
        {/* {projects.map((project: Project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className='w-full  hover:scale-105 hover:bg-blue-300 transition flex flex-col justify-between bg-gradient-to-br from-indigo-950 to-slate-950 rounded-2xl border-2 border-gray-500 overflow-hidden'
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={0}
                className='object-cover'
              />
            )}
            <div className='text-[1.2rem] font-medium p-[1.5rem] '>
              {project.name}
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
}
