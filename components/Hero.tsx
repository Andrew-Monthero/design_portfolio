export default function Hero() {
  return (
    <div className='h-screen flex justify-center flex-col md:max-w-screen-lg mx-auto'>
      {/* Overlay */}
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/70 z-0' />
      <div className='md:max-w-2xl z-[2]'>
        <h1 className='text-4xl leading-normal tracking-normals'>
          Transforming ideas into impactful experiences through thoughtful
          design solutions.
        </h1>
        <p className='text-[1.125rem] mt-[1.5rem] font-light leading-relaxed tracking-wide'>
          With the knowledge of both user-centric design & code, I create
          captivating digital experiences that not only look visually stunning
          but also deliver exceptional performance and usability.
        </p>
      </div>
    </div>
  );
}
