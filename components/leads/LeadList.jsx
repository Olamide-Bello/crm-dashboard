// LeadsList Component with Tailwind CSS
import { useState } from "react";
import { leads } from "@/data";
import { Modal } from "../ui/LeadModal";
import Copilot from "@/public/icons/copilot.svg"
import { ChevronDown, Grip, List, Rabbit, User2 } from "lucide-react";

export default function LeadsList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLead, setSelectedLead] = useState(null);
    const [viewMode, setViewMode] = useState("list");

    const filteredLeads = leads.filter(
        (lead) =>
            lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.topic.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const hasResults = filteredLeads.length > 0;

    return (
        <div className="p-6 bg-white mt-4">
            <div className="flex md:items-center md:flex-row flex-col gap-4 md:justify-between mb-6">
                <div className="relative w-full md:w-80 bg-gradient-to-r from-blue-500 via-[#b1d6f0] to-purple-500 p-[1px] rounded-[5px]">
                    <input
                        type="text"
                        placeholder="Sort, filter and search with copilot"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-2 py-1 border-none focus:outline-none rounded w-full text-sm text-[#707070]"
                        aria-label="Search leads"
                    />
                    <Copilot className="w-4 h-4 absolute top-1/2 right-4 -translate-y-[50%]" />
                </div>
                <div className="flex items-center gap-2">
                    <button title="Show list view" aria-label="Show list view" onClick={() => setViewMode("list")}>
                        <List className={`w-6 h-6 ${viewMode === "list" ? "text-blue-600" : "text-gray-600 cursor-pointer hover:text-blue-300"}`} />
                    </button>
                    <button title="Show grid view" aria-label="Show grid view" onClick={() => setViewMode("grid")}>
                        <Grip className={`w-6 h-6 ${viewMode === "grid" ? "text-blue-600" : "text-gray-600 cursor-pointer hover:text-blue-300"}`} />
                    </button>
                </div>
            </div>
            {hasResults ? (
                <>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${viewMode === "list" ? "hidden" : "block"}`}>
                        {filteredLeads.map((lead) => (
                            <div
                                key={lead.id}
                                className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100 cursor-pointer"
                                onClick={() => setSelectedLead(lead)}
                                tabIndex="0"
                                role="button"
                                aria-pressed="false"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className='w-8 h-8 p-1 bg-white rounded-full border' title="User">
                                        <User2 className='w-full h-full text-gray-600' />
                                    </div>
                                    <h2 className="font-bold text-lg">{lead.name}</h2>
                                </div>
                                <p className="text-gray-700 mb-1">{lead.topic}</p>
                                <p className="text-gray-500 text-sm">{lead.createdOn}</p>
                            </div>
                        ))}
                    </div>
                    <div className={`w-full overflow-x-auto ${viewMode === "grid" ? "hidden" : "block"}`}>
                        <table className="table-auto min-w-[768px] border-collapse border-none">
                            <thead>
                                <tr className="border-b border-gray-300 text-left">
                                    <th className="w-[25%] p-2"><span className="flex items-center gap-2">Name <ChevronDown className='w-4 h-4' /></span></th>
                                    <th className="w-[25%] p-2"><span className="flex items-center gap-2">Topic <ChevronDown className='w-4 h-4' /></span></th>
                                    <th className="w-[25%] p-2"><span className="flex items-center gap-2">Status Reason <ChevronDown className='w-4 h-4' /></span></th>
                                    <th className="w-[25%] p-2"><span className="flex items-center gap-2">Created On <ChevronDown className='w-4 h-4' /></span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredLeads.map((lead) => (
                                    <tr
                                        key={lead.id}
                                        className="hover:bg-gray-200 cursor-pointer border-b border-gray-300 text-[#707070] text-sm"
                                        onClick={() => setSelectedLead(lead)}
                                        tabIndex="0"
                                        role="button"
                                        aria-pressed="false"
                                    >
                                        <td className="w-[25%] p-2 truncate text-blue-600">{lead.name}</td>
                                        <td className="w-[25%] p-2"><div className="truncate w-full">{lead.topic}</div></td>
                                        <td className="w-[25%] p-2">New</td>
                                        <td className="w-[25%] p-2">{lead.createdOn}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className="text-gray-500 text-center mt-6 flex flex-col items-center justify-center min-h-32">
                    <Rabbit className="w-16 h-16" />
                    No leads match your search criteria.
                </div>
            )}
            {selectedLead && (
                <Modal lead={selectedLead} onClose={() => setSelectedLead(null)} />
            )}
        </div>
    );
}
