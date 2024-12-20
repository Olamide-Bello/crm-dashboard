import { CalendarClock, MailPlus, Pencil, SendHorizonal, Sparkles, User2 } from "lucide-react";

export function Modal({ lead, onClose }) {

    const handleBgClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose()
        }
    }
    return (
        <div onClick={handleBgClick} className="fixed z-20 inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className=" w-[45%] shadow-lg bg-gradient-to-r from-blue-500 via-[#b1d6f0] to-purple-500 p-[2px] rounded-[18px]">
                <div className="rounded-2xl p-6 bg-white relative">
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-1'>
                            {lead.type === "mail" && <MailPlus className='w-4 h-4 text-[#3e3d3d]' />}
                            {lead.type === "meet" && <CalendarClock className='w-4 h-4 text-[#3e3d3d]' />}
                            <p className='text-base font-bold text-[#3e3d3d]'>{lead.headline}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-2xl text-gray-500 hover:text-gray-700 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
                            title="Exit modal"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="flex items-center gap-4 mb-3 border shadow-lg px-3 py-2 rounded-lg mt-3">
                        <div className="w-10 h-10 p-2 bg-gray-200 rounded-full">
                            <User2 className='w-full h-full text-gray-600' />
                        </div>
                        <div>
                            <h2 className="text-base font-bold">{lead.name}</h2>
                            <p className="text-sm text-gray-500">{lead.role}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 shadow-lg p-3 rounded-lg mt-3">
                        <div className="p-2 bg-gradient-to-r from-[#b1d6f020] via-[#b1d6f050] to-[#b1d6f020] w-full rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-2 flex-1 w-[55%] relative">
                                <Sparkles className="text-[#9434a4] w-4 h-4" fill="#673ab7" />
                                <p className="truncate w-[80%]" title={lead.interest}>
                                {lead.interest}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className='flex items-center gap-2 border p-2 h-8 rounded bg-white hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out'>
                                    <Pencil className='w-4 h-4 text-[#707070]' />
                                    <span className='font-medium text-sm text-[#707070]'>Edit</span>
                                </button>
                                <button className='flex items-center gap-2  px-2 py-1 h-8 rounded bg-gradient-to-r from-[#325ac5] to-purple-500 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out'>
                                    <SendHorizonal className='w-4 h-4 text-white' />
                                    <span className='font-medium text-sm text-white'>Approve and send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 shadow-lg p-2 m-3 rounded-lg bg-white">
                        <div className="p-3 text-sm rounded-lg bg-gradient-to-r from-[#b1d6f020] via-[#b1d6f050] to-[#b1d6f020]">
                            <p className="mb-2">
                                <strong>Why I picked this lead:</strong>
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                {lead.reasons.map((reason, index) => (
                                    <li key={index}>{reason}</li>
                                ))}
                            </ul>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="px-3 py-2 bg-white rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">Potential Deal Value</p>
                                    <p className="text-lg font-bold">${lead.potentialValue}</p>
                                </div>
                                <div className="px-3 py-2 bg-white rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">Intent</p>
                                    <p className="text-lg font-bold">{lead.intent}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-lg mx-3">
                        <p className="text-sm font-bold text-[#3e3d3d]">About {lead.name}</p>
                        <p className="text-sm text-gray-600">{lead.about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
