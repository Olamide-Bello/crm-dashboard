import React from 'react'
import Copilot from "@/public/icons/copilot-dark.svg"
import { MessageSquare, MessagesSquare, Phone } from 'lucide-react'

const SideMenu = () => {
  return (
    <div className='w-8 bg-[#dfe2e8] pt-4 flex flex-col items-center gap-4 h-full'>
        <Copilot className='w-4 h-4 text-[#707070]'/>
        <MessagesSquare className='w-4 h-4 text-[#707070]'/>
        <Phone className='w-4 h-4 text-[#707070]'/>
        <MessageSquare className='w-4 h-4 text-[#707070]'/>
    </div>
  )
}

export default SideMenu