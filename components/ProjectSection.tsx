import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProjectSection() {
  const projects = await getProjects();

  return (
    //Projects
    <div className='h-full flex justify-center flex-col mx-[1rem] my-[3rem] md:max-w-screen-lg md:mx-auto'>
      <h2 className='text-[2rem] md:text-[3rem] leading-snug tracking-normal  font-medium  text-purple-500'>
        Projects
      </h2>
      <div className='mt-[2.4rem] md:grid-cols-2 grid-cols-1 grid gap-8'>
        {projects.map((project: Project) => (
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
        ))}
      </div>
    </div>
  );
}
