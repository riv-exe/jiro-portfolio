"use client"
import { useState } from "react"

export default function TosCard({ children, title }) {
    const [isCollapse, setIsCollapse] = useState(false);

    return (
        <div
            className="w-full max-w-250 bg-[#ead5f4] p-4 rounded-2xl text-gray-700 cursor-pointer dot-pattern hover:bg-[#dfc8e9]"
            onClick={() => setIsCollapse(!isCollapse)}
        >
            {/* Header */}
            <div className="flex justify-between items-center">
                <p>{title}</p>

                {/* Arrow */}
                <span
                    className={`transition-transform duration-300 ease-in-out font-extrabold ${
                        isCollapse ? "rotate-90" : "rotate-0"
                    }`}
                >
                    ﹥
                </span>
            </div>

            {/* Content */}
            <div
                className={`flex flex-col gap-5 text-xs md:text-base overflow-hidden transition-all duration-500 ease-in-out ${
                    isCollapse
                        ? "max-h-[500px] opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                }`}
            >
                {children}
            </div>
        </div>
    )
}