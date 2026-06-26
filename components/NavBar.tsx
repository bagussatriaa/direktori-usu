import Image from "next/image";

export default function NavBar() {
  return (
    <header className="bg-[#006634] h-16 flex items-center justify-between">
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