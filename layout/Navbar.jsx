import { CircleHelp, Grip, Lightbulb, Plus, Settings, User2, Menu } from 'lucide-react'
import React from 'react'

const Navbar = ({ handleSidebarToggle, ref }) => {
  return (
    <div className='bg-[#002052] px-4 h-14 py-3 text-white flex items-center justify-between sticky left-0 top-0 right-0 z-30 md:px-6 md:h-16'>
      <div className='flex items-center gap-4 md:gap-8'>
        <span ref={ref} onClick={handleSidebarToggle} className='block md:hidden'>
          <Menu className=' w-4 h-4' />
        </span>
        <Grip className='hidden sm:block' />
        <div className='flex items-center gap-2'>
          <h3 className='font-semibold text-sm md:text-base'>Dynamic 365</h3>
          <span className='hidden sm:block'>|</span>
          <p className='text-xs md:text-sm'>Sales hub</p>
        </div>
      </div>
      <div className='flex items-center gap-2 md:gap-4'>
        <Lightbulb className='hidden sm:block' />
        <Plus className='hidden sm:block' />
        <Settings className='hidden sm:block' />
        <CircleHelp className='hidden sm:block' />
        <div className='w-8 h-8 p-1 bg-white rounded-full relative'>
          <User2 className='w-full h-full text-gray-600' />
          <div className='bg-green-500 w-3 h-3 absolute right-0 bottom-0 border border-white rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar