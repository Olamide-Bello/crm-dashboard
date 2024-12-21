import { CircleHelp, Grip, Lightbulb, Plus, Settings, User2, Menu } from 'lucide-react'
import React from 'react'

const Navbar = ({ handleSidebarToggle, ref }) => {
  return (
    <nav className='bg-[#002052] px-4 h-14 py-3 text-white flex items-center justify-between sticky left-0 top-0 right-0 z-30 md:px-6 md:h-16'>
      <div className='flex items-center gap-4 md:gap-8'>
        <button ref={ref} onClick={handleSidebarToggle} className='block md:hidden' title="Toggle Sidebar" aria-label="Toggle Sidebar">
          <Menu className=' w-4 h-4' />
        </button>
        <Grip className='hidden sm:block' title="Grip" />
        <div className='flex items-center gap-2'>
          <h3 className='font-semibold text-sm md:text-base'>Dynamic 365</h3>
          <span className='hidden sm:block'>|</span>
          <p className='text-xs md:text-sm'>Sales hub</p>
        </div>
      </div>
      <div className='flex items-center gap-2 md:gap-4'>
        <Lightbulb className='hidden sm:block cursor-pointer' title="Lightbulb" />
        <Plus className='hidden sm:block cursor-pointer' title="Add" />
        <Settings className='hidden sm:block cursor-pointer' title="Settings" />
        <CircleHelp className='hidden sm:block cursor-pointer' title="Help" />
        <div className='w-8 h-8 p-1 bg-white rounded-full relative' title="User Profile">
          <User2 className='w-full h-full text-gray-600' />
          <div className='bg-green-500 w-3 h-3 absolute right-0 bottom-0 border border-white rounded-full'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar