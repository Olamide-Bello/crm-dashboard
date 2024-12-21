"use client"
import { BrainCog, Check, ChevronDown, ChevronsUpDown, ClipboardPen, Clock3, FileBox, FileCheck, FileClock, FileKey, Folders, Home, LayoutDashboard, Mails, Megaphone, Menu, Package, Phone, Pin, Rocket, ScrollText, UserRound, UserRoundCog } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AgentModal } from '@/components/ui/AgentModal';
import { handleClickInsideDropdown, useOnClickOutside } from '@/hooks/useClickOutside';

const SidebarItem = ({ url, children }) => {
    const pathname = usePathname()
    const isActive = pathname === url


    return (
        <Link href={url}>
            <div className={`p-2 hover:bg-[#fff9] ${isActive ? "bg-white " : ""} flex items-center gap-2`}>
                <div className={`w-1 h-5 ${isActive ? "bg-[#1160b7] rounded" : ""}`} />
                <div className='flex items-center gap-4'>
                    {children}
                </div>
            </div>
        </Link>
    )
}

const Sidebar = ({ showLabels, handleShowLabel, isSidebarOpen, ref }) => {
    const [showAppOptions, setShowAppOptions] = useState(false)
    const [showAgent, setShowAgent] = useState(false)
    const triggerRef = useRef(null)
    const dropdownRef = useRef(null)

    const toggleAppOptions = (e) => {
        e?.stopPropagation();
        console.log("triggered")
        setShowAppOptions(prev => (!prev))
    }

    useOnClickOutside(dropdownRef, triggerRef, toggleAppOptions)


    const handleAgentModal = () => {
        setShowAgent(prev => (!prev))
    }

    return (
        <>
            <div ref={ref} className={`h-[calc(100vh-56px)] ${showLabels ? "w-[50%] md:w-[15%]" : "w-[10%] md:w-[5%]"} border-r border-[#a6a6a6] bg-[#dfe2e8] fixed z-20 top-14 left-0 pt-3 flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? "flex" : "hidden"} md:flex`}>
                <div onClick={handleShowLabel} className='px-4 cursor-pointer md:block hidden'><Menu /></div>
                <div className='flex flex-col gap-8 mt-4 sidebar-links h-[88%] border-b border-[#a6a6a6]'>
                    <div className=''>
                        <SidebarItem url="/">
                            <Home className='w-4 h-4 text-[#3b3b3b]' />
                            {showLabels && <span className='text-sm text-[#3b3b3b]'>Home</span>}
                        </SidebarItem>
                        <div className='flex items-center justify-between px-4 py-2 hover:bg-[#fff9] cursor-pointer mt-1'>
                            <div className='flex items-center gap-4 pl-1'>
                                <Clock3 className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Recent</span>}
                            </div>
                            {showLabels && <ChevronDown className='w-4 h-4 text-[#3b3b3b]' />}
                        </div>
                        <div className='flex items-center justify-between px-4 py-2 hover:bg-[#fff9] cursor-pointer mt-1'>
                            <div className='flex items-center gap-4 pl-1'>
                                <Pin className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Pinned</span>}
                            </div>
                            {showLabels && <ChevronDown className='w-4 h-4 text-[#3b3b3b]' />}
                        </div>
                        <div onClick={handleAgentModal} className='flex items-center justify-between px-4 py-2 hover:bg-[#fff9] cursor-pointer mt-1'>
                            <div className='flex items-center gap-4 pl-1'>
                                <BrainCog className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Agent skill</span>}
                            </div>
                            {showLabels && <ChevronDown className='w-4 h-4 text-[#3b3b3b]' />}
                        </div>
                    </div>
                    <div>
                        {showLabels && <p className='text-base font-medium text-[#303030] px-4'>My Work</p>}
                        <div className='mt-1'>
                            <SidebarItem url="/sales-accelerator">
                                <Rocket className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Sales accelerator</span>}
                            </SidebarItem>
                        </div>
                        <div className='mt-1'>
                            <SidebarItem url="/dashboard">
                                <LayoutDashboard className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Dashboard</span>}
                            </SidebarItem>
                        </div>
                        <div className='mt-1'>
                            <SidebarItem url="/activities">
                                <ClipboardPen className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Activities</span>}
                            </SidebarItem>
                        </div>
                    </div>
                    <div>
                        {showLabels && <p className='text-base font-medium text-[#303030] px-4'>Customers</p>}
                        <div className='mt-1'>
                            <SidebarItem url="/accounts">
                                <Folders className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Accounts</span>}
                            </SidebarItem>
                        </div>
                        <div className='mt-1'>
                            <SidebarItem url="/contacts">
                                <UserRound className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Contacts</span>}
                            </SidebarItem>
                        </div>
                    </div>
                    <div>
                        {showLabels && <p className='text-base font-medium text-[#303030] px-4'>Sales</p>}
                        <div className='mt-1'>
                            <SidebarItem url="/leads">
                                <Phone className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Leads</span>}
                            </SidebarItem>
                        </div>
                        <div className='mt-1'>
                            <SidebarItem url="/opportunities">
                                <FileKey className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Opportinities</span>}
                            </SidebarItem>
                        </div>
                        <div className='mt-1'>
                            <SidebarItem url="/competitors">
                                <UserRoundCog className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Competitors</span>}
                            </SidebarItem>
                        </div>
                    </div>
                    <div>
                        {showLabels && <p className='text-base font-medium text-[#303030] px-4'>Collateral</p>}
                        <div className='mt-1'>
                            <SidebarItem url="/quotes">
                                <FileClock className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Quotes</span>}
                            </SidebarItem>
                        </div>
                        <div className='mt-1'>
                            <SidebarItem url="/orders">
                                <FileBox className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Orders</span>}
                            </SidebarItem>
                        </div>
                        <div className='mt-1'>
                            <SidebarItem url="invoices">
                                <FileCheck className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Invoices</span>}
                            </SidebarItem>
                        </div>
                        <div className='mt-1'>
                            <SidebarItem url="products">
                                <Package className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Products</span>}
                            </SidebarItem>
                        </div>
                        <div className='mt-1'>
                            <SidebarItem url="sales-literature">
                                <ScrollText className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Sales Literature</span>}
                            </SidebarItem>
                        </div>
                    </div>
                    <div>
                        {showLabels && <p className='text-base font-medium text-[#303030] px-4'>Marketing</p>}
                        <div className='mt-1'>
                            <SidebarItem url="/marketing-list">
                                <Mails className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Marketing lists</span>}
                            </SidebarItem>
                        </div>
                        <div className='mt-1'>
                            <SidebarItem url="/quick-campaigns">
                                <Megaphone className='w-4 h-4 text-[#3b3b3b]' />
                                {showLabels && <span className='text-sm text-[#3b3b3b]'>Quick Campaigns</span>}
                            </SidebarItem>
                        </div>
                    </div>
                </div>
                <div className='flex-1 relative'>
                    <div onClick={toggleAppOptions} aria-expanded={showAppOptions} ref={triggerRef} className={`border-top px-2 py-[1px] h-full flex items-center justify-between cursor-pointer ${showLabels ? "" : "pointer-events-none"}`}>
                        <div className='flex items-center gap-2'>
                            <div className='w-5 h-5 flex items-center justify-center text-white font-semibold text-xs bg-[#604783] rounded'>S</div>
                            {showLabels && <p className='text-base font-semibold text-gray-600'>Sales</p>}
                        </div>
                        {showLabels && <ChevronsUpDown className='w-4 h-4' />}
                    </div>
                    {showAppOptions &&
                        <div ref={dropdownRef} onClick={handleClickInsideDropdown} className='absolute bottom-full left-0 z-20 w-full bg-white shadow-lg px-3 py-2 text-[#3b3b3b] rounded-t-lg !hover:cursor-none'>
                            <p className='py-1'>Change area</p>
                            <p className='flex items-center justify-between py-1'>Sales<Check className='w-4 h-4' /></p>
                            <p className='py-1'>App Settings</p>
                            <p className='py-1'>Sales Insights Settings</p>
                            <p className='py-1'>Personal Settings</p>
                        </div>
                    }
                </div>
            </div>
            {showAgent && <AgentModal onClose={handleAgentModal} />}
        </>
    )
}

export default Sidebar