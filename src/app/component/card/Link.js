import Image from "next/image";

export default function Links({ className }) {
  return (
    <div className={`bg-[#be9dc3] flex justify-center gap-5 py-5 ${className}`}>
      
      <a href="https://www.facebook.com/jin.rose.jiro/" target="_blank" rel="noopener noreferrer">
        <Image src="/icons/logo-facebook.svg" width={30} height={30} alt="facebook" />
      </a>

      <a href="https://www.instagram.com/jinrose_jiro?igsh=MWZxOXg2bDMzYzliZA%3D%3D" target="_blank" rel="noopener noreferrer">
        <Image src="/icons/logo-instagram.svg" width={30} height={30} alt="instagram" />
      </a>

      <a href="https://www.tiktok.com/@jinrose_jiro?_t=ZS-8xvuCkkNSXn&_r=1" target="_blank" rel="noopener noreferrer">
        <Image src="/icons/logo-tiktok.svg" width={30} height={30} alt="tiktok" />
      </a>

      <a href="mailto:jiro_commissions@gmail.com">
        <Image src="/icons/mail.svg" width={40} height={40} alt="email" />
      </a>

    </div>
  );
}