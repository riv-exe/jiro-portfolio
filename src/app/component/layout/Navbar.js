"use client"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const links = [
        { label: 'Home', href: '/' },
        { label: 'Samples', href: '/samples' },
        { label: 'Price', href: '/price' },
        { label: 'Commercial Info', href: '/commercial' },
    ];

    const isActive = (href) => pathname === href;

    const [isTop, setIsTop] = useState(true);

    const toggleMobile = () => setMobileOpen(!mobileOpen);

    const closeMobile = () => setMobileOpen(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`fixed text-white h-15 w-full flex items-center justify-between px-4 sm:px-6 md:px-10 z-50 ${isTop ? "bg-black/30" : "bg-[#62525f]/90"} duration-300 md:h-16`}>
                <p className="font-semibold text-lg md:text-xl cursor-pointer">JIRO</p>
                <div className="flex items-center gap-4 md:gap-10">
                    {/* Desktop links */}
                    <div className="hidden md:flex gap-6 lg:gap-10">
                        {links.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`relative text-white hover:text-gray-200 pb-2 block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-400 after:origin-left after:w-0 hover:after:w-full font-medium ${active ? 'after:w-full text-white font-semibold' : ''}`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>
                    {/* Mobile hamburger */}
                    <button 
                        className="md:hidden p-1 flex flex-col justify-center items-center w-8 h-8"
                        onClick={toggleMobile}
                    >
                        <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5 -translate-x-0.5' : '-translate-y-1.5'}`} />
                        <span className={`block w-6 h-0.5 bg-white rounded my-0.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5 translate-x-0.5' : 'translate-y-1.5'}`} />
                    </button>
                </div>
            </div>
            
            {/* Mobile menu */}
            {mobileOpen && (
                <div className={`fixed inset-0 z-40 md:hidden ${isTop ? "bg-black/30" : "bg-[#62525f]"} backdrop-blur-sm flex flex-col justify-center items-center gap-8 py-12 px-6`}>
                    {links.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`relative text-white text-xl font-medium pb-4 block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:bg-white after:transition-all after:duration-400 after:origin-center after:w-0 hover:after:w-24 ${active ? 'after:w-24' : ''}`}
                                onClick={closeMobile}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                    <button 
                        className="absolute top-4 right-4 p-2 text-white"
                        onClick={toggleMobile}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}
