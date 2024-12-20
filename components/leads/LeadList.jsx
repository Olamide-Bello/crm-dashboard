// LeadsList Component with Tailwind CSS
import { useState } from "react";
import { leads } from "@/data";
import { Modal } from "../ui/LeadModal";
import Copilot from "@/public/icons/copilot.svg"
import { ChevronDown } from "lucide-react";

export default function LeadsList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLead, setSelectedLead] = useState(null);

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white">
      <div className="relative mb-6 w-80 bg-gradient-to-r from-blue-500 via-[#b1d6f0] to-purple-500 p-[1px] rounded-[5px]">
        <input
          type="text"
          placeholder="Sort, filter and search with copilot"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-2 py-1 border-none focus:outline-none rounded w-full text-sm text-[#707070]"
        />
        <Copilot className="w-4 h-4 absolute top-1/2 right-4 -translate-y-[50%]"/>
      </div>
      <table className="table-auto w-full border-collapse border-none">
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
            >
              <td className="w-[25%] p-2 truncate text-blue-600">{lead.name}</td>
              <td className="w-[25%] p-2 truncate">{lead.topic}</td>
              <td className="w-[25%] p-2">New</td>
              <td className="w-[25%] p-2">{lead.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedLead && (
        <Modal lead={selectedLead} onClose={() => setSelectedLead(null)} />
      )}
    </div>
  );
}
