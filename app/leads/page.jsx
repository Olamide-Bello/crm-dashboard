"use client"
import Header from '@/components/leads/Header'
import Insight from '@/components/leads/Insight'
import LeadsList from '@/components/leads/LeadList'
import SideMenu from '@/components/leads/SideMenu'
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col md:flex-row h-full'>
        <div className='p-3 flex-1'>
            <Header/>
            <Insight/>
            <LeadsList/>
        </div>
        <SideMenu/>
    </main>
  )
}

export default page