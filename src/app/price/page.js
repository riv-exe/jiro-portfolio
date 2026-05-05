"use client"

import Image from "next/image";
import PriceCard from "../component/card/PriceCard";
import { useState } from "react";
import ViewPictureModal from "../component/modal/ViewPictureModal";
import Footer from "../component/layout/Footer";

const priceItems = {
    body: [
        { label: "Headshot",  php: "₱500",   usd: "$20" },
        { label: "Bust Up",   php: "₱800",   usd: "$25" },
        { label: "Waist Up",  php: "₱1,000", usd: "$30" },
        { label: "Thigh Up",  php: "₱1,500", usd: "$40" },
        { label: "Knee Up",   php: "₱2,000", usd: "$50" },
        { label: "Full Body", php: "₱3,000", usd: "$70" },
    ],
    chibi: [
        { label: "Full", php: "₱400", usd: "$15" },
        { label: "Half", php: "₱300", usd: "$10" },
        { label: "Icon", php: "₱200", usd: "$5"  },
    ],
};

function PriceRow({ label, php, usd, index }) {
    return (
        <div
            className="flex items-center justify-between border-b border-violet-200/60 py-2 last:border-0"
            style={{ animationDelay: `${index * 60}ms` }}
        >
            <span className="font-semibold text-violet-700 tracking-wide text-sm sm:text-base">{label}</span>
            <div className="flex items-center gap-2 sm:gap-4">
                <span className="bg-violet-100 text-violet-700 font-bold text-xs sm:text-sm px-2 py-0.5 rounded-full">{php}</span>
                <span className="text-violet-400 text-xs">·</span>
                <span className="bg-pink-100 text-pink-600 font-bold text-xs sm:text-sm px-2 py-0.5 rounded-full">{usd}</span>
            </div>
        </div>
    );
}

function SectionDivider() {
    return (
        <div className="flex items-center gap-3 w-full max-w-xs my-2">
            <div className="flex-1 h-px bg-violet-200" />
            <span className="text-violet-300 text-lg">✦</span>
            <div className="flex-1 h-px bg-violet-200" />
        </div>
    );
}

export default function Price() {
    const [imgSrc, setImgSrc] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (src) => {
        setImgSrc(src);
        setIsOpen(true);
    };

    return (
        <div className="min-h-screen pt-8">

            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-in { animation: fadeSlideUp 0.55s ease both; }

                .price-card-hover {
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }
                .price-card-hover:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 40px rgba(139,92,246,0.18);
                }

                .view-btn { transition: background 0.2s ease, transform 0.15s ease; }
                .view-btn:hover { transform: scale(1.05); }
            `}</style>

            {/* ── Desktop nav cards ── */}
            <div className="hidden md:flex w-full h-screen items-center justify-center px-4">
                <div className="w-full max-w-5xl">
                    <div className="text-center mb-14 animate-in">
                        <p className="italic text-violet-400 text-lg mb-1">commission</p>
                        <h1 className="text-5xl font-bold text-violet-800 tracking-tight">PRICE GUIDE</h1>
                        <div className="flex items-center gap-3 w-full max-w-xs mx-auto my-2">
                            <div className="flex-1 h-px bg-violet-200" />
                            <span className="text-violet-300 text-lg">✦</span>
                            <div className="flex-1 h-px bg-violet-200" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8 place-items-center animate-in" style={{ animationDelay: "0.15s" }}>
                        <PriceCard src="/layout/chibi-price.png" title="Chibi Price" href="#chibi" />
                        <PriceCard src="/layout/body-price.png" title="Body Price" height="h-80" href="#body" />
                        <PriceCard src="/layout/emotes-price.png" title="Emotes Price" href="#emotes" />
                    </div>
                </div>
            </div>

            {/* ── Mobile page heading ── */}
            <div className="md:hidden text-center pt-10 pb-2 px-6 animate-in">
                <p className="italic text-violet-400 text-base mb-0.5">commission</p>
                <h1 className="text-4xl font-bold text-violet-800">PRICE GUIDE</h1>
                <div className="flex items-center gap-3 w-full max-w-xs mx-auto my-2">
                    <div className="flex-1 h-px bg-violet-200" />
                    <span className="text-violet-300 text-lg">✦</span>
                    <div className="flex-1 h-px bg-violet-200" />
                </div>
            </div>

            {/* ── Sections ── */}
            <div className="flex flex-col items-center gap-0 md:gap-20 pb-16 md:pt-20">

                {/* ── BODY PRICES ── */}
                <div id="body" className="w-full">

                    {/* Mobile */}
                    <div
                        className="md:hidden mx-4 my-8 rounded-2xl overflow-hidden border border-violet-200 shadow-lg price-card-hover animate-in cursor-pointer"
                        style={{ animationDelay: "0.1s" }}
                        onClick={() => openModal("/layout/body-price.png")}
                    >
                        <div className="relative bg-[#ead5f5] dot-pattern">
                            <Image
                                src="/layout/transgender.png"
                                alt="Body Price"
                                width={600}
                                height={600}
                                className="w-full h-44 object-cover mix-blend-multiply"
                            />
                            <div className="absolute top-4 left-0 bg-violet-500 text-white italic text-sm font-bold py-1 pl-4 pr-5 rounded-r-full shadow-md">
                                Semi-realistic Art
                            </div>
                            <button
                                className="view-btn absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-violet-600 border border-violet-300 rounded-full py-1 px-4 font-semibold text-xs shadow-sm"
                                onClick={(e) => { e.stopPropagation(); openModal("/layout/body-price.png"); }}
                            >
                                View Proportions ↗
                            </button>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm px-5 pt-4 pb-5">
                            <h2 className="text-2xl font-bold text-violet-800 mb-3">PRICE</h2>
                            <div className="flex flex-col">
                                {priceItems.body.map((item, i) => (
                                    <PriceRow key={item.label} {...item} index={i} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop */}
                    <div
                        className="hidden md:flex cursor-pointer animate-in price-card-hover bg-[#ead5f5] border-y border-violet-200 dot-pattern overflow-hidden"
                        style={{ animationDelay: "0.2s" }}
                        onClick={() => openModal("/layout/body-price.png")}
                    >
                        {/* Text side */}
                        <div className="flex flex-col justify-center gap-3 pl-14 py-12 flex-1 min-w-0">
                            <div className="mb-1">
                                <p className="italic text-violet-400 text-lg">commission</p>
                                <h2 className="text-5xl lg:text-6xl font-bold text-violet-800 leading-tight">PRICE</h2>
                            </div>
                            <SectionDivider />
                            <div className="flex flex-col gap-1 mt-1 max-w-sm">
                                {priceItems.body.map((item, i) => (
                                    <PriceRow key={item.label} {...item} index={i} />
                                ))}
                            </div>
                            <button
                                className="view-btn mt-3 w-fit bg-violet-500 hover:bg-violet-600 text-white rounded-full py-2 px-6 font-semibold text-sm shadow-md"
                                onClick={(e) => { e.stopPropagation(); openModal("/layout/body-price.png"); }}
                            >
                                View Proportion ↗
                            </button>
                        </div>
                        {/* Image side */}
                        <div className="flex-shrink-0 flex items-end justify-end">
                            <Image
                                src="/layout/transgender.png"
                                alt="Body Price"
                                width={800}
                                height={800}
                                className="mix-blend-multiply"
                            />
                        </div>
                    </div>
                </div>

                {/* ── CHIBI PRICES ── */}
                <div id="chibi" className="w-full">

                    {/* Mobile */}
                    <div
                        className="md:hidden mx-4 my-8 rounded-2xl overflow-hidden border border-violet-200 shadow-lg price-card-hover animate-in cursor-pointer"
                        style={{ animationDelay: "0.2s" }}
                        onClick={() => openModal("/layout/chibi-price.png")}
                    >
                        <div className="relative bg-[#f5d5f0] dot-pattern">
                            <Image
                                src="/layout/chibi-1.png"
                                alt="Chibi Price"
                                width={300}
                                height={300}
                                className="w-full h-44 object-contain py-3"
                            />
                            <div className="absolute top-4 left-0 bg-pink-400 text-white italic text-sm font-bold py-1 pl-4 pr-5 rounded-r-full shadow-md">
                                Chibi Art
                            </div>
                            <button
                                className="view-btn absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-pink-500 border border-pink-200 rounded-full py-1 px-4 font-semibold text-xs shadow-sm"
                                onClick={(e) => { e.stopPropagation(); openModal("/layout/chibi-price.png"); }}
                            >
                                View Proportions ↗
                            </button>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm px-5 pt-4 pb-5">
                            <h2 className="text-2xl font-bold text-violet-800 mb-3">CHIBI PRICE</h2>
                            <div className="flex flex-col">
                                {priceItems.chibi.map((item, i) => (
                                    <PriceRow key={item.label} {...item} index={i} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop — mirrored: image left, text right */}
                    <div
                        className="hidden md:flex cursor-pointer animate-in price-card-hover bg-[#f5d5f0] border-y border-pink-200 dot-pattern overflow-hidden"
                        style={{ animationDelay: "0.3s" }}
                        onClick={() => openModal("/layout/chibi-price.png")}
                    >
                        {/* Image side */}
                        <div className="flex-shrink-0 flex items-end justify-start">
                            <Image
                                src="/layout/chibi-1.png"
                                alt="Chibi Price"
                                width={380}
                                height={380}
                                className="pl-10 pt-6 pb-4"
                            />
                        </div>
                        {/* Text side */}
                        <div className="flex flex-col justify-center gap-3 pl-15 py-12 flex-1 min-w-0">
                            <div className="mb-1">
                                <p className="italic text-pink-400 text-lg">commission</p>
                                <h2 className="text-5xl lg:text-6xl font-bold text-violet-800 leading-tight">CHIBI PRICE</h2>
                            </div>
                            <SectionDivider />
                            <div className="flex flex-col gap-1 mt-1 max-w-sm">
                                {priceItems.chibi.map((item, i) => (
                                    <PriceRow key={item.label} {...item} index={i} />
                                ))}
                            </div>
                            <button
                                className="view-btn mt-3 w-fit bg-pink-400 hover:bg-pink-500 text-white rounded-full py-2 px-6 font-semibold text-sm shadow-md"
                                onClick={(e) => { e.stopPropagation(); openModal("/layout/chibi-price.png"); }}
                            >
                                View Proportion ↗
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
            <ViewPictureModal imageSrc={imgSrc} isOpen={isOpen} onClose={setIsOpen} />
        </div>
    );
}