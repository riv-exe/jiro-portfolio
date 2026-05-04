"use client"

import CommissionSamples from "../component/container/CommissionSamples";
import PersonalSamples   from "../component/container/PersonalSamples";
import { useState } from "react";

export default function Samples() {
    const [sample, setSample] = useState(1);

    return (
        <div className="mt-16 bg-[#62525f]">
            <div className="p-4 flex gap-x-5">
                <button
                    className={`border-2 border-violet-500 rounded-lg p-3 w-fit font-semibold text-white text-sm ${sample === 1 ? "bg-violet-500" : ""} duration-300`}
                    onClick={() => {setSample(1)}}
                >
                    Commission Arts 
                </button>

                <button
                    className={`border-2 border-violet-500 rounded-lg p-3 w-fit font-semibold text-white text-sm ${sample === 2 ? "bg-violet-500" : ""} duration-300`}
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