export default function Contact() {
  return (
    <div className='h-full flex justify-center flex-col mx-[1rem] my-[5rem] md:max-w-screen-lg md:mx-auto'>
      <p className='text-[2rem] md:text-[3rem] leading-snug tracking-normal  font-medium  text-purple-500'>
        Drop a message 👇🏻
      </p>
      <div className='mt-[1rem]'>
        <a
          href="mailto:andrewmonthero0210@gmail.com?subject=Let's have a chat!"
          className='text-[1rem] md:text-[1.25rem]'
        >
          andrewmonthero0210@gmail.com
        </a>
      </div>
      <p className='mt-[5rem] text-[2rem] md:text-[3rem] leading-snug tracking-normal  font-medium  text-purple-500'>
        Find me at 🔍
      </p>
      <div className='mt-[1rem] flex flex-row gap-6'>
        <a
          href='https://www.instagram.com/artsy_technologist/'
          className='text-[1rem] md:text-[1.25rem]'
        >
          Instagram
        </a>

        <a
          href='https://www.linkedin.com/in/andrew-monthero/'
          className='text-[1rem] md:text-[1.25rem]'
        >
          Linkedin
        </a>
        <a
          href='https://www.behance.net/andrew_monthero'
          className='text-[1rem] md:text-[1.25rem]'
        >
          Behance
        </a>
      </div>
    </div>
  );
}
