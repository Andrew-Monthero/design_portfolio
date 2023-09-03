const Experience = (props: any) => {
  return (
    <div>
      <div className=' w-full  '>
        <div className='bg-gradient-to-br from-indigo-950 to-slate-950 rounded-2xl  p-[1.6rem] border-2 border-gray-500'>
          <h2 className='text-[1.25rem] font-normal text-gray-200 pb-[1rem]'>
            {props.designation}
          </h2>

          <h3 className='text-[2rem] font-medium text-purple-400'>
            {props.company}
          </h3>

          <p className='text-[1rem] text-gray-400 pt-[1rem]'>
            {props.duration}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Experience;
