import { Building, CalendarClock, MailPlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const KeyActivities = () => {
    return (
        <section className='flex flex-col w-full md:w-[50%] lg:w-[35%] md:pl-4 gap-4'>
            <p className="text-gray-600 font-medium md:mb-4">
                Other key activities
            </p>
            <div className='px-3 py-2 border rounded-lg'>
                <div className='flex items-start gap-2'>
                    <div className='w-6 h-6 p-1 bg-white rounded-full border'>
                        <Building className='w-full h-full text-gray-600' />
                    </div>
                    <div>
                        <p className='text-sm font-bold text-[#3e3d3d]'>Cafe A100 for Woodland Bank</p>
                        <p className='text-gray-400 text-sm'>Woodland bank &bull; $280,000 &bull; 8 days to close</p>
                    </div>
                </div>
                <div className='bg-[#b1d6f050] rounded-lg p-2 '>
                    <div className='flex items-center gap-1'>
                        <MailPlus className='w-4 h-4 text-[#3e3d3d]' />
                        <p className='text-sm font-bold text-[#3e3d3d]'>Review draft and reply to Chris Naido</p>
                    </div>
                </div>

            </div>
            <div className='px-3 py-2 border rounded-lg'>
                <div className='flex items-start gap-2'>
                    <div className='w-6 h-6 p-1 bg-white rounded-full border'>
                        <Building className='w-full h-full text-gray-600' />
                    </div>
                    <div>
                        <p className='text-sm font-bold text-[#3e3d3d]'>Partnership opportunity for Fabrikam</p>
                        <p className='text-gray-400 text-sm'>Fabrikam &bull; $5,000,000 &bull; 12 days to close</p>
                    </div>
                </div>
                <div className='bg-[#b1d6f050] rounded-lg p-2 '>
                    <div className='flex items-center gap-1'>
                        <CalendarClock className='w-4 h-4 text-[#3e3d3d]' />
                        <p className='text-sm font-bold text-[#3e3d3d]'>Review draft and reply to Chris Naido</p>
                    </div>
                </div>

            </div>
            <Link href="/leads/key-activities" className='text-blue-600 text-sm hover:underline'>Show all key activities</Link>
        </section>
    )
}

export default KeyActivities