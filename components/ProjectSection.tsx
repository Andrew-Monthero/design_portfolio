import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProjectSection() {
  const projects = await getProjects();

  return (
    //Projects
    <div className='h-screen bg-fixed bg-center bg-cover custom-img'>
      <div className='mt-[2.4rem] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8'>
        {projects.map((project: Project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className='bg-blue-100 w-full rounded-3xl p-[1.2rem] hover:scale-105 hover:bg-blue-300 transition flex flex-col justify-between'
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={0}
                className='object-cover rounded-lg '
              />
            )}
            <div className='text-[1.2rem] font-medium pt-[0.8rem] '>
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
