import { ChartLine, ChartPie, ChevronDown, Columns3, EllipsisVertical, List, ListFilter, Plus, RotateCw, Trash2, UsersRound } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Share from "@/public/icons/share.svg"

const Header = () => {
    return (
        <header className='bg-white px-3 py-1 shadow-md md:flex hidden items-center justify-between rounded'>
            <div className='flex items-center gap-1'>
                <p className='text-sm font-bold text-[#3e3d3d]'>My open leads</p>
                <ChevronDown className='w-4 h-4 ' />
            </div>
            <div className='flex items-center'>
                <div className='flex items-center gap-4 border-r pr-2'>
                    <button className='flex items-center gap-1 cursor-pointer hover:text-blue-600 text-[#707070] rounded' title='Show leads chart' aria-label='Show leads chart'>
                        <ChartLine className='w-4 h-4' />
                        <span className='font-medium text-sm'>Show chart</span>
                    </button>
                    <button className='flex items-center gap-1 cursor-pointer hover:text-blue-600 text-[#707070] rounded' title='Display focused view' aria-label='Display focused view'>
                        <List className='w-4 h-4' />
                        <span className='font-medium text-sm'>Focused view</span>
                    </button>
                    <button className='flex items-center gap-1 cursor-pointer hover:text-blue-600 text-[#707070] rounded' title='Add a new lead' aria-label='Add a new lead'>
                        <Plus className='w-4 h-4' />
                        <span className='font-medium text-sm'>New</span>
                    </button>
                    <button className='flex items-center gap-1 cursor-pointer hover:text-blue-600 text-[#707070] rounded' title='Refresh leads list' aria-label='Refresh leads list'>
                        <RotateCw className='w-4 h-4' />
                        <span className='font-medium text-sm'>Refresh</span>
                    </button>
                    <button className='2xl:flex items-center gap-1 hidden cursor-pointer hover:text-blue-600 text-[#707070] rounded' title='See collaborations' aria-label='See collaborations'>
                        <UsersRound className='w-4 h-4' />
                        <span className='font-medium text-sm'>Collaboration</span>
                    </button>
                    <button className='flex items-center gap-1 cursor-pointer hover:text-blue-600 text-[#707070] rounded' title='Delete leads list' aria-label='Delete leads list'>
                        <Trash2 className='w-4 h-4' />
                        <span className='font-medium text-sm'>Delete</span>
                    </button>
                </div>
                <div className='flex items-center gap-2 pl-1'>
                    <ChevronDown className='w-4 h-4 text-[#707070]' title='See more actions' aria-label='See more actions'/>
                    <EllipsisVertical className='w-4 h-4 text-[#707070]'/>
                    <button className='flex items-center gap-2 border p-2 h-8 rounded hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out' aria-label='Smart data'>
                        <ChartPie className='w-4 h-4 text-[#707070]'/>
                        <span className='font-medium text-sm text-[#707070]'>Smart data</span>
                    </button>
                    <button className='flex items-center gap-2 border p-2 h-8 rounded hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out' aria-label='Edit filters'>
                        <ListFilter className='w-4 h-4 text-[#707070]'/>
                        <span className='font-medium text-sm text-[#707070]'>Edit filters</span>
                    </button>
                    <button className='flex items-center gap-2 border px-2 py-1 h-8 rounded hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out' aria-label='Edit columns'>
                        <Columns3 className='w-4 h-4 text-[#707070]'/>
                        <span className='font-medium text-sm text-[#707070]'>Edit columns</span>
                    </button>
                    <button className='bg-[#325ac5] rounded flex items-center gap-2 border px-2 py-2 h-8 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out' title='Share leads list and insights' aria-label='Share leads list and insights'>
                        <Share className='text-white w-4 h-4'/>
                        <ChevronDown className='w-4 h-4 text-white border-l border-white' />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header