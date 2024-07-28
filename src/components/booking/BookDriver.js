import * as React from 'react';
import BookDriverImage from '../../assets/images/BookDriver.png';

function BookDriver() {
  return (
    <div className='flex justify-center items-center px-16 py-14 bg-[#1C1F2D] max-md:px-5'>
      <div className='flex flex-col items-center w-full max-w-[1121px] max-md:max-w-full'>
        <div className='text-4xl text-white'>Start your journey</div>
        <div className='text-4xl mt-4  font-bold tracking-wide text-white'>
          Book a Trainer
        </div>
        <div className='self-stretch mt-2.5 max-md:max-w-full'>
          <div className='flex gap-5 justify-center max-md:flex-col'>
            <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
              <img
                src={BookDriverImage}
                loading='lazy'
                className='w-full self-center p-10 aspect-square max-md:mt-10 max-md:max-w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDriver;
