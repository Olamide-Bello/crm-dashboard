'use client'
import React, { useState } from 'react';
import { leadHighlight } from '@/data';
import InsightLeadCard from '../ui/InsightLeadCard'; 
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
        <div className='flex flex-col md:w-[65%] w-full md:pr-4 md:border-r'>
            <p className="text-gray-600 font-medium mb-4">
                Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
            </p>

            <div className='flex md:flex-row flex-col gap-4 w-[100%]'>
                {leadHighlight.map((lead, index) => (
                    <InsightLeadCard key={index} lead={lead} />
                ))}
            </div>

        </div>
    );
};

export default InsightCarousel;
