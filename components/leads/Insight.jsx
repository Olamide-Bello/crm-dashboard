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
        <div className="rounded-[10px] shadow-xl bg-gradient-to-r from-blue-500 via-[#b1d6f0] to-purple-500 p-[2px]">
            <div className="p-6 w-full h-full border-4 border-transparent rounded-lg bg-clip-border bg-white">
                <div className='flex gap-1'>
                    <Progress userName={user} progress={progress} goal={goal} metrics={metrics} totalLead={totalLead} />
                    <ChevronDown className='w-4 h-4 text-[#3b3b3b] hover:text-[#325ac5]' />
                </div>
                <div className='flex mt-4'>
                    <InsightCarousel />
                    <KeyActivities />
                </div>
            </div>
        </div>
    )
}

export default Insight