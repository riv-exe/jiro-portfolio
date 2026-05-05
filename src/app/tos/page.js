import TosCard from "../component/card/TosCard";
import Footer from "../component/layout/Footer";

export default function TermsOfService() {
    return (
        <div className="mt-16">
            <div className="p-10">
                <p className="text-center text-violet-800 text-4xl font-bold">TERMS OF SERVICE</p>
                <div className="flex items-center gap-3 w-full max-w-xs mx-auto mt-2 mb-10">
                    <div className="flex-1 h-px bg-violet-200" />
                    <span className="text-violet-300 text-lg">✦</span>
                    <div className="flex-1 h-px bg-violet-200" />
                </div>
            </div>

            <div className="flex flex-col gap-10 items-center justify-center px-3 pb-10 md:px-10">
                
                <TosCard title="01. Payment">
                    <p>Mode of Payment (MoD):</p>
                    <p>★ GCash/Maribank (FKA Seabank) — if you&apos;re a Filipino (or capable of paying via GCash or Maribank)</p>
                    <p>★ Wise/Remitly — if you&apos;re not a Filipino and can&apos;t pay via GCash</p>
                    <p>★ Strictly no Refund unless I haven&apos;t gave an update for a month</p>
                    <p>★ Client should pay depending on where they currently reside, not where they&apos;re from. (ex. A Filipino residing outside Philippines should pay in $, will be given a $ rates)</p>
                </TosCard>

                <TosCard title="02. TAT & Revisions">
                    <p>★ Turnaround Time (TAT) — 2~3 weeks, depending on complexity and workload. Client can refund if they don&apos;t get an update for 1 month.</p>
                    <p>★ Revisions — free during sketch process, no limit as long as it is a genuine and rational revision.</p>
                    <p>★ Revisions during rendering will cause additional fees.</p>
                </TosCard>

                <TosCard title="03. Additional Charges">
                    <p>★ NSFW — +10% (Mild), +20% (Highly Explicit)</p>
                    <p>★ Commercial Usage — please see on the main page button.</p>
                    <p>★ Watermark Removal — +50%</p>
                    <p>★ Rush Commission — +30–40% (1 week and below are considered rushed)</p>
                    <p>★ Complex Background — +800 PHP / $15 (maximum)</p>
                    <p>★ Plain to simple backgrounds — +200–400 PHP / $4–8</p>
                    <p>★ Complex Designs — Armor, metallic clothes, cyborg, robots, accessories, curly hair, etc. = additional fee</p>
                </TosCard>

                <TosCard title="04. Artwork">
                    <p>★ All artworks will include my watermark unless:</p>
                    <p>⊹ Client paid for watermark removal</p>
                    <p>⊹ Client paid for commercial usage</p>
                    <p>⊹ My watermark:</p>
                </TosCard>

                <TosCard title="05. Important Notes to Read">
                    <p>❀ I&apos;m allowed to post WIP&apos;s (work in progress) and finished artworks on any of my social media account or site.</p>
                    <p>❀ I&apos;m allowed to use commissioned artworks (commercial or not) as my samples for my portfolio/carrd site.</p>
                    <p>[Client&apos;s commissions will be posted with watermarks]</p>
                    
                    <p className="mt-4">❀ NSFW and Age Verification:</p>
                    <p>I only accept NSFW or adult-themed commissions from clients who are 18 years or older.</p>
                    <p>For highly explicit NSFW, I may require proof of age before starting the commission.</p>
                    <p>Acceptable proof includes a government-issued ID (name and DOB visible, others blurred) or verification through a trusted platform.</p>
                    <p>I will not release your ID information publicly.</p>
                    <p>By commissioning me, you confirm that you are at least 18 years old and legally allowed to request adult content.</p>
                    <p>Any falsification of age will result in cancellation and permanent blacklist.</p>
                </TosCard>

            </div>

            <Footer/>
        </div>
    );
}