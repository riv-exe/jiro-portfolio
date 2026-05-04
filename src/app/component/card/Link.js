import Image from "next/image";

export default function Links({ className }) {
    return (
      <div className={`flex justify-center gap-5 my-10 ${className}`}>
        <Image
          src="/icons/logo-facebook.svg"
          width={30}
          height={30}
          alt="facebook"
        />
        <Image
          src="/icons/logo-instagram.svg"
          width={30}
          height={30}
          alt="facebook"
        />
        <Image
          src="/icons/logo-tiktok.svg"
          width={30}
          height={30}
          alt="facebook"
        />
        <Image
          src="/icons/mail.svg"
          width={40}
          height={40}
          alt="facebook"
        />
      </div>
    )
}
