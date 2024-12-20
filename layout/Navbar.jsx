import { CircleHelp, Grip, Lightbulb, Plus, Settings, User2 } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#002052] px-4 h-14 py-3 text-white flex items-center justify-between sticky left-0 top-0 right-0 z-10 '>
      <div className='flex items-center gap-8'>
        <Grip className='' />
        <div className='flex items-center gap-2'>
          <h3 className='font-semibold'>Dynamic 365</h3>
          |
          <p className='text-sm'>Sales hub</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Lightbulb />
        <Plus/>
        <Settings/>
        <CircleHelp/>
        <div className='w-8 h-8 p-1 bg-white rounded-full relative'>
          <User2 className='w-full h-full text-gray-600'/>
          <div className='bg-green-500 w-3 h-3 absolute right-0 bottom-0 border border-white rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar