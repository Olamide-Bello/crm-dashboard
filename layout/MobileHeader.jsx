import { useOnClickOutside } from '@/hooks/useClickOutside';
import { Menu, ChevronDown, ChartLine, List, Plus, RotateCw, Trash2, UsersRound, ChartPie, ListFilter, Columns3, EllipsisVertical } from 'lucide-react'
import React, { useRef, useState } from 'react'

const MobileHeader = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const triggerRef = useRef(null)
    const dropdownRef = useRef(null)

    useOnClickOutside(dropdownRef, triggerRef, () => setShowDropdown(false))

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    }

    return (
        <div className='flex items-center bg-[#dfe2e8] px-3 py-2 justify-between md:hidden'>
            <div className='flex items-center gap-1 text-[#3e3d3d]'>
                <p className='text-sm font-bold'>My open leads</p>
                <ChevronDown className='w-4 h-4 ' />
            </div>
            <div className='relative'>
                <div ref={triggerRef} className='flex items-center gap-1 text-[#3e3d3d] cursor-pointer' onClick={toggleDropdown}>
                    <p className='text-sm font-bold'>All actions</p>
                    <ChevronDown className='w-4 h-4 ' />
                </div>
                {showDropdown && (
                    <div ref={dropdownRef} className='absolute top-full right-0 w-fit bg-white shadow-md rounded mt-1 z-10'>
                        <div className='flex flex-col py-2 px-4 gap-2'>
                            <div className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Show leads chart'>
                                <ChartLine className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Show chart</span>
                            </div>
                            <div className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Display focused view'>
                                <List className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Focused view</span>
                            </div>
                            <div className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Add a new lead'>
                                <Plus className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>New</span>
                            </div>
                            <div className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Refresh leads list'>
                                <RotateCw className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Refresh</span>
                            </div>
                            <div className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='See collaborations'>
                                <UsersRound className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Collaboration</span>
                            </div>
                            <div className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Delete leads list'>
                                <Trash2 className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Delete</span>
                            </div>
                            <div className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Smart data'>
                                <ChartPie className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Smart data</span>
                            </div>
                            <div className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Edit filters'>
                                <ListFilter className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Edit filters</span>
                            </div>
                            <div className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Edit columns'>
                                <Columns3 className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Edit columns</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MobileHeader