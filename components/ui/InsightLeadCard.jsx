import { CalendarClock, MailPlus, User2 } from 'lucide-react'
import React from 'react'

const InsightLeadCard = ({ lead }) => {
    return (
        <div className='border rounded-lg p-3 relative flex flex-col gap-3 w-1/2'>
            <div className='flex items-start gap-2'>
                <div className='w-6 h-6 p-1 bg-white rounded-full border'>
                    <User2 className='w-full h-full text-gray-600' />
                </div>
                <div>
                    <p className='text-sm font-bold text-[#3e3d3d]'>{lead.name}</p>
                    <p className='text-gray-400 text-sm'>{lead.title} &bull; {lead.company}</p>
                </div>
            </div>

            <div className='bg-[#b1d6f050] rounded-lg p-2 '>
                <div className='flex items-center gap-1'>
                    {lead.type === "mail" && <MailPlus className='w-4 h-4 text-[#3e3d3d]'/>}
                    {lead.type === "meet" && <CalendarClock className='w-4 h-4 text-[#3e3d3d]'/>}
                    <p className='text-sm font-bold text-[#3e3d3d]'>{lead.headline}</p>
                </div>
                <p className='text-sm text-[#707070]'>{lead.description}</p>
            </div>
            <div className='flex items-center gap-1 text-gray-400 text-sm'>
                {lead.tags.map((tag, index) => (
                    <div key={index}>
                        <span >{tag} </span> &bull;
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InsightLeadCard