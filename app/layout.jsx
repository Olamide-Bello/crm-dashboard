"use client"
import Sidebar from "@/layout/Sidebar";
import Navbar from "../layout/Navbar";
import MobileHeader from "../layout/MobileHeader";
import "./globals.css";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useClickOutside";

export default function RootLayout({ children }) {
  const [showLabels, setShowLabels] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const triggerRef = useRef(null)
  const dropdownRef = useRef(null)


  const handleShowLabel = () => {
    setShowLabels(prev => (!prev))
  }

  const handleSidebarToggle = () => {
    setIsSidebarOpen(prev => (!prev))
  }
  useOnClickOutside(dropdownRef, triggerRef, () => setIsSidebarOpen(false))

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </head>
      <body className="flex flex-col h-screen overflow-auto">
        <Navbar handleSidebarToggle={handleSidebarToggle} ref={triggerRef} />
        <MobileHeader />
        <div className="flex-1 relative bg-[#dfe2e8]">
          <Sidebar showLabels={showLabels} handleShowLabel={handleShowLabel} isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} ref={dropdownRef} />
          <div className={`${showLabels ? "ml-0 md:ml-[15%]" : "ml-0 md:ml-[5%]"} bg-[#e7e9e7] h-full`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
