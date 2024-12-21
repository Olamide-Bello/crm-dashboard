import React from 'react'
import Progress from './Progress'
import { ChevronDown } from 'lucide-react';
import InsightCarousel from './InsightCarousel';
import KeyActivities from './KeyActivities';

const Insight = () => {
    const user = "Mona";
    const progress = 68;
    const goal = 45;
    const totalLead = 75;
    const metrics = [
        { label: "Won", value: 18 },
        { label: "Committed", value: 8 },
        { label: "Best Case", value: 7 },
        { label: "Qualified", value: 5 },
    ];
    return (
        <section className="rounded-[10px] shadow-xl bg-gradient-to-r from-blue-500 via-[#b1d6f0] to-purple-500 p-[2px] mt-4">
            <div className="md:p-6 p-4 w-full h-full border-4 border-transparent rounded-lg bg-clip-border bg-white">
                <div className='flex gap-1'>
                    <Progress userName={user} progress={progress} goal={goal} metrics={metrics} totalLead={totalLead} />
                    <ChevronDown className='w-4 h-4 text-[#3b3b3b] hover:text-[#325ac5] hidden md:block' />
                </div>
                <div className='flex flex-col md:flex-row mt-4 md:gap-0 gap-6'>
                    <InsightCarousel />
                    <KeyActivities />
                </div>
            </div>
        </section>
    )
}

export default Insight