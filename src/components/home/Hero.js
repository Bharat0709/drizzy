import * as React from 'react';
import HeroCar from '../../assets/images/HeroCar.png';

function Hero() {
  return (
    <div>
      <div className='flex gap-5 h-[100vh] max-md:flex-col'>
        <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
          <div className='flex flex-col items-start px-5 max-md:max-w-full'>
            <div className='flex gap-5 mt-4 justify-between self-stretch px-px w-full max-md:flex-wrap max-md:max-w-full'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/16f2f5c6b297ca039ef16a03774c39be5d5ae13a9ec80bbd1d022053ec414259?'
                className='shrink-0 my-auto rounded-xl aspect-square w-[75px]'
              />
              <div className='px-11 py-7 max-md:px-5 min-w-[620px] max-w-[1200px]'>
                <div className='gap-2 hidden lg:flex max-md:flex-col'>
                  <div className='flex flex-wrap w-[46%] max-md:ml-0 max-md:w-full'>
                    <div className='flex grow gap-3 justify-between text-xl tracking-wide max-md:mt-10'>
                      <div className='flex justify-center align-middle self-center gap-2 py-2.5 text-black whitespace-nowrap'>
                        <img
                          loading='lazy'
                          src='https://cdn.builder.io/api/v1/image/assets/TEMP/cd0e349962392e15412e5298d7351b7dc12d2d36d7d4912a63117e2aa1cf9633?'
                          className='shrink-0 my-auto w-6 aspect-square'
                        />
                        <div>En</div>
                      </div>
                      <div className='py-2.5 ml-3 h-fit w-full text-gray-800'>
                        Contact Us
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full'>
                    <div className='self-center px-4 py-2 w-full text-base tracking-normal text-white bg-gray-800 rounded-[35px] max-md:px-5 max-md:mt-10'>
                      Sign In
                    </div>
                  </div>
                  <div className='flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full'>
                    <div className='px-3 py-2 w-full text-base tracking-normal text-white bg-gray-800 rounded-[31px] max-md:px-5 max-md:mt-10'>
                      Get App
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-32 ml-2 text-3xl lg:ml-10 lg:text-7xl font-semibold capitalize text-zinc-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl'>
              Drizzy
            </div>
            <div className='mt-3 ml-2 lg:ml-10 text-left text-2xl lg:text-4xl font-medium text-black tracking-[2.2px] max-md:max-w-full'>
              Driving <span className='text-gray-700'>Made Easy</span>
            </div>
            <div className='mt-6 ml-2 lg:ml-10 text-left text-lg tracking-wider text-stone-500 w-[562px] max-md:max-w-full'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            </div>
            <div className='flex gap-5 justify-center mt-10 text-base max-md:flex-wrap'>
              <div className='px-11 ml-2 lg:ml-10 py-5 text-white bg-gray-700 rounded-[36px] max-md:px-5'>
                Book a Driver
              </div>
              <div className='px-11 py-5 my-auto text-black bg-yellow-400 rounded-[36px] max-md:px-5'>
                Learn More
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
          <img
            src={HeroCar}
            loading='lazy'
            className='grow w-full pb-12 aspect-[0.96] max-md:max-w-full'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
