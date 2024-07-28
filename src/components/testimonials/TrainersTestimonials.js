import * as React from 'react';
import Driver1 from '../../assets/images/Driver1.png';
import Driver2 from '../../assets/images/Driver2.png';
import Driver3 from '../../assets/images/Driver3.png';

function TrainersTestimonials() {
  return (
    <div className='flex flex-col items-center px-2 lg:px-5 mx-4 lg:mx-20 m-4 my-4 lg:my-10'>
      <div className='text-2xl md:lg:text-4xl w-full  text-black m-4'>
        The widest range of{' '}
      </div>
      <div className='text-2xl md:lg:text-4xl font-bold tracking-wide text-black max-md:max-w-full'>
        Skilled and dedicated Trainers
      </div>
      <div className='mt-8 mb-0 text-xl  lg:text-2xl text-center text-neutral-700 max-md:max-w-full'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        molestie eros sit amet sapien efficitur, ut ultricies magna laoreet.
        Pellentesque eu interdum leo. Quisque porta ligula ut eleifend laoreet.{' '}
      </div>
      <div className='mt-10 w-full max-md:mt-10 max-md:max-w-full'>
        <div className='flex flex-wrap gap-4 justify-center'>
          <div className='flex flex-wrap min-w-48 max-w-96'>
            <div className='flex justify-center text-sm rounded-3xl max-md:mt-0'>
              <div className='flex flex-col'>
                <div className='flex relative flex-col px-6 pt-20 pb-3.5 w-full aspect-[0.74] max-md:px-5'>
                  <img
                    src={Driver1}
                    loading='lazy'
                    className='object-cover rounded-2xl absolute inset-0 size-full'
                  />
                  <div className='relative mt-64 text-3xl font-bold text-center text-white uppercase max-md:mt-64'>
                    Driver First
                  </div>
                  <div className='flex relative gap-5 justify-center pr-3 w-full text-base uppercase'>
                    <div className='text-stone-300'>4 year experience</div>
                    <div className='flex gap-px text-white whitespace-nowrap'>
                      <img
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/135841b1c48324b7882e3ddb4aef05172a7bea79d9682f139983173892997943?'
                        className='shrink-0 w-6 aspect-square'
                      />
                      <div>4.3</div>
                    </div>
                  </div>
                  <div className='relative tracking-wide text-zinc-500'>
                    Lorem ipsum dolor sit amet, nnnnn consectetur adipiscing
                    elit. Quisque auctor aliquam velit.
                  </div>
                  <div className='relative self-center tracking-wide text-amber-300'>
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className='flex flex-wrap min-w-70 max-w-96 max-md:ml-0 max-md:w-full'>
            <div className='flex justify-center text-sm rounded-3xl max-md:mt-0'>
              <div className='flex flex-col'>
                <div className='flex relative flex-col px-6 pt-20 pb-3.5 w-full aspect-[0.74] max-md:px-5'>
                  <img
                    src={Driver1}
                    loading='lazy'
                    className='object-cover rounded-2xl absolute inset-0 size-full'
                  />
                  <div className='relative mt-64 text-3xl font-bold text-center text-white uppercase max-md:mt-64'>
                    Driver First
                  </div>
                  <div className='flex relative gap-5 justify-center pr-3 w-full text-base uppercase'>
                    <div className='text-stone-300'>4 year experience</div>
                    <div className='flex gap-px text-white whitespace-nowrap'>
                      <img
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/135841b1c48324b7882e3ddb4aef05172a7bea79d9682f139983173892997943?'
                        className='shrink-0 w-6 aspect-square'
                      />
                      <div>4.3</div>
                    </div>
                  </div>
                  <div className='relative tracking-wide text-zinc-500'>
                    Lorem ipsum dolor sit amet, nnnnn consectetur adipiscing
                    elit. Quisque auctor aliquam velit.
                  </div>
                  <div className='relative self-center tracking-wide text-amber-300'>
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className='flex flex-wrap min-w-70 max-w-96 max-md:ml-0 max-md:w-full'>
            <div className='flex justify-center text-sm rounded-3xl max-md:mt-0'>
              <div className='flex flex-col'>
                <div className='flex relative flex-col px-6 pt-20 pb-3.5 w-full aspect-[0.74] max-md:px-5'>
                  <img
                    src={Driver1}
                    loading='lazy'
                    className='object-cover rounded-2xl absolute inset-0 size-full'
                  />
                  <div className='relative mt-64 text-3xl font-bold text-center text-white uppercase max-md:mt-64'>
                    Driver First
                  </div>
                  <div className='flex relative gap-5 justify-center pr-3 w-full text-base uppercase'>
                    <div className='text-stone-300'>4 year experience</div>
                    <div className='flex gap-px text-white whitespace-nowrap'>
                      <img
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/135841b1c48324b7882e3ddb4aef05172a7bea79d9682f139983173892997943?'
                        className='shrink-0 w-6 aspect-square'
                      />
                      <div>4.3</div>
                    </div>
                  </div>
                  <div className='relative tracking-wide text-zinc-500'>
                    Lorem ipsum dolor sit amet, nnnnn consectetur adipiscing
                    elit. Quisque auctor aliquam velit.
                  </div>
                  <div className='relative m-4 self-center tracking-wide text-amber-300'>
                    Read more...
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
    </div>
  );
}

export default TrainersTestimonials;
