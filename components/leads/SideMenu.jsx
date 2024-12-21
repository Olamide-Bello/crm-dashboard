import React from 'react'
import Copilot from "@/public/icons/copilot-dark.svg"
import { MessageSquare, MessagesSquare, Phone } from 'lucide-react'

const SideMenu = () => {
  return (
    <aside className='w-8 bg-[#dfe2e8] pt-4 md:flex hidden flex-col items-center gap-4 h-full' aria-label="Side Menu">
      <button className='hover:bg-white cursor-pointer p-1' aria-label="Copilot">
        <Copilot className='w-4 h-4 text-black' />
      </button>
      <button className='hover:bg-white cursor-pointer p-1' aria-label="Messages">
        <MessagesSquare className='w-4 h-4 text-black'/>
      </button>
      <button className='hover:bg-white cursor-pointer p-1' aria-label="Phone">
        <Phone className='w-4 h-4 text-black'/>
      </button>
      <button className='hover:bg-white cursor-pointer p-1' aria-label="Message">
        <MessageSquare className='w-4 h-4 text-black'/>
      </button>
    </aside>
  )
}

export default SideMenu