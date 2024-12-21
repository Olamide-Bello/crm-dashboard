import { CalendarClock, CircleCheckBig, DiamondPlus, MailPlus, Medal, Pencil, SendHorizonal, Sparkles, ThumbsDown, ThumbsUp, User2 } from "lucide-react";
import { useState } from "react";

export function Modal({ lead, onClose }) {
    const [feedback, setFeedback] = useState(null);

    const handleBgClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose()
        }
    }

    const handleFeedback = (type) => {
        setFeedback(type);
    }

    return (
        <div onClick={handleBgClick} className="fixed z-30 inset-0 bg-black bg-opacity-20 flex items-center justify-center overflow-auto" role="dialog" aria-modal="true">
            <div className="w-full !max-w-3xl shadow-lg bg-gradient-to-r from-blue-500 via-[#b1d6f0] to-purple-500 p-[2px] rounded-[18px]">
                <div className="rounded-2xl p-6 bg-white relative max-h-[90vh] md:max-h-screen overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-1'>
                            {lead.type === "mail" && <MailPlus className='w-4 h-4 text-[#3e3d3d]' title="Mail" />}
                            {lead.type === "meet" && <CalendarClock className='w-4 h-4 text-[#3e3d3d]' title="Meeting" />}
                            <p className='text-base font-bold text-[#3e3d3d]'>{lead.headline}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-2xl text-gray-500 hover:text-gray-700 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
                            title="Exit modal"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="flex items-center gap-4 mb-3 border shadow-lg px-3 py-2 rounded-lg mt-3">
                        <div className="w-10 h-10 p-2 bg-gray-200 rounded-full" title="User">
                            <User2 className='w-full h-full text-gray-600' />
                        </div>
                        <div>
                            <h2 className="text-base font-bold">{lead.name}</h2>
                            <p className="text-sm text-gray-500">{lead.role}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 shadow-lg p-3 rounded-lg mt-3">
                        <div className="p-2 bg-gradient-to-r from-[#b1d6f020] via-[#b1d6f050] to-[#b1d6f020] w-full rounded-lg flex md:items-center md:flex-row flex-col justify-between">
                            <div className="flex md:items-center items-start gap-2 flex-1 md:w-[55%] relative">
                                <Sparkles className="text-[#9434a4] md:w-4 md:h-4 w-8 h-8" fill="#673ab7" title="Interest" />
                                <p className="md:truncate md:w-[80%]" title={lead.interest}>
                                    {lead.interest}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className='flex items-center justify-center gap-2 border p-2 h-8 rounded bg-white hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out w-1/2 md:w-auto' title="Edit" aria-label="Edit">
                                    <Pencil className='w-4 h-4 text-[#707070]' />
                                    <span className='font-medium text-sm text-[#707070]'>Edit</span>
                                </button>
                                <button className='flex items-center justify-center gap-2  px-2 py-1 h-8 rounded bg-gradient-to-r from-[#325ac5] to-purple-500 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out w-1/2 md:w-auto' title="Approve and send" aria-label="Approve and send">
                                    <SendHorizonal className='w-4 h-4 text-white' />
                                    <span className='font-medium text-sm text-white truncate'>Approve and send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 shadow-lg p-2 md:m-3 my-3 rounded-lg bg-white">
                        <div className="p-3 text-sm rounded-lg bg-gradient-to-r from-[#b1d6f020] via-[#b1d6f050] to-[#b1d6f020]">
                            <p className="mb-2">
                                <strong>Why I picked this lead:</strong>
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                {lead?.reasons?.map((reason, index) => (
                                    <li key={index}>{reason}</li>
                                ))}
                            </ul>
                            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                                <div className="px-3 py-2 bg-white rounded-lg border shadow-md flex items-center gap-2" title="Decision maker">
                                    <CircleCheckBig className="w-12 h-12 text-[#9434a4]" fill="#673ab730" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Decision maker</p>
                                        <p className="text-lg font-bold text-[#9434a4]">Yes</p>
                                    </div>
                                </div>
                                <div className="px-3 py-2 bg-white rounded-lg border shadow-md flex items-center gap-2" title="Potential Deal Value">
                                    <Medal className="w-12 h-12 text-[#9434a4]" fill="#673ab730" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Potential Deal Value</p>
                                        <p className="text-lg font-bold text-[#9434a4]">${lead.potentialValue}</p>
                                    </div>
                                </div>
                                <div className="px-3 py-2 bg-white rounded-lg border shadow-md flex items-center gap-2" title="Intent">
                                    <DiamondPlus className="w-12 h-12 text-[#9434a4]" fill="#673ab730" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Intent</p>
                                        <p className="text-lg font-bold text-[#9434a4]">{lead.intent}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-2 mt-4">
                                <p className="px-1 bg-gray-100 rounded-md border">AI-generated content may be incorrect</p>
                                <button onClick={() => handleFeedback("thumbs up")} className={`p-1 rounded-full ${feedback === "thumbs up" ? "bg-green-200" : ""}`} title="Thumbs Up" aria-label="Thumbs Up">
                                    <ThumbsUp className="w-4 h-4 text-green-600" />
                                </button>
                                <button onClick={() => handleFeedback("thumbs down")} className={`p-1 rounded-full ${feedback === "thumbs down" ? "bg-red-200" : ""}`} title="Thumbs Down" aria-label="Thumbs Down">
                                    <ThumbsDown className="w-4 h-4 text-red-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-lg md:mx-3">
                        <p className="text-sm font-bold text-[#3e3d3d]">About {lead.name}</p>
                        <p className="text-sm text-gray-600">{lead.about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
