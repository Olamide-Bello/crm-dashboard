import { useState } from "react";
import Copilot from "@/public/icons/copilot.svg"
import Outlook from "@/public/icons/outlook.svg"
import { FileClock, Files, FileText, ListMinus, Sailboat, UserRound } from "lucide-react";

export function AgentModal({ onClose }) {
    const [isEmailAccessEnabled, setEmailAccessEnabled] = useState(false);
    const [email, setEmail] = useState("");

    const handleAllowAccess = () => {
        if (!isEmailAccessEnabled || !email) {
            alert("Please enable email access and provide a valid email.");
            return;
        }
        alert(`Email access granted for: ${email}`);
        onClose();
    };

    const handleBgClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose()
        }
    }

    return (
        <div onClick={handleBgClick} className="fixed z-40 inset-0 bg-black bg-opacity-20 flex items-center justify-center" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg p-6 w-full max-w-3xl shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                    title="Close Modal"
                    aria-label="Close Modal"
                >
                    &times;
                </button>
                <div className="flex items-center gap-2">
                    <Copilot className="w-6 h-6" title="Copilot" />
                    <p className="text-base font-bold">Agent skill</p>
                </div>
                <div className="bg-white shadow-md p-4 rounded-lg border my-4">
                    <p className="mb-4 text-gray-700 font-bold">
                        Check if on-hand inventory will allow all sales orders to ship without delay
                    </p>
                    <p className="text-gray-700 text-sm leading-6">
                        When <span className="font-medium text-blue-600 bg-blue-100 rounded-xl px-2 inline-flex items-center gap-1"><UserRound className="w-3 h-3"/> any vendor</span> sends an email with changes to{" "}
                        <span className="font-medium text-blue-600 bg-blue-100 rounded-xl px-2 inline-flex gap-1 items-center"><FileText className="w-3 h-3"/> confirmed purchase orders</span>, check if the resulting{" "}
                        <span className="font-medium text-blue-600 bg-blue-100 rounded-xl px-2 inline-flex gap-1 items-center"><ListMinus className="w-3 h-3"/> on-hand inventory</span> will allow{" "}
                        <span className="font-medium text-blue-600 bg-blue-100 rounded-xl px-2 inline-flex gap-1 items-center"><Files className="w-3 h-3"/> all sales orders</span> to{" "}
                        <span className="font-medium text-blue-600 bg-blue-100 rounded-xl px-2 inline-flex gap-1 items-center"><Sailboat className="w-3 h-3"/> ship without delay</span>. If so,{" "}
                        <span className="font-medium text-blue-600 bg-blue-100 rounded-xl px-2 inline-flex gap-1 items-center"><FileClock className="w-3 h-3"/> update the purchase order</span> to reflect the change.
                    </p>
                </div>
                <div className="flex flex-col mb-4">
                    <div className="flex items-center gap-2">
                        <Outlook className="w-6 h-6" title="Outlook" />
                        <p className="text-base font-bold">Enable email access</p>
                    </div>
                    <p>Allow agents to access email inboxes to read mails from known vendors</p>
                </div>
                <div className="flex gap-2 items-center mb-6">
                    <input
                        type="email"
                        placeholder="purchasing@contoso.com"
                        className="border border-gray-300 rounded-md p-2 flex-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={!isEmailAccessEnabled}
                        title="Email Address"
                        aria-label="Email Address"
                    />
                    <button
                        onClick={handleAllowAccess}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        title="Allow Access"
                        aria-label="Allow Access"
                    >
                        Allow access
                    </button>
                </div>
                <div className="flex justify-end gap-4 mt-12">
                    <button
                        onClick={handleAllowAccess}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        title="Activate"
                        aria-label="Activate"
                    >
                        Activate
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-transparent rounded-md border text-gray-700 hover:bg-gray-400"
                        title="Close"
                        aria-label="Close"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
