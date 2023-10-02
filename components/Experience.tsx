const Experience = (props: any) => {
  return (
    <div>
      <div className=' w-full '>
        <div className=' rounded-2xl  p-[1.6rem]  shadow-lg'>
          <p className='text-[1.25rem] font-normal text-gray-400 pb-[1rem]'>
            {props.designation}
          </p>

          <p className='text-[2rem] font-medium text-gray-900 max-w-[350px]'>
            {props.company}
          </p>

          <p className='text-[1rem] text-gray-400 pt-[1rem]'>
            {props.duration}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Experience;
