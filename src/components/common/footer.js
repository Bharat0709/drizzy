import * as React from 'react';

function Footer() {
  return (
    <div className='flex flex-col items-center pt-9 pb-4 bg-[#1C1F2D]'>
      <div className='flex gap-5 w-full  justify-center lg:justify-between mx-40 items-center m-auto max-w-[1150px] max-md:flex-wrap max-md:max-w-full'>
        <div className='flex flex-col items-start text-3xl lg:text-4xl text-white max-md:max-w-full'>
          <div className='font-bold text-center max-md:max-w-full'>
            Driving Made Easy
          </div>
          <div className=' text-2xl lg:text-3xl mt-4 max-md:max-w-full'>
            Download Drizzy NOW!!
          </div>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/8c60022b8f5e4e4285684c16b9775df0fef23454d0873a6f482a2ad5b4ccec20?'
            className='self-center lg:self-start mt-14 max-w-full aspect-square rounded-[35px] w-[128px] max-md:mt-10'
          />
        </div>
        <div className='flex mt-2 max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col'>
            <div className='flex flex-col w-[39%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col items-center lg:items-start px-5 text-xl text-neutral-400 max-md:mt-10'>
                <div className='self-stretch text-4xl font-semibold text-white'>
                  Explore
                </div>
                <div className='mt-6 text-neutral-400'>Home</div>
                <div className='mt-2.5'>About Us</div>
                <div className='mt-2.5'>Get App</div>
                <div className='mt-2.5'>Sign In</div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[61%] items-center lg:items-start max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow items-center lg:items-start px-5 text-xl text-neutral-400 max-md:mt-10'>
                <div className='text-4xl font-semibold text-white'>
                  Contact Us
                </div>
                <div className='mt-11 max-md:mt-10'>+91 70420 09908</div>
                <div className='mt-6'>email23@gmail.com</div>
                <div className='mt-6  text-center lg:text-left'>
                  Abc/123, Street 1, Kalkaji,
                  <br />
                  New Delhi-110058
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='self-stretch mt-7 w-full min-h-[1px] max-md:mt-10 max-md:max-w-full' />
      <div className='flex items-center  justify-center mb-4 lg:justify-between gap-5 px-5 mt-5 w-full max-w-[1160px] max-md:flex-wrap max-md:max-w-full'>
        <div className='text-lg font-light text-white'>
          © 2021 All Rights Reserved
        </div>
        <div className='flex gap-5 justify-center items-center'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/b8492fc93c9af2ea85832207e83aed3fb982edb0d29f014e15f69ce75b3ba874?'
            className='shrink-0 w-8 aspect-square'
          />
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/1042138946976c17a3f2efe125c5e507a9349406877f1f4c931c1260e869025a?'
            className='shrink-0 w-8 aspect-square'
          />
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/d58a0257d9cd057fdaee5aabb9c7f3a04830bccd63b1d95cd25f8ccdbf6ef8a3?'
            className='shrink-0 aspect-[0.93] w-[30px]'
          />
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/2fad2d4aac74f9c4e9d847af00965acf69c850fad242ce5300a046861c4921cb?'
            className='shrink-0 w-8 aspect-square'
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
