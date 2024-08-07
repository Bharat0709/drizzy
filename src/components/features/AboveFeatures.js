import * as React from 'react';

function AboveFeatures() {
  return (
    <div className='flex flex-col items-center text-7xl font-bold text-yellow-400 bg-[#1C1F2D]  max-md:pl-5 max-md:text-4xl'>
      <div className='mt-24 mr-4 max-md:mt-10 mb-20  text-center  max-md:max-w-full max-md:text-4xl'>
        EXPERIENCE IN BUILDING
      </div>
      <img
        loading='lazy'
        src='https://cdn.builder.io/api/v1/image/assets/TEMP/8e3dc5a4ff205fbf60d50d4408ce90a7a77a37f9f84761bd606a5a371f6c7c2e?'
        className='mt-5 max-w-full aspect-[1.43] w-[448px]'
      />
    </div>
  );
}

export default AboveFeatures;
