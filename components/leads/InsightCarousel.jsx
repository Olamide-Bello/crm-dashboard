'use client'
import React, { useState } from 'react';
import { leadHighlight } from '@/data'; // Assuming this is an array of leads
import InsightLeadCard from '../ui/InsightLeadCard'; // Component to display each lead
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const InsightCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='flex flex-col w-[65%] pr-4 border-r'>
            <p className="text-gray-600 font-medium mb-4">
                Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
            </p>

            <div className='flex gap-4 overflow-hidden w-[100%]'>
                {leadHighlight.map((lead, index) => (
                    <InsightLeadCard key={index} lead={lead} />
                ))}
            </div>

        </div>
    );
};

export default InsightCarousel;
