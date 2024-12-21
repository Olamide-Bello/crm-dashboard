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
        <header className='flex items-center bg-[#dfe2e8] px-3 py-2 justify-between md:hidden'>
            <div className='flex items-center gap-1 text-[#3e3d3d]'>
                <p className='text-sm font-bold'>My open leads</p>
                <ChevronDown className='w-4 h-4 ' />
            </div>
            <div className='relative'>
                <button ref={triggerRef} className='flex items-center gap-1 text-[#3e3d3d] cursor-pointer' onClick={toggleDropdown} aria-expanded={showDropdown} aria-haspopup="true">
                    <p className='text-sm font-bold'>All actions</p>
                    <ChevronDown className='w-4 h-4 ' />
                </button>
                {showDropdown && (
                    <div ref={dropdownRef} className='absolute top-full right-0 w-fit bg-white shadow-md rounded mt-1 z-10' role="menu">
                        <div className='flex flex-col py-2 px-4 gap-2'>
                            <button className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Show leads chart' aria-label='Show leads chart'>
                                <ChartLine className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Show chart</span>
                            </button>
                            <button className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Display focused view' aria-label='Display focused view'>
                                <List className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Focused view</span>
                            </button>
                            <button className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Add a new lead' aria-label='Add a new lead'>
                                <Plus className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>New</span>
                            </button>
                            <button className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Refresh leads list' aria-label='Refresh leads list'>
                                <RotateCw className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Refresh</span>
                            </button>
                            <button className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='See collaborations' aria-label='See collaborations'>
                                <UsersRound className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Collaboration</span>
                            </button>
                            <button className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Delete leads list' aria-label='Delete leads list'>
                                <Trash2 className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Delete</span>
                            </button>
                            <button className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Smart data' aria-label='Smart data'>
                                <ChartPie className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Smart data</span>
                            </button>
                            <button className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Edit filters' aria-label='Edit filters'>
                                <ListFilter className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Edit filters</span>
                            </button>
                            <button className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded' title='Edit columns' aria-label='Edit columns'>
                                <Columns3 className='w-4 h-4 text-[#707070]' />
                                <span className='font-medium text-sm text-[#707070]'>Edit columns</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default MobileHeader