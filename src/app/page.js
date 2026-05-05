"use client"

import Image from "next/image";

import { useRouter } from "next/navigation";
import Links from "./component/card/Link";
import Footer from "./component/layout/Footer";
import PriceCard from "./component/card/PriceCard";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* Banner */}

      <div className="relative">
        {/* Mobile Banner */}
        <Image
          src="/arts/purpport.png"
          width={1080}
          height={600}
          alt="mobile banner"
          className="h-[50vh] object-cover w-screen md:hidden"
        />
        {/* Desktop Banner */}
        <Image
          src="/arts/purpport.png"
          width={1920}
          height={600}
          alt="banner"
          className="hidden md:block h-screen object-cover w-screen"
        />
        <div className="absolute inset-0 bg-black/20 md:hidden"></div>

        <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-20">

          <div className="flex flex-col max-w-md sm:max-w-lg md:max-w-4xl gap-4 sm:gap-6">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-violet-500">JIRO</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-md sm:max-w-lg">
              Hi! I&apos;m Jiro, a digital artist focused on character art and soft illustrations. 
              I take commissions and love bringing ideas to life! ࣪ ִֶָ☾.
            </p>
            <button
              className="bg-violet-500 hover:bg-violet-600 rounded-2xl px-6 py-3 sm:px-8 sm:py-4 w-fit font-semibold text-white text-sm sm:text-base transition-colors shadow-lg hover:shadow-xl"
              onClick={() => {router.push("/samples")}}
            >
              View Samples
            </button>
          </div>
        </div>
      </div>
      <Links/>
      
      {/* Section 1 */}
      <div className="flex flex-col text-center items-center justify-center px-8 sm:px-16 md:px-20 lg:px-50 py-12 sm:py-16 md:py-20 gap-6 sm:gap-10">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-violet-500">About Jiro</p>
        <p className="px-4 sm:px-8 max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Hi! I&apos;m Jiro, a digital artist who loves creating expressive and aesthetic illustrations.
          I mainly focus on character art, fanart, and custom commissions with soft, detailed visuals.
          Feel free to check out my work and commission info—I&apos;d love to bring your ideas to life! ࣪ ִֶָ☾.
        </p>
        <a href="https://www.facebook.com/jin.rose.jiro/">
          <button className="bg-violet-500 hover:bg-violet-600 rounded-xl px-6 py-3 sm:px-8 sm:py-4 w-fit font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl">
            Commission Now
          </button>
        </a>
      </div>

      <div className="bg-[#dcb7e0] py-10">
        <p className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-violet-500 mb-15">Price Guide</p>
        <div className="flex flex-col md:grid grid-cols-3 gap-8 place-items-center animate-in md:flex" style={{ animationDelay: "0.15s" }}>
            <PriceCard src="/layout/body-price.png" title="Body Price" height="h-80" href="/price#body" className="md:hidden"/>
            <PriceCard src="/layout/chibi-price.png" title="Chibi Price" href="/price#chibi" />
            <PriceCard src="/layout/body-price.png" title="Body Price" height="h-80" href="/price/#body" className="hidden md:flex"/>
            <PriceCard src="/layout/emotes-price.png" title="Emotes Price" href="#emotes" />
        </div>
      </div>

      <Footer/>
    </div>
  );
}

