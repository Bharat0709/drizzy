import * as React from 'react';

function OurPartners() {
  return (
    <div className='flex justify-center my-4 mb-8 items-center px-16 py-10 bg-[#1C1F2D] max-md:px-5'>
      <div className='w-full max-w-[1222px] max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col'>
          <div className='flex justify-center w-6/12 max-md:ml-0 max-md:w-full'>
            <div className='self-stretch my-0 text-2xl lg:text-5xl font-bold text-center text-white capitalize max-md:mt-4 max-md:max-w-full max-md:text-4xl'>
              Our Partners
            </div>
          </div>
          <div className='flex flex-wrap justify-center m-auto '>
            <div className='py-0.5'>
              <div className='flex gap-10 justify-center flex-wrap'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/c8809b11bea3c3e4002d4f8ce4736552c56d33232617f8a69a6f622b70de0dea?'
                  className='grow shrink-0 aspect-[0.66] w-[40px] max-md:mt-10'
                />

                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/0d0c13e34ad08047d20a859215a9560a624214b157f50d0d8b3b08c70279b320?'
                  className='shrink-0 max-w-full aspect-square w-[40px] max-md:mt-10'
                />

                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/899e41dc8a77160c2b4aed4bf9f7eb85042f9f7716bf90b427ecfb3c2472eb1f?'
                  className='shrink-0 max-w-full aspect-square w-[40px] max-md:mt-10'
                />

                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/3a8c214e9815e063797049f09535539bb2f5773fda16b9b1946482d52168cc86?'
                  className='shrink-0 max-w-full aspect-square w-[40px] max-md:mt-10'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
