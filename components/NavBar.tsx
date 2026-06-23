import Image from "next/image";

export default function NavBar() {
  return (
    <header className="bg-gradient-to-r from-[#15422D] to-[#47914C] h-16">
     <div className="h-full flex items-center gap-3 px-4">
        <Image
          src="/logousu.png"
          alt="Logo USU"
          width={40}
          height={40}
        />

        <span className="text-white font-semibold">
          DIREKTORI USU
        </span>
      </div>
    </header>
  );
}