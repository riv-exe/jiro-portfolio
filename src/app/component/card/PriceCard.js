import Image from "next/image";

export default function PriceCard({ title, src, height="h-72", href }) {
    return (
        <a href={href} className="bg-violet-300 p-5 border border-violet-400 rounded-lg flex flex-col w-full max-w-80 mx-auto hover:scale-105 duration-200">

            <div className="flex justify-center">
                <h3 className="font-bold text-lg mb-2">{title}</h3>
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

        </a>
    );
}
