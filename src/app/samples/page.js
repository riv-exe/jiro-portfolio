"use client"

import CommissionSamples from "../component/container/CommissionSamples";
import PersonalSamples   from "../component/container/PersonalSamples";
import { useState } from "react";

export default function Samples() {
    const [sample, setSample] = useState(1);

    return (
        <div className="pt-16 sm:pt-20 bg-[#62525f]">
            <div className="px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                    className={`border-2 border-violet-500 rounded-lg px-6 py-3 w-full sm:w-fit font-semibold text-white text-sm sm:text-base ${sample === 1 ? "bg-violet-500" : ""} duration-300 hover:scale-105`}
                    onClick={() => {setSample(1)}}
                >
                    Commission Arts 
                </button>

                <button
                    className={`border-2 border-violet-500 rounded-lg px-6 py-3 w-full sm:w-fit font-semibold text-white text-sm sm:text-base ${sample === 2 ? "bg-violet-500" : ""} duration-300 hover:scale-105`}
                    onClick={() => {setSample(2)}}
                >
                    Personal Arts 
                </button>
            </div>

            {sample === 1 && <CommissionSamples/>}
            {sample === 2 && <PersonalSamples/>}
        </div>
    )
}