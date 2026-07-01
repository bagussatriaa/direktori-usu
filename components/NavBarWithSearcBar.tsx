import Image from "next/image";
import Link from "next/link";

import SearchSection from "./search/SearchSection";

export default function NavBar() {
  return (
    <header className="h-16 bg-[#006634]">
      <div className="flex h-full items-center justify-between pl-7 pr-8">
        
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logousu.png"
            alt="Logo USU"
            width={40}
            height={40}
          />

          <span className="text-white font-semibold">
            DIREKTORI USU
          </span>
        </Link>

        <SearchSection />

      </div>
    </header>
  );
}