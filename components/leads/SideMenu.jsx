import React from 'react'
import Copilot from "@/public/icons/copilot-dark.svg"
import { MessageSquare, MessagesSquare, Phone } from 'lucide-react'

const SideMenu = () => {
  return (
    <div className='w-8 bg-[#dfe2e8] pt-4 md:flex hidden flex-col items-center gap-4 h-full'>
      <div className=' hover:bg-white cursor-pointer p-1'>
        <Copilot className='w-4 h-4 text-black' />
      </div>
      <div className=' hover:bg-white cursor-pointer p-1'>
        <MessagesSquare className='w-4 h-4 text-black'/>
      </div>
      <div className=' hover:bg-white cursor-pointer p-1'>
        <Phone className='w-4 h-4 text-black'/>
      </div>
      <div className='hover:bg-white cursor-pointer p-1'>
        <MessageSquare className='w-4 h-4 text-black'/>
      </div>
    </div>
  )
}

export default SideMenu