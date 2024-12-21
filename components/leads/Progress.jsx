import React from 'react'
import Copilot from "@/public/icons/copilot.svg"
import { Clock3 } from 'lucide-react';

const Progress = ({ userName, progress, goal, metrics, lead, totalLead }) => {
    const colors = ["bg-green-500", "bg-blue-500", "bg-yellow-500", "bg-red-500"]
    const targetPercentage = (goal / totalLead) * 100;

    return (
        <div className='flex flex-col md:flex-row gap-3 flex-1 w-full'>
            <div className="flex items-start flex-wrap w-full md:w-1/2">
                <p className="text-lg text-[#3e3d3d] font-medium ">
                    <span className='w-6 h-6 inline-block'><Copilot className='h-6 w-6' /></span>
                    Hi {userName}, <span className="text-blue-600 inline-block">{progress}%</span> of goal achieved and the
                    rest can be achieved by focusing on 20 top leads.
                </p>
                <div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 flex flex-col gap-2 w-full md:w-1/2">
                <p className="text-sm flex text-[#707070] items-center gap-1">
                    <Clock3 className='w-4 h-4 text-[#707070]'/>
                    <span className="">1 month until Q4 ends</span>
                </p>
                <div className="text-sm relative h-2 w-full bg-gray-200 rounded-full flex" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                    {metrics.map((metric, index) => {
                        const segmentWidth = (metric.value / (totalLead)) * 100;

                        return (
                            <div
                                key={index}
                                className={`h-full ${colors[index % colors.length]} first-of-type:rounded-l-full max-w-full`}
                                style={{ width: `${segmentWidth}%` }}
                                title={`${metric.label}: $${metric.value}m`}
                            ></div>
                        );
                    })}
                    <div
                        className="absolute bottom-full pl-2 rounded-sm text-[#707070]"
                        style={{ left: `${targetPercentage}%` }}
                        title={`Target: $${goal}m`}
                    >
                        Target: <span className="font-bold">${goal} million</span>({progress}% achieved)
                    </div>
                    <div
                        className="absolute h-6 w-[2px] bg-black top-0 -translate-y-1/2 rounded-sm"
                        style={{ left: `${targetPercentage}%` }}
                        title={`Target: $${goal}m`}
                    ></div>

                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-2 wrap">
                    {metrics.map((metric, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <div className={`h-2 w-2 rounded-full ${colors[index % colors.length]}`}></div>
                            <span>
                                {metric.label} ${metric.value}m
                            </span>
                        </div>
                    ))}
                    <div className='flex items-center gap-2'>
                        <div className={`h-2 w-2 rounded-full bg-gray-200`}></div>
                        <span >
                            Lead ${75}m
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress