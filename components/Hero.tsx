export default function Hero() {
  return (
    <div className='bg-fixed bg-center bg-cover custom-img z-0'>
      {/* Overlay */}
      <div className='absolute h-screen top-0 bottom-0 left-0 right-0 bg-black/70 z-0' />
      <div className='h-screen flex justify-center flex-col mx-[1rem] md:max-w-screen-lg md:mx-auto'>
        <h1 className='text-4xl leading-normal tracking-normals z-[2] md:max-w-screen-md'>
          Transforming <span className='italic'>ideas</span> into impactful
          experiences through <span className='italic'>thoughtful</span> design
          solutions.
        </h1>
        <p className='text-[1.125rem] mt-[1.5rem] font-light leading-relaxed tracking-wide z-[2] md:max-w-screen-md'>
          With the knowledge of both user-centric design & code, I create
          captivating digital experiences that not only look visually stunning
          but also deliver exceptional performance and usability.
        </p>
      </div>
    </div>
  );
}
