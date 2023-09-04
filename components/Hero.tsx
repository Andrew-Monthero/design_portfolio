export default function Hero() {
  return (
    <div className='h-screen bg-fixed bg-center custom-img z-0'>
      {/* Overlay */}
      <div className='absolute h-screen top-0 bottom-0 left-0 right-0 bg-black/80 z-0' />
      <div className='h-screen flex justify-center flex-col mx-[1rem] md:max-w-screen-lg md:mx-auto'>
        <h1 className='text-[2.5rem] md:text-[5rem] text-center leading-snug tracking-normal z-[2] font-medium  text-purple-500'>
          Transforming <span className='italic font-bold '>ideas</span> into{' '}
          <span className='italic font-semibold '>impactful</span> experiences
          through <span className='italic font-semibold '>thoughtful</span>{' '}
          design solutions.
        </h1>
        <p className='text-[1.125rem] mt-[1rem] font-light leading-relaxed tracking-wide z-[2] md:max-w-screen-sm text-center mx-auto'>
          With the knowledge of both user-centric design & code, I create
          captivating digital experiences that not only look visually stunning
          but also deliver exceptional performance and usability.
        </p>
      </div>
    </div>
  );
}
