import * as React from 'react';
import MobileScreens from '../../assets/images/MobileScreens.png';
import PlayStore from '../../assets/images/PlayStore.png';
import AppStore from '../../assets/images/AppStore.png';

function DownloadApp() {
  return (
    <div className='flex flex-col items-center px-4 lg:px-40'>
      <div className='text-6xl text-center font-bold text-black capitalize max-md:max-w-full max-md:text-4xl'>
        Download the app Now!!
      </div>
      <div className='mt-9 lg:text-2xl text-center text-neutral-700 w-[890px] max-md:max-w-full'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        molestie eros sit amet sapien efficitur, ut ultricies magna laoreet.
        Pellentesque eu interdum leo.{' '}
      </div>
      <div className='self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full'>
        <div className='flex gap-5 mb-20 max-md:flex-col'>
          <div className='flex flex-col w-[65%] max-md:ml-0 max-md:w-full'>
            <img
              src={MobileScreens}
              loading='lazy'
              className='grow w-full aspect-[1.37] max-md:mt-10 max-md:max-w-full'
            />
          </div>
          <div className='flex flex-col flex-wrap justify-center ml-5 w-[35%] max-md:ml-0 max-md:w-full'>
            <div className='flex justify-center m-auto flex-col max-md:mt-10'>
              <img
                src={PlayStore}
                loading='lazy'
                className='mt-0 self-center mb-8 w-9/12 aspect-[3.45]'
              />
              <img
                src={AppStore}
                loading='lazy'
                className='mt-0 self-center mb-8 w-9/12 aspect-[3.45]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
