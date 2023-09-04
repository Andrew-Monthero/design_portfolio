import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { project: string };
};
export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className='mx-[1rem] mt-[8rem] md:mt-[10rem] md:max-w-screen-lg md:mx-auto'>
      <header className='flex-wrap flex items-center justify-between'>
        <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow font-medium leading-tight sm:leading-tight lg:leading-relaxed pb-[24px]'>
          {project.name}
        </h1>
      </header>
      {/* Image */}
      <Image
        src={project.image}
        alt={project.alt}
        width={1920}
        height={1080}
        className='mt-10 border-2 border-gray-700 object-cover rounded-xl'
      />
      {/* content */}
      <div className=' mt-5'>
        <PortableText value={project.content} />
      </div>
    </div>
  );
}
