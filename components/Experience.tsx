const Experience = (props: any) => {
  return (
    <div className='mt-5'>
      <div className='bg-gray-100 w-full rounded-3xl p-[0.8rem]'>
        <div className='bg-indigo-100 rounded-t-2xl h-[16rem] p-[1.6rem]'>
          <p className='text-[1.2rem] text-gray-600 pb-[1.6rem]'>
            {props.duration}
          </p>
          <h2 className='text-[2.4rem] font-medium text-black'>
            {props.designation}
          </h2>
        </div>
        <div>
          <h3 className='text-[1.2rem] font-medium p-[0.8rem] text-black'>
            {props.company}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Experience;
