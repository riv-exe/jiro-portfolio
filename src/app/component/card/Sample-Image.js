import Image from "next/image"

export default function SampleImage({src}) {
    return (
        <>
            <Image
                src={src}
                width={400}
                height={400}
                alt="arts"
                className="w-full object-cover max-h-[500px] rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
            />
        </>        
    )
}