import Image from "next/image"

export default function SampleImage({src}) {
    return (
        <>
            <Image
                src={src}
                width={400}
                height={400}
                alt="arts"
                className="rounded-xl transition-all duration-300 ease-in-out md:brightness-90 hover:scale-105 hover:brightness-100"
            />
        </>        
    )
}