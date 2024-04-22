const Diagnose = () => {
  return (
    <>
      <main className='px-4 py-5 border-2 border-gray-400 rounded-md md:my-24 my-14 md:px-20 md:py-10 md:mx-14 mx-7 md:w-2/3'>
        <div>
          <h1 className='text-[#2b3d26] font-bold md:text-3xl text-2xl text-center'>
            Diagnose Disease Through AI
          </h1>
        </div>
        <div className='flex justify-between py-10 '>
          {/* <label htmlFor=''>Select Language</label> */}
          <select className='px-3 border border-black rounded-md md:py-1 '>
            <option value=''>Select Crop</option>
            <option value=''>Wheat</option>
            <option value=''>Corn</option>
          </select>
          <button className='bg-[#425D3A] w-fit px-6 py-2 items-center text-white  text-lg rounded-md'>
            Try Web Cam
          </button>
        </div>

        <div className='flex flex-col items-center justify-center w-full'>
          <label
            htmlFor='dropzone-file'
            className='flex flex-col items-center justify-center px-5 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer md:w-1/2 md:h-64 bg-gray-50'
          >
            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
              <svg
                className='w-8 h-8 mb-4 text-gray-500'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 16'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  // strokeLineJoin='round'
                  strokeWidth='2'
                  d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                />
              </svg>
              <p className='mb-2 text-sm text-gray-500'>
                <span className='font-semibold'>Click to upload</span> or drag
                and drop
              </p>
              <p className='text-xs text-gray-500'>
                Supported format: PNG, JPG
              </p>
            </div>
            <input id='dropzone-file' type='file' className='hidden' />
          </label>
          <div className='flex items-center gap-8 mt-6 md:mt-4 md:ml-48'>
            <button className='px-6 py-2 border border-gray-400 rounded-md'>
              Cancel
            </button>
            <button className='bg-[#425D3A] w-fit px-6 py-2 items-center text-white  text-lg rounded-md'>
              Upload
            </button>
          </div>
        </div>
        <div className='mt-10 text-center'>
          <button className='bg-[#425D3A] px-6 py-2 items-center text-white  text-lg rounded-full md:w-96 w-44'>
            Diagnose
          </button>
        </div>
      </main>
    </>
  );
};

export default Diagnose;
