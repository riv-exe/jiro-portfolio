import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PriceCard({ title, src, height="h-72", href, className }) {
    const router = useRouter();



    function SeeMore(href) {
        router.push(href);
    }

    return (
        <a 
            className={`bg-[#e6c3eb] p-5 border border-violet-400 rounded-lg flex flex-col w-full max-w-80 mx-auto hover:scale-105 duration-200 ${className}`}
        >
            <div className="flex justify-center">
                <h3 className="font-bold text-lg mb-2 text-violet-500 font-extrabold md:text-white">{title}</h3>
            </div>

            {/* FIXED IMAGE HEIGHT */}
            <div className={`relative w-full overflow-hidden rounded-md ${height}`}>
                <Image
                    src={src}
                    alt="Commission Price"
                    fill
                    className="object-cover"
                />
            </div>
            <button className="bg-violet-400 rounded py-2 mt-5 hover:bg-violet-500 duration-200" onClick={() => {SeeMore(href);}}>
                See More
            </button>
        </a>
    );
}
