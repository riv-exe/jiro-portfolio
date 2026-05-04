"use client"

import Image from "next/image";
import Links from "./component/card/Link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* Banner */}
      <div>
        <Image
          src="/arts/purpport.png"
          width={1920}
          height={600}
          alt="banner"
          
          className="h-screen object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        <div className="absolute inset-0 flex items-center">
          <div className="flex flex-col w-150 p-20 gap-3">
            <p className="text-6xl font-extrabold text-violet-500">JIRO</p>
            <p className="text-white">
              Hi! I&apos;m Jiro, a digital artist focused on character art and soft illustrations. 
              I take commissions and love bringing ideas to life! ࣪ ִֶָ☾.
            </p>
            <button
              className="bg-violet-500 rounded-2xl p-4 w-fit font-semibold mt-10 text-white"
              onClick={() => {router.push("/samples")}}
            >
              View Samples
            </button>
          </div>
        </div>
      </div>
      
      {/* Section 1 */}
      <div className="bg-[#be9dc3] flex flex-col text-center items-center justify-center px-50 gap-10 py-10">
        <p className="text-6xl  font-semibold">About Jiro</p>
        <p>
          Hi! I&apos;m Jiro, a digital artist who loves creating expressive and aesthetic illustrations.
          I mainly focus on character art, fanart, and custom commissions with soft, detailed visuals.
          Feel free to check out my work and commission info—I&apos;d love to bring your ideas to life! ࣪ ִֶָ☾.
        </p>
        <button className="bg-violet-500 rounded-lg p-4 w-fit font-semibold text-white">
          Commission Now
        </button>
      </div>
    </div>
  );
}

