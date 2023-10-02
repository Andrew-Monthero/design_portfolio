export default function Hero() {
  return (
    // <div className='h-screen bg-fixed bg-center custom-img z-0'>
    <div>
      {/* Overlay */}
      {/* <div className='absolute h-screen top-0 bottom-0 left-0 right-0 bg-black/80 z-0' /> */}
      <div className='h-screen flex justify-center flex-col mx-[1rem] md:max-w-screen-lg md:mx-auto'>
        <h1 className='text-[2.5rem] md:text-[5rem]  leading-snug tracking-normal z-[2] font-medium  text-gray-900'>
          Transforming ideas into impactful experiences through thoughtful
          design solutions.
        </h1>
        <p className='text-[1.125rem] mt-[1rem] font-normal leading-relaxed tracking-normal z-[2] md:max-w-screen-sm'>
          With the knowledge of both user-centric design & code, I create
          captivating digital experiences that not only look visually stunning
          but also deliver exceptional performance and usability.
        </p>
      </div>
    </div>
  );
}
