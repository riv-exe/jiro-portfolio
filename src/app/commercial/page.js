"use client"
import TosCard from "../component/card/TosCard";
import Footer from "../component/layout/Footer";

export default function Commercial() {
    return (
        <div className="min-h-screen pt-8">

            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-in { animation: fadeSlideUp 0.55s ease both; }
            `}</style>

            {/* ── Page Header ── */}
            <div className="px-6 pt-12 pb-10 text-center animate-in">
                <p className="italic text-violet-500 text-lg mb-1">commission</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-violet-500 tracking-tight">COMMERCIAL INFO</h1>
                <div className="flex items-center gap-3 w-full max-w-xs mx-auto my-3">
                    <div className="flex-1 h-px bg-violet-200" />
                    <span className="text-violet-300 text-lg">✦</span>
                    <div className="flex-1 h-px bg-violet-200" />
                </div>
            </div>

            {/* ── Intro notice ── */}
            <div className="mx-4 md:mx-auto max-w-2xl mb-10 animate-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-[#ead5f4] dot-pattern rounded-2xl p-5 text-sm md:text-base text-violet-700 text-center leading-relaxed shadow-sm">
                    <strong>Base price</strong> is the starting price of the artwork — just for the artwork itself for <em>personal use only</em>.
                    <br />
                    <br />
                    Please inform me beforehand if you intend to use the commissioned artwork commercially. Unauthorized commercial use will result in additional charges or legal action.
                </div>
            </div>

            {/* ── Fee Cards ── */}
            <div className="flex flex-col gap-5 items-center justify-center px-4 pb-16 md:px-10">

                {/* Sharers special fee */}
                <div className="w-full max-w-2xl animate-in" style={{ animationDelay: "0.15s" }}>
                    <TosCard title="[New] Special Fee for Sharers">
                        <p>The artist must be provided with a list of the names or account usernames of all individuals sharing the artwork to ensure it is being used legally and appropriately.</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="bg-violet-500 text-white font-bold text-sm px-3 py-1 rounded-full">+70% of base price</span>
                            <span className="text-violet-600 text-xs italic">Limited to 15 people · NOT FOR PROFIT</span>
                        </div>
                    </TosCard>
                </div>

                {/* Small Merchandise */}
                <div className="w-full max-w-2xl animate-in" style={{ animationDelay: "0.2s" }}>
                    <TosCard title="1. Small Merchandise">
                        <p>e.g., stickers, keychains, or prints.</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="bg-violet-500 text-white font-bold text-sm px-3 py-1 rounded-full">+100% of base price</span>
                            <span className="text-violet-500 text-xs italic">For limited or small-scale sales</span>
                        </div>
                    </TosCard>
                </div>

                {/* Mass Production Merchandise */}
                <div className="w-full max-w-2xl animate-in" style={{ animationDelay: "0.25s" }}>
                    <TosCard title="2. Mass Production Merchandise">
                        <p>e.g., apparel, large shop sales.</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="bg-violet-500 text-white font-bold text-sm px-3 py-1 rounded-full">+150–200% of base price</span>
                            <span className="text-violet-500 text-xs italic">Negotiable · Depends on the production scale</span>
                        </div>
                    </TosCard>
                </div>

                {/* Social Media Advertising */}
                <div className="w-full max-w-2xl animate-in" style={{ animationDelay: "0.3s" }}>
                    <TosCard title="3. Social Media Advertising / Promotional Materials">
                        <p>Based on how heavily the artwork is featured.</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="bg-violet-500 text-white font-bold text-sm px-3 py-1 rounded-full">+150–200% of base price</span>
                        </div>
                    </TosCard>
                </div>

                {/* Book Covers / Album Covers */}
                <div className="w-full max-w-2xl animate-in" style={{ animationDelay: "0.35s" }}>
                    <TosCard title="4. Book Covers / Album Covers">
                        <p>May lower slightly depending on the author or artist&apos;s scale.</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="bg-violet-500 text-white font-bold text-sm px-3 py-1 rounded-full">+200% of base price</span>
                        </div>
                    </TosCard>
                </div>

                {/* Gaming/App Use */}
                <div className="w-full max-w-2xl animate-in" style={{ animationDelay: "0.4s" }}>
                    <TosCard title="5. Gaming / App Use — still illustrations only">
                        <p>Varies depending on company&apos;s size or exposure.</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="bg-violet-500 text-white font-bold text-sm px-3 py-1 rounded-full">+100–200% of base price</span>
                            <span className="text-violet-500 text-xs italic">Lower additional fees for small companies or freelance devs</span>
                        </div>
                    </TosCard>
                </div>

                {/* Usage Rights */}
                <div className="w-full max-w-2xl animate-in" style={{ animationDelay: "0.45s" }}>
                    <TosCard title="Usage Rights">
                        <p>I retain all rights to the commissioned artwork. This includes the right to:</p>
                        <div className="flex flex-col gap-1 mt-2">
                            <p>❖ Display the artwork in my portfolio</p>
                            <p>❖ Share it on social media</p>
                            <p>❖ Use it for promotional purposes (e.g., banners, previews, etc.)</p>
                        </div>
                        <p className="mt-3 italic text-xs text-violet-600">
                            If the client prefers the artwork to remain private or not be shared, a Non-Disclosure Agreement (NDA) or similar confidentiality agreement must be discussed and arranged beforehand (with an additional fee if necessary).
                        </p>
                    </TosCard>
                </div>

                {/* Prohibited Actions */}
                <div className="w-full max-w-2xl animate-in" style={{ animationDelay: "0.5s" }}>
                    <TosCard title="Prohibited Actions">
                        <p className="mb-2">Clients are not allowed to:</p>
                        <div className="flex flex-col gap-2">
                            <p>⊘ Claim the artwork as their own creation</p>
                            <p>⊘ Edit, alter, or modify the artwork without my permission</p>
                            <p>⊘ Mint or sell the artwork as NFTs</p>
                            <p>⊘ Use the artwork in AI training datasets or tools</p>
                        </div>
                    </TosCard>
                </div>

                {/* Note for small creators */}
                <div className="w-full max-w-2xl animate-in" style={{ animationDelay: "0.55s" }}>
                    <div className="bg-pink-100 border border-pink-200 rounded-2xl p-5 text-sm text-pink-700 leading-relaxed shadow-sm">
                        <p className="font-bold mb-2">Note for small creators:</p>
                        <p>If you&apos;re a small artist, author, game dev, or seller who&apos;s just starting out or running things solo — I totally understand the grind. I offer <strong>lower additional fees</strong> for you. I got u.</p>
                        <p className="mt-3 italic text-xs opacity-75">However, for larger companies or well-known creators/brands, higher commercial rates may apply and will be discussed on a case-by-case basis.</p>
                    </div>
                </div>

                {/* General note */}
                <div className="w-full max-w-2xl animate-in" style={{ animationDelay: "0.6s" }}>
                    <div className="text-center text-violet-600 text-sm italic mt-2">
                        ✦ Commercial fees are negotiable · Prices aren&apos;t set in stone — we talk first! ✦
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}