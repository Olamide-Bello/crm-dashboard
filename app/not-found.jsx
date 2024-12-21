import { Rabbit } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full" role="alert">
        <Rabbit className="w-56 h-56 text-[#002052]"/>
      <h1 className="text-4xl font-bold mb-4 text-[#002052]">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for either doesn't exist or is still under construction.
      </p>
      <Link
        href="/leads"
        className="px-4 py-2 bg-gradient-to-r from-[#325ac5] to-purple-500 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out text-white rounded-lg"
        aria-label="Go Back Home"
      >
        Go Back Home
      </Link>
    </div>
  );
}
