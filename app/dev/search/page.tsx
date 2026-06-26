import NavBar from "@/components/NavBar";
import SearchSection from "@/components/SearchSection";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="flex justify-center mt-10">
        <SearchSection />
      </main>

    </>
  );
}