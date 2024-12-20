"use client"
import { BrainCog, ChevronDown, ChevronsUpDown, ClipboardPen, Clock3, FileBox, FileCheck, FileClock, FileKey, Folders, Home, LayoutDashboard, Mails, Megaphone, Menu, Package, Phone, Pin, Rocket, ScrollText, UserRound, UserRoundCog } from 'lucide-react'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { AgentModal } from '@/components/ui/AgentModal';

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

const Sidebar = () => {
    const [showAgent, setShowAgent] = useState(false)

    const handleAgentModal = () => {
        setShowAgent(prev => (!prev))
    }

    return (
        <div className='h-[calc(100vh-56px)] w-[15%] border-r border-[#a6a6a6] bg-[#dfe2e8] fixed z-20 top-14 left-0 pt-3 flex flex-col'>
            <div className='px-4'><Menu /></div>
            <div className='flex flex-col gap-8 mt-4 sidebar-links h-[88%] border-b border-[#a6a6a6]'>
                <div className=''>
                    <SidebarItem url="/">
                        <Home className='w-4 h-4 text-[#3b3b3b]' />
                        <span className='text-sm text-[#3b3b3b]'>Home</span>
                    </SidebarItem>
                    <div className='flex items-center justify-between px-4 py-2 hover:bg-[#fff9] cursor-pointer mt-1'>
                        <div className='flex items-center gap-4'>
                            <Clock3 className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Recent</span>
                        </div>
                        <ChevronDown className='w-4 h-4 text-[#3b3b3b]' />
                    </div>
                    <div className='flex items-center justify-between px-4 py-2 hover:bg-[#fff9] cursor-pointer mt-1'>
                        <div className='flex items-center gap-4'>
                            <Pin className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Pinned</span>
                        </div>
                        <ChevronDown className='w-4 h-4 text-[#3b3b3b]' />
                    </div>
                    <div onClick={handleAgentModal} className='flex items-center justify-between px-4 py-2 hover:bg-[#fff9] cursor-pointer mt-1'>
                        <div className='flex items-center gap-4'>
                            <BrainCog className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Agent skill</span>
                        </div>
                        <ChevronDown className='w-4 h-4 text-[#3b3b3b]' />
                    </div>
                </div>
                <div>
                    <p className='text-base font-medium text-[#303030] px-4'>My Work</p>
                    <div className='mt-1'>
                        <SidebarItem url="/sales-accelerator">
                            <Rocket className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Sales accelerator</span>
                        </SidebarItem>
                    </div>
                    <div className='mt-1'>
                        <SidebarItem url="/dashboard">
                            <LayoutDashboard className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Dashboard</span>
                        </SidebarItem>
                    </div>
                    <div className='mt-1'>
                        <SidebarItem url="/activities">
                            <ClipboardPen className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Activities</span>
                        </SidebarItem>
                    </div>
                </div>
                <div>
                    <p className='text-base font-medium text-[#303030] px-4'>Customers</p>
                    <div className='mt-1'>
                        <SidebarItem url="/accounts">
                            <Folders className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Accounts</span>
                        </SidebarItem>
                    </div>
                    <div className='mt-1'>
                        <SidebarItem url="/contacts">
                            <UserRound className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Contacts</span>
                        </SidebarItem>
                    </div>
                </div>
                <div>
                    <p className='text-base font-medium text-[#303030] px-4'>Sales</p>
                    <div className='mt-1'>
                        <SidebarItem url="/leads">
                            <Phone className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Leads</span>
                        </SidebarItem>
                    </div>
                    <div className='mt-1'>
                        <SidebarItem url="/opportunities">
                            <FileKey className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Opportinities</span>
                        </SidebarItem>
                    </div>
                    <div className='mt-1'>
                        <SidebarItem url="/competitors">
                            <UserRoundCog className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Competitors</span>
                        </SidebarItem>
                    </div>
                </div>
                <div>
                    <p className='text-base font-medium text-[#303030] px-4'>Collateral</p>
                    <div className='mt-1'>
                        <SidebarItem url="/quotes">
                            <FileClock className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Quotes</span>
                        </SidebarItem>
                    </div>
                    <div className='mt-1'>
                        <SidebarItem url="/orders">
                            <FileBox className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Orders</span>
                        </SidebarItem>
                    </div>
                    <div className='mt-1'>
                        <SidebarItem url="invoices">
                            <FileCheck className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Invoices</span>
                        </SidebarItem>
                    </div>
                    <div className='mt-1'>
                        <SidebarItem url="products">
                            <Package className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Products</span>
                        </SidebarItem>
                    </div>
                    <div className='mt-1'>
                        <SidebarItem url="sales-literature">
                            <ScrollText className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Sales Literature</span>
                        </SidebarItem>
                    </div>
                </div>
                <div>
                    <p className='text-base font-medium text-[#303030] px-4'>Marketing</p>
                    <div className='mt-1'>
                        <SidebarItem url="/marketing-list">
                            <Mails className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Marketing lists</span>
                        </SidebarItem>
                    </div>
                    <div className='mt-1'>
                        <SidebarItem url="/quick-campaigns">
                            <Megaphone className='w-4 h-4 text-[#3b3b3b]' />
                            <span className='text-sm text-[#3b3b3b]'>Quick Campaigns</span>
                        </SidebarItem>
                    </div>
                </div>
            </div>
            <div className='border-top px-2 py-[1px] flex-1 flex items-center justify-between cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <div className='w-5 h-5 flex items-center justify-center text-white font-semibold text-xs bg-[#604783] rounded'>S</div>
                    <p className='text-base font-semibold text-gray-600'>Sales</p>
                </div>
                <ChevronsUpDown className='w-4 h-4'/>
            </div>
            {showAgent && <AgentModal onClose={handleAgentModal}/>}
        </div>
    )
}

export default Sidebar