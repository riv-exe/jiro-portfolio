"use client"

import Image from "next/image"
import ViewPictureModal from "../modal/ViewPictureModal"
import { useState } from "react";

export default function SampleImage({src}) {
    const [imgSrc, setImgSrc] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => {setImgSrc(src); setIsOpen(true);}}>
                <Image
                    src={src}
                    width={400}
                    height={400}
                    alt="arts"
                    className="rounded-xl transition-all duration-300 ease-in-out md:brightness-90 hover:scale-105 hover:brightness-100"
                />
            </div>
            <ViewPictureModal imageSrc={imgSrc} isOpen={isOpen} onClose={setIsOpen}/>        
        </>
        
    )
}