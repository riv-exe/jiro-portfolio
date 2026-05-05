import Image from "next/image";
import PriceCard from "../component/card/PriceCard";

export default function Price() {
    return (
        <div>
            <div className="hidden md:flex w-full h-screen flex items-center justify-center px-4">
                
                <div className="w-full max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
                        <PriceCard src="/layout/chibi-price.png" title="Chibi Price" href="#chibi"/>
                        <PriceCard src="/layout/body-price.png" title="Body Price" height="h-80" href="#body"/>
                        <PriceCard src="/layout/emotes-price.png" title="Emotes Price" href="#emotes"/>
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col items-center gap-25 py-10 pt-20">
                <Image
                    src="/layout/chibi-price.png"
                    width={400}
                    height={400}
                    alt="Chibi Price"
                    className="rounded-2xl"
                    id="chibi"
                />
                <Image
                    src="/layout/body-price.png"
                    width={400}
                    height={400}
                    alt="Body Price"
                    className="bg-violet-300 rounded-2xl"
                    id="body"
                />
                <Image
                    src="/layout/emotes-price.png"
                    width={400}
                    height={400}
                    alt="Emotes Price"
                    id="emotes"
                />
            </div>
        </div>
    );
}