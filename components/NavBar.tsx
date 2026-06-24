import Image from "next/image";

export default function NavBar() {
  return (
    <header className="bg-[#192123]">
     <div className="h-full flex items-center gap-3 px-6 py-3">
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